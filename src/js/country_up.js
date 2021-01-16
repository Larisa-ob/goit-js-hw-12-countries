import toastr, { error } from 'toastr';
import options from './toastr.options';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import itemsTemplate from '../templates/countries.hbs';
import 'toastr/build/toastr.min.css';

toastr.options = options;
const refs = {
    input: document.querySelector('#js-input'),
    output: document.querySelector('#js-output'),
};

refs.input.addEventListener('input', debounce(handleTextareaInput, 500));
refs.input.addEventListener('submit', e => e.preventDefault());
function handleTextareaInput(e) {
    const outputText = e.target.value;
    fetchCountries(outputText)
        .then(result => {
            if (result.length > 10) {
                toastr['warning'](
                    'Too many matches found. Please enter a more specific query!',
                );
                return;
            } else if (result.length === 1) {
                const markup = itemsTemplate(result);
                refs.output.innerHTML = `${markup}`;
                return;
            }
            const list = result.map(el => `<li> ${el.name}</li>`).join('');
            refs.output.innerHTML = `${list}`;
        })
        .catch(result => {
            toastr['error']('Country with this name not found');
            refs.output.innerHTML = ``;
        });
}

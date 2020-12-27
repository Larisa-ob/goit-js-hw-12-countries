import toastr from 'toastr';
import countriesItemTemplate from './templates/countries.hbs';
import options from './toastr.options';
import 'toastr/build/toastr.min.css';
import './styles.css';
toastr.options = options;
const url = 'https://restcountries.eu/rest/v2/name/united';
fetch(url)
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Error fetching data');
    })
    .then(data => console.log(data))
    .catch(err => {
        console.error('Error:  ', err);
    });
const refs = {
    inputForm: document.querySelector('.input-form'),
    countriesList: document.querySelector('.text-countries'),
};

import toastr from 'toastr';
import todoItemTemplate from './templates/todoitems.hbs';
import options from './toastr.options';
import 'toastr/build/toastr.min.css';
import './styles.css';
import savedTodos from './todos.json';
//import { response } from 'express';

let todos = savedTodos;
toastr.options = options;
const refs = {
    inputForm: document.querySelector('.input-form'),
    todoList: document.querySelector('.todo-list'),
};
///function getCauntryNames() {
//    return fetch('https://restcountries.eu/rest/v2/name/united')
//        .then(response => {
//            if (response.ok) return response.json();
//            throw new Error('Error fetching data');
//        })
//        .catch(err => {
//            console.error('Error: ', err);
//       });
//}

const renderList = () => {
    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML(
        'beforeend',
        todos.map(todoItemTemplate).join(''),
    );
};
const showLoader = () => {
    refs.loader.classList.add('show');
};
const hideLoader = () => {
    refs.loader.classList.remove('show');
};
const showList = () => {
    refs.todoList.classList.add('show');
};
const hideList = () => {
    refs.todoList.classList.remove('show');
};
const disableForm = () => {
    refs.inputForm.querySelector('.input').setAttribute('disabled', true);
    refs.inputForm.querySelector('.button').setAttribute('disabled', true);
};
const anableForm = () => {
    refs.inputForm.querySelector('.input').removeAttribute('disabled');
    refs.inputForm.querySelector('.button').removeAttribute('disabled');
};
const handleSubmit = e => {
    console.log(e.target);
    const target = e.target.elements.text;
    const text = target.value;
    e.preventdefault();
    if (!text) {
        return;
    }
    disableForm();
    todos.push({
        text: text,
        idDone: false,
    });
    renderList();
    anableForm();
};
//const handleTodosClick = e => {
//    getCauntryNames().then(updateView);
//};
const loadTodos = () => {
    disableForm();
    hideList();
    showLoader();
    renderList();
    hideLoader();
    showList();
    anableForm();
};
refs.inputForm.addEventListener('submit', handleSubmit);
//refs.btn.addEventListener('click', handleTodosClick);
loadTodos();

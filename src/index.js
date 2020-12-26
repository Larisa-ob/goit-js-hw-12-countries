import toastr from 'toastr';
import todoItemTemplate from './templates/todoitems.hbs';
import options from './toastr.options';
import 'toastr/build/toastr.min.css';
import './styles.css';
toastr.options = options;
import savedTodos from './todos.json';
let todos = [];

const refs = {
    inputForm: document.querySelector('.input-form'),
    todoList: document.querySelector('.todo-list'),
    loader: document.querySelector('.loader'),
};
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
    console.log(e);
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
const loadTodos = () => {
    // disableForm();
    // hideList();
    // showLoader();
    renderList();
    //   hideLoader();
    //   showList();
    //   anableForm();
};
refs.inputForm.addEventListener('submit', handleSubmit);
//refs.todoList.addEventListener('click', handleTodosClick);
loadTodos();

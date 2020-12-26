import itemsElement from './menu.json';
import itemsTemplate from './templates/menu.hbs';
import './mymain.js';
import './styles.css';
const menu = document.querySelector('.js-menu');
const makup = itemsTemplate(itemsElement);
menu.insertAdjacentHTML('beforeend', makup);

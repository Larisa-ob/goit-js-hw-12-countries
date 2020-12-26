//import itemsTemplate from './templates/menu.hbs';
//import './mymain.js';
//import './styles.css';
fetch('http://localhost:3000/users')
  .then(data => data.json())
  .then(console.log())
  .catch(error => console.log('failed to fetch'));

const refs = {
  menuItems: document.querySelector('body'),
  changeTems: document.querySelector('#theme-switch-toggle'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
if (localStorage.getItem('Theme') === Theme.DARK) {
  refs.menuItems.setAttribute('class', Theme.DARK);
  refs.changeTems.checked = true;
} else {
  refs.menuItems.setAttribute('class', Theme.LIGHT);
}
refs.menuItems.addEventListener('click', OnTheme);
function OnTheme() {
  const check = refs.changeTems.checked;
  if (check) {
    refs.menuItems.setAttribute('class', Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    refs.menuItems.setAttribute('class', Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

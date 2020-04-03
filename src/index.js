import menuList from './menu.json';
import templateItem from './templates/menuItemTemplate.hbs'
import './css/styles.css';

const refs = {
    menu: document.querySelector('ul.js-menu'),
    switcher: document.querySelector('.js-switch-input'),
    body: document.querySelector('body')
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const menuItem = templateItem(menuList);
refs.menu.insertAdjacentHTML('beforeend', menuItem);
// or ----------
// refs.menu.innerHTML = menuItem;

refs.body.classList.add(localStorage.getItem('theme'));

if (localStorage.getItem('theme') === Theme.DARK) {
    refs.switcher.checked = true;
} else refs.body.setAttribute('class', 'light-theme');

refs.body.addEventListener('change', handkeChange);

function handkeChange() {
    if (refs.switcher.checked) {
        localStorage.setItem('theme', Theme.DARK);
        refs.body.setAttribute('class', 'dark-theme');
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
        refs.body.setAttribute('class', 'light-theme');
    }
}
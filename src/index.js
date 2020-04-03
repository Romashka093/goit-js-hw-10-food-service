import menuList from './menu.json';
import template from './template.hbs'
import './styles.css';

const refs = {
    menu: document.querySelector('ul.js-menu'),
    switcher: document.querySelector('.js-switch-input'),
    body: document.querySelector('body')
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const menuItem = template(menuList);
refs.menu.innerHTML = menuItem;

refs.switcher.addEventListener('click', handleChange);

function handleChange(evt) {
    console.dir(evt.target)
    if (evt.target) {
        refs.body.classList.add(Theme.DARK);
        // evt.target.checked = true
    }
}


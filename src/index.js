import './assets/styles/styles.scss';
import navBar from './components/navBar';
import menuPage from './components/menu';
import footer from './components/footer';
import homePage from './components/home';
import contactPage from './components/contact';

const rootElement = document.querySelector('#content');
const nav = () => navBar('beforeend', rootElement);
const mainMenu = () => menuPage('beforeend', rootElement);
const mainHome = () => homePage('beforeend', rootElement);
const mainContact = () => contactPage('beforeend', rootElement);
const mainFooter = () => footer('beforeend', rootElement);

nav();
mainMenu();
mainFooter();

const allNavItems = document.querySelectorAll('#nav-item');

const tabSwitcher = (moduleToDisplay) => {
  rootElement.innerHTML = '';
  moduleToDisplay();
};

// eventListeners
allNavItems.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.classList.contains('home')) {
      tabSwitcher(mainHome);
    }
    if (event.target.classList.contains('menu')) {
      tabSwitcher(mainMenu);
    }
    if (event.target.classList.contains('contact')) {
      tabSwitcher(mainContact);
    }
  });
});

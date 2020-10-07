import './assets/styles/styles.scss';
import navBar from './components/navBar';
import menuPage from './components/menu';
import footer from './components/footer';
import { homePage, mainComponent } from './components/home';
import contactPage from './components/contact';

const rootElement = document.querySelector('#content');
const mainWrapper = () => mainComponent('beforeend', rootElement);
navBar('beforeend', rootElement);
mainWrapper();
footer('beforeend', rootElement);
const mainContainer = document.querySelector('#main-container');

const mainMenu = () => menuPage('beforeend', mainContainer);
const mainHome = () => homePage('beforeend', mainContainer);
const mainContact = () => contactPage('beforeend', mainContainer);

mainMenu();

const allNavItems = document.querySelectorAll('#nav-item');

const tabSwitcher = (moduleToDisplay) => {
  mainContainer.innerHTML = '';
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

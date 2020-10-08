import './assets/styles/styles.scss';
import navBar from './components/navBar';
import menuPage from './components/menu';
import footer from './components/footer';
import { homePage, mainComponent } from './components/home';
import contactPage from './components/contact';

const rootElement = document.querySelector('#content');
const mainWrapper = () => mainComponent(rootElement);
navBar(rootElement);
mainWrapper();
footer(rootElement);
const mainContainer = document.querySelector('#main-container');

const mainMenu = () => menuPage('beforeend', mainContainer);
const mainHome = () => homePage('beforeend', mainContainer);
const mainContact = () => contactPage('beforeend', mainContainer);

mainHome();

const allNavItems = document.querySelectorAll('#nav-item');

const tabSwitcher = (moduleToDisplay) => {
  mainContainer.innerHTML = '';
  moduleToDisplay();
};

const deleteClassActive = () => {
  allNavItems.forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
};

const addClassActive = (item) => {
  item.classList.add('active');
};

// eventListeners
allNavItems.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target.classList.contains('home')) {
      deleteClassActive();
      addClassActive(event.target);
      tabSwitcher(mainHome);
    }
    if (event.target.classList.contains('menu')) {
      deleteClassActive();
      addClassActive(event.target);
      tabSwitcher(mainMenu);
    }
    if (event.target.classList.contains('contact')) {
      deleteClassActive();
      addClassActive(event.target);
      tabSwitcher(mainContact);
    }
  });
});

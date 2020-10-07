import './assets/styles/styles.scss';
import navBar from './components/navBar';
import menuPage from './components/menu';
import footer from './components/footer';

const rootElement = document.querySelector('#content');

navBar('beforeend', rootElement);
menuPage('beforeend', rootElement);
footer('beforeend', rootElement);

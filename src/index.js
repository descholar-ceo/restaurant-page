import './assets/styles/styles.scss';
import NavBar from './NavBar';
import MainContent from './MainContent';
import footer from './footer';
const rootElement = document.querySelector('#content')

NavBar('beforeend', rootElement)
MainContent('beforeend', rootElement)
footer('beforeend', rootElement)

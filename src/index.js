import './assets/styles/styles.scss';
import NavBar from './NavBar';
import MainContent from './MainContent';
const rootElement = document.querySelector('#content')

NavBar('beforeend', rootElement)
MainContent('beforeend', rootElement)

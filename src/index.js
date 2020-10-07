import './assets/styles/styles.scss';
import navBar from './navBar';
import mainContent from './mainContent';
import footer from './footer';
const rootElement = document.querySelector('#content')

navBar('beforeend', rootElement)
mainContent('beforeend', rootElement)
footer('beforeend', rootElement)

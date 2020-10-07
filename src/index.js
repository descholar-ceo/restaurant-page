import './assets/styles/styles.scss';
import navBar from './components/navBar';
import mainContent from './components/mainContent';
import footer from './components/footer';

const rootElement = document.querySelector('#content')

navBar('beforeend', rootElement)
mainContent('beforeend', rootElement)
footer('beforeend', rootElement)

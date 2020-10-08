const mainComponent = (element) => {
  const mainElt = document.createElement('main');
  mainElt.setAttribute('class', 'main-page width-100 height-100');
  mainElt.setAttribute('id', 'main-container');
  element.append(mainElt);
};

const homePage = (element) => {
  const homeSection = document.createElement('section');
  homeSection.setAttribute('class', 'homepage-section width-100 padding-2 centered-h-v');
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('class', 'white-transparent-bg padding-5 padding-lg-half width-80 centered-horizontal black-text rounded-corners-1 box-with-shadows');
  const homeTopH1 = document.createElement('h1');
  homeTopH1.setAttribute('class', 'centered-text');
  homeTopH1.textContent = 'Welcome to restaurant page';
  const homeParagraph = document.createElement('p');
  homeParagraph.setAttribute('class', 'centered-text margin-y-2');
  homeParagraph.textContent = `"
  With quick-service, fast casual, and meal delivery services,
  food is getting faster and more convenient by the New York minute. 
  More and more players seem to be getting into the game.
  But Panda Express and Panda Express Catering know how to handle fast orders and do it right.
  "`;
  const homeBottomH1 = document.createElement('h1');
  homeBottomH1.setAttribute('class', 'centered-text');
  homeBottomH1.textContent = 'Click the menu option above to be able to read all the vailable menu';

  homeDiv.appendChild(homeTopH1);
  homeDiv.appendChild(homeParagraph);
  homeDiv.appendChild(homeBottomH1);

  homeSection.appendChild(homeDiv);

  element.append(homeSection);
};

export { homePage, mainComponent };

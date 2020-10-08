const mainComponent = (element) => {
  const mainElt = document.createElement('main');
  mainElt.setAttribute('class', 'main-page width-100 height-100');
  mainElt.setAttribute('id', 'main-container');
  element.append(mainElt);
};

const homePage = (location, element) => {
  element.insertAdjacentHTML(location, `
    <section class="homepage-section width-100 padding-2 centered-h-v">
      <div class="white-transparent-bg padding-5 padding-lg-half width-80 centered-horizontal black-text rounded-corners-1 box-with-shadows">
        <h1 class="centered-text">Welcome to restaurant page</h1>
        <p class="centered-text margin-y-2">"
          With quick-service, fast casual, and meal delivery services,
          food is getting faster and more convenient by the New York minute. 
          More and more players seem to be getting into the game.
          But Panda Express and Panda Express Catering know how to handle fast orders and do it right.
        "</p>
        <h1 class="centered-text">Click the menu option above to be able to read all the vailable menu</h1>
      </div>
    </section>
  `);
};

export { homePage, mainComponent };

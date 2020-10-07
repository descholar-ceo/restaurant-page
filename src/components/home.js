import homePic from '../assets/images/img-0.jpg';

const mainComponent = (location, element) => {
  element.insertAdjacentHTML(location, `
    <main class="main-page width-100 height-100" id="main-container"></main>`);
};

const homePage = (location, element) => {
  element.insertAdjacentHTML(location, `
    <section class="homepage-section width-100">
      <div>
        <!--<img src="${homePic}" alt="restaurant page picture"/>-->
      </div>
    </section>
  `);
};

export { homePage, mainComponent };

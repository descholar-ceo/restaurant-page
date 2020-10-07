const mainComponent = (location, element) => {
  element.insertAdjacentHTML(location, `
    <main class="main-page width-100 height-100" id="main-container"></main>`);
};

const homePage = (location, element) => {
  element.insertAdjacentHTML(location, `
  
  `);
};

export { homePage, mainComponent };

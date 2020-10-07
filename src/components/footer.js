const footer = (location, element) => {
  element.insertAdjacentHTML(location, `
  <footer>    
        <section class="width-100 m-0 padding-y-1 centered-h-v black-bg">
            <div class="centered-h-v margin-y-1">
                <h6>
                    <span class="text-1 white-text">
                    <i class="fa fa-copyright" aria-hidden="true"></i> restaurant page 2020</span>
                </h6>
               </div>
        </section>
    </footer>
`);
};

export default footer;
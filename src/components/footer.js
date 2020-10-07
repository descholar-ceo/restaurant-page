const footer = (location, element) => {
  element.insertAdjacentHTML(location, `<footer>    
        <section class="width-100 m-0 padding-y-1 centered-h-v black-bg">
            <div class="centered-h-v margin-y-1">
                <h6>
                    <a class="text-1 white-text" href="mailto:emmamugira@gmail.com" target="_blank">emmamugira@gmail.com</a>
                </h6>
               </div>
            <div class="flex-space-between width-40 text-1">
               
                <a href="https://github.com/descholar-ceo" target="_blank">
                    <i class="fa fa-github white-text" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/mugirase-emmanuel" target="_blank">
                    <i class="fa fa-linkedin white-text" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/descholar3" target="_blank">
                    <i class="fa fa-twitter white-text" aria-hidden="true"></i>
                </a>
                <a href="https://medium.com/@emmamugira" target="_blank">
                    <i class="fa fa-medium white-text" aria-hidden="true"></i>
                </a>
            </div>
        </section>
    </footer>
`);
};

export default footer;
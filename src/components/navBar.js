const navBar = (location, element) => {
  element.insertAdjacentHTML(location, `
    <header class="primary-bg centered-h-v padding-y-1 padding-lg-half width-100">
        <nav class="margin-y-1 centered-h-v width-100 flex-md-horizontal-right">
            <ul class="flex-horizontal-center width-100 width-md-60">
                <li class="margin-x-1 home" id="nav-item">
                    <i class="fa fa-home hidden-sm" aria-hidden="true"></i>
                    Home
                </li>
                <li class="margin-x-1 contact" id="nav-item">
                    <i class="fa fa-address-card hidden-sm" aria-hidden="true"></i>
                    Contact
                </li>
                <li class="margin-x-1 menu" id="nav-item">
                    <i class="fa fa-bars hidden-sm" aria-hidden="true"></i>
                    Menu
                </li>
            </ul>
        </nav>
    </header>
    `);
};

export default navBar;

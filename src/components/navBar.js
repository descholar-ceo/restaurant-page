const navBar = (location, element) => {
//   const headerElt = document.creat

  element.insertAdjacentHTML(location, `
    <header class="primary-bg centered-h-v width-100">
        <nav class="centered-h-v width-100 flex-md-horizontal-right">
            <ul class="flex-horizontal-center width-100 width-md-60">
                <li class="padding-1 margin-x-1 active home" id="nav-item">
                    <i class="fa fa-home hidden-sm" aria-hidden="true"></i>
                    Home
                </li>
                <li class="padding-1 margin-x-1 contact" id="nav-item">
                    <i class="fa fa-address-card hidden-sm" aria-hidden="true"></i>
                    Contact
                </li>
                <li class="padding-1 margin-x-1 menu" id="nav-item">
                    <i class="fa fa-bars hidden-sm" aria-hidden="true"></i>
                    Menu
                </li>
            </ul>
        </nav>
    </header>
    `);
};

export default navBar;

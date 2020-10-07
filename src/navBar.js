const navBar = (location,element) => {
    element.insertAdjacentHTML(location,`
    <header class="primary-bg centered-h-v padding-y-1 padding-lg-half width-100">
        <nav class="margin-y-1 centered-h-v width-100 flex-md-horizontal-right">
            <ul class="flex-horizontal-center width-100 width-md-60">
                <li class="margin-x-1">
                    <a class="white-text" href="#home">
                        <i class="fa fa-home hidden-sm" aria-hidden="true"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li class="margin-x-1">
                    <a class="white-text" href="#projects">
                        <i class="fa fa-briefcase hidden-sm" aria-hidden="true"></i>
                        <span>Projects</span>
                    </a>
                </li>
                <li class="margin-x-1">
                    <a class="white-text" href="#about-me">
                        <i class="fa fa-meetup hidden-sm" aria-hidden="true"></i>
                        <span>About</span>
                    </a>
                </li>
                <li class="margin-x-1">
                    <a class="white-text" href="#contact">
                        <i class="fa fa-address-card hidden-sm" aria-hidden="true"></i>
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    `)
};

export default navBar;

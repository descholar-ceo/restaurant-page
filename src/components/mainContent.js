import imageOne from '../assets/images/img-1.jpg';
import imageTwo from '../assets/images/img-2.jpg';
import imageThree from '../assets/images/img-3.jpg';
import imageFour from '../assets/images/img-4.jpg';

const mainContent = (location, element) => {
  element.insertAdjacentHTML(location, `
    <main class="main-page width-100 height-100">
        
        <section id="projects" class="width-100 m-0 padding-y-1 centered-h-v">
            <h1 class="text-2 centered-text margin-y-1 width-90">My projects</h1>
            <div class="col-md-6 col-lg-4 margin-y-1 width-100 centered-h-v white-transparent-bg padding-1 rounded-corners-1">
                <div class="width-100 box-with-shadows padding-1 width-md-90 margin-y-1">
                    <div class=" centered-h-v">
                        <h3 class="centered-text margin-y-1">Accommodation directory</h3>
                        <img class="project-screenshot" src="${imageOne}"
                            alt="Accommodation directory" />
                    </div>
                    <div class="flex-horizontal-center">
                        <button class="button-primary-outline primary-text white-text" type="button">HTML5 and CSS3</button>
                    </div>
                    <div>
                        <a href="./pages/accommodation-directory.html" class="centered-text button-secondry white-text width-100" target="_blank">More description</a>
                    </div>
                </div>
                <div class="width-100 box-with-shadows padding-1 width-md-90 margin-y-1">
                    <div class=" centered-h-v">
                        <h3 class="centered-text margin-y-1">Telegram chatbot</h3>
                        <img class="project-screenshot"
                            src="${imageTwo}"
                            alt="Accommodation directory" />
                    </div>
                    <div class="flex-horizontal-center">
                        <button class="button-primary-outline primary-text white-text" type="button">Ruby</button>
                    </div>
                    <div>
                        <a href="./pages/telegram-bot.html" class="button-secondry white-text width-100 centered-text" target="_blank">More description</a>
                    </div>
                </div>
                <div class="width-100 box-with-shadows padding-1 width-md-90 margin-y-1">
                    <div class=" centered-h-v">
                        <h3 class="centered-text margin-y-1">Boiler</h3>
                        <img class="project-screenshot" src="${imageThree}"
                            alt="Accommodation directory" />
                    </div>
                    <div class="flex-horizontal-center">
                        <button class="button-primary-outline primary-text white-text">Golang</button>
                    </div>
                    <div>
                        <a href="pages/boiler.html" class="button-secondry white-text width-100 centered-text" target="_blank">More description</a>
                    </div>
                </div>
                <div class="box-with-shadows padding-1 width-md-90 margin-y-1 width-100">
                    <div class=" centered-h-v">
                        <h3 class="centered-text margin-y-1">Phone History Store</h3>
                        <img class="project-screenshot" src="${imageFour}"
                            alt="Phone History Store" />
                    </div>
                    <div class="flex-horizontal-center">
                        <button class="button-primary-outline primary-text white-text" type="button">Java and XML</button>
                    </div>
                    <div>
                        <a href="/pages/phone-history-store.html" class="button-secondry white-text width-100 centered-text" target="_blank">More description</a>
                    </div>
                </div>
            </div>
        </section>
    `);
};

export default mainContent;

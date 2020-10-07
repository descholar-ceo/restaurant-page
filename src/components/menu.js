import imageOne from '../assets/images/img-1.jpg';
import imageTwo from '../assets/images/img-2.jpg';
import imageThree from '../assets/images/img-3.jpg';
import imageFour from '../assets/images/img-4.jpg';
import imageFive from '../assets/images/img-5.jpeg';

const menuPage = (location, element) => {
  element.insertAdjacentHTML(location, `
        <section id="projects" class="width-100 m-0 padding-y-1 centered-h-v">
            <div class="col-md-6 col-lg-4 margin-y-1 width-100 centered-h-v white-transparent-bg padding-1 rounded-corners-1">
                <div class="width-100 box-with-shadows padding-1 width-md-90 margin-y-1">
                    <div class=" centered-h-v width-100">
                        <img class="meal-img" src="${imageOne}"
                            alt="Meal for vegans" />
                    </div>
                    <h3 class="centered-text margin-y-1">Meal for vegans</h3>
                    <div class="flex-horizontal-center">
                        <button 
                            class="button-primary-outline primary-text white-text" 
                            type="button">Rwf 1,100</button>
                    </div>
                    <div>
                        <a 
                            href="#"
                            class="centered-text button-secondry white-text width-100">Order here</a>
                    </div>
                </div>

                <div class="width-100 box-with-shadows padding-1 width-md-90 margin-y-1">
                    <div class=" centered-h-v">
                        <img class="meal-img"
                            src="${imageTwo}"
                            alt="Chiken" />
                    </div>
                    <h3 class="centered-text margin-y-1">Chicken</h3>
                    <div class="flex-horizontal-center">
                        <button
                            class="button-primary-outline primary-text white-text" 
                            type="button">Rwf 12,000</button>
                    </div>
                    <div>
                        <a 
                            href="#"
                            class="button-secondry white-text width-100 centered-text">Order here</a>
                    </div>
                </div>

                <div class="width-100 box-with-shadows padding-1 width-md-90 margin-y-1">
                    <div class=" centered-h-v">
                        <img class="meal-img" src="${imageThree}"
                            alt="Accommodation directory" />
                    </div>
                    <h3 class="centered-text margin-y-1">Meal for losing weight</h3>
                    <div class="flex-horizontal-center">
                        <button class="button-primary-outline primary-text white-text">Rwf 1,500</button>
                    </div>
                    <div>
                        <a 
                            href="#" class="button-secondry white-text width-100 centered-text">Order here</a>
                    </div>
                </div>

                <div class="box-with-shadows padding-1 width-md-90 margin-y-1 width-100">
                    <div class=" centered-h-v">
                        <img class="meal-img" src="${imageFour}"
                            alt="Burger and sandwitch" />
                    </div>
                    <h3 class="centered-text margin-y-1">Burger and sandwitch</h3>
                    <div class="flex-horizontal-center">
                        <button
                            class="button-primary-outline primary-text white-text" 
                            type="button">Rwf 800</button>
                    </div>
                    <div>
                        <a href="#" class="button-secondry white-text width-100 centered-text">Order here</a>
                    </div>
                </div>

                <div class="box-with-shadows padding-1 width-md-90 margin-y-1 width-100">
                    <div class=" centered-h-v">
                        <img class="meal-img" src="${imageFive}"
                            alt="Best chips and bread" />
                    </div>

                    <h3 class="centered-text margin-y-1">Best chips and bread</h3>
                    <div class="flex-horizontal-center">
                        <button
                            class="button-primary-outline primary-text white-text"
                            type="button">Rwf 650</button>
                    </div>
                    <div>
                        <a href="#"
                        class="button-secondry white-text width-100 centered-text">Order here</a>
                    </div>
                </div>
            </div>
        </section>
    `);
};

export default menuPage;

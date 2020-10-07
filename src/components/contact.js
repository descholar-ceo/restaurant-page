const contactPage = (location, element) => {
  element.insertAdjacentHTML(location, `
    <section id="contact" class="primary-bg padding-y-1 padding-lg-half width-100 white-text">
            <h1 class="centered-text width-90">I would like to hear from you:</h1>
            <div class="flex-horizontal-center margin-y-1 width-100">
                <form class="width-90">
                    <div class="col-md-6">
                        <div class="margin-y-1 width-100">
                            <input
                                
                                type="text" 
                                name="full-name" 
                                id="full-name" 
                                placeholder="Full name"
                                class="width-100 text-1-next"/>
                        </div>
                        <div class="margin-y-1 width-100">
                            <input
                                
                                type="email" 
                                name="email-address" 
                                id="email-address" 
                                placeholder="Your email address"
                                class="width-100 text-1-next"/>
                        </div>
                    </div>
                    
                    <div class="margin-y-1">
                        <textarea
                            
                            placeholder="Your message here..." 
                            id="message" 
                            name="message" 
                            rows="6" 
                            cols="50"
                            class="width-100 text-1-next"></textarea>
                    </div>
                    <div class="width-100 centered-h-v">
                        <button
                            
                            type="button"
                            class="button-white-transparent">Send me message</button>
                    </div>
                </form>
            </div>
        </section>
    `);
};

export default contactPage;

const contactPage = (location, element) => {
  const contactSection = document.createElement('section');
  contactSection.setAttribute('id', 'contact');
  contactSection.setAttribute('class', 'width-100 padding-2 primary-bg');
  contactSection.insertAdjacentHTML(location, `
    <div class="third-transparent-bg padding-y-1 padding-lg-half width-80 centered-horizontal white-text rounded-corners-1 box-with-shadows">
        <h1 class="centered-text width-90">We would like to hear from you:</h1>
        <div class="contact-info margin-y-2 line-height width-90">
          <h4 class="centered-text centered-text">You can call us on : +250 720 000 000</h4>
          <h4 class="centered-text centered-text">Send us an sms on : +250 720 000 001</h4>
          <h4 class="centered-text centered-text">Or send us an email on : ourrestaurant@restaurant.page</h4>
        </div>
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
      </div>
  `);

  element.append(contactSection);
};

export default contactPage;

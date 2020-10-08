const contactPage = (element) => {
  // contact section
  const contactSection = document.createElement('section');
  contactSection.setAttribute('id', 'contact');
  contactSection.setAttribute('class', 'width-100 padding-2 primary-bg');

  // conatct div container
  const contactDivContainer = document.createElement('div');
  contactDivContainer.setAttribute('class', 'third-transparent-bg padding-y-1 padding-lg-half width-80 centered-horizontal white-text rounded-corners-1 box-with-shadows');

  // conatct top h1
  const contactTopH1 = document.createElement('h1');
  contactTopH1.setAttribute('class', 'centered-text width-90');
  contactTopH1.textContent = 'We would like to hear from you:';

  // div phone contact
  const divPhoneContactContainer = document.createElement('div');
  divPhoneContactContainer.setAttribute('class', 'contact-info margin-y-2 line-height width-90');

  // h4 phone number
  const h4PhoneNumber = document.createElement('h4');
  h4PhoneNumber.setAttribute('class', 'centered-text');
  h4PhoneNumber.textContent = 'You can call us on : +250 720 000 000';
  divPhoneContactContainer.appendChild(h4PhoneNumber);

  // h4 Sms number
  const h4SmsNumber = document.createElement('h4');
  h4SmsNumber.setAttribute('class', 'centered-text');
  h4SmsNumber.textContent = 'Send us an sms on : +250 720 000 001';
  divPhoneContactContainer.appendChild(h4SmsNumber);

  // h4 Email Address
  const h4EmailAddress = document.createElement('h4');
  h4EmailAddress.setAttribute('class', 'centered-text');
  h4EmailAddress.textContent = 'Or send us an email on : ourrestaurant@restaurant.page';
  divPhoneContactContainer.appendChild(h4EmailAddress);

  // divFormContactContainer
  const divFormContactContainer = document.createElement('div');
  divFormContactContainer.setAttribute('class', 'flex-horizontal-center margin-y-1 width-100');

  // form contact
  const formContact = document.createElement('form');
  formContact.setAttribute('class', 'width-90');

  // names and email div
  const namesAndEmailDiv = document.createElement('div');
  namesAndEmailDiv.setAttribute('class', 'col-md-6');

  // names div
  const namesDiv = document.createElement('div');
  namesDiv.setAttribute('class', 'margin-y-1 width-100');

  // names input
  const fullNameInput = document.createElement('input');
  fullNameInput.setAttribute('class', 'width-100 text-1-next');
  fullNameInput.setAttribute('type', 'text');
  fullNameInput.setAttribute('id', 'full-name');
  fullNameInput.setAttribute('placeholder', 'Full name ... ');
  namesDiv.appendChild(fullNameInput);

  // email div
  const emailDiv = document.createElement('div');
  emailDiv.setAttribute('class', 'margin-y-1 width-100');

  // email input
  const emailInput = document.createElement('input');
  emailInput.setAttribute('class', 'width-100 text-1-next');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email-address');
  emailInput.setAttribute('placeholder', 'Your email address ... ');
  emailDiv.appendChild(emailInput);

  // textArea div
  const textAreaDiv = document.createElement('div');
  textAreaDiv.setAttribute('class', 'margin-y-1 width-100');

  // textarea input
  const textArea = document.createElement('textarea');
  textArea.setAttribute('class', 'width-100 text-1-next');
  textArea.setAttribute('rows', '6');
  textArea.setAttribute('cols', '50');
  textArea.setAttribute('id', 'message');
  textArea.setAttribute('placeholder', 'Your message here ... ');
  textAreaDiv.appendChild(textArea);

  // submitBtn div
  const submitBtnDiv = document.createElement('div');
  submitBtnDiv.setAttribute('class', 'width-100 centered-h-v');

  // sendMsgBtn
  const sendMsgBtn = document.createElement('button');
  sendMsgBtn.setAttribute('class', 'button-white-transparent');
  sendMsgBtn.setAttribute('type', 'button');
  sendMsgBtn.textContent = 'Send us message';
  submitBtnDiv.appendChild(sendMsgBtn);

  // add names and email in one div
  namesAndEmailDiv.appendChild(namesDiv);
  namesAndEmailDiv.appendChild(emailDiv);

  // add all form element in a form
  formContact.appendChild(namesAndEmailDiv);
  formContact.appendChild(textAreaDiv);
  formContact.appendChild(submitBtnDiv);

  // add form to its div
  divFormContactContainer.appendChild(formContact);

  // add all elements together
  contactDivContainer.appendChild(contactTopH1);
  contactDivContainer.appendChild(divPhoneContactContainer);
  contactDivContainer.appendChild(divFormContactContainer);
  contactSection.appendChild(contactDivContainer);
  element.append(contactSection);
};

export default contactPage;

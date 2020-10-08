const footer = (element) => {
  const footerElt = document.createElement('footer');
  const footerSection = document.createElement('section');
  footerSection.setAttribute('class', 'width-100 m-0 padding-y-1 centered-h-v black-bg');
  const footerDiv = document.createElement('div');
  footerDiv.setAttribute('class', 'centered-h-v margin-y-1');
  const footerH6 = document.createElement('h6');
  const footerSpan = document.createElement('span');
  footerSpan.setAttribute('class', 'text-1 white-text');
  const footerIcon = document.createElement('i');
  footerIcon.setAttribute('class', 'fa fa-copyright');
  footerIcon.setAttribute('aria-hidden', 'true');
  const footerText = document.createTextNode('restaurant page 2020');

  footerSpan.appendChild(footerIcon);
  footerSpan.appendChild(footerText);
  footerH6.appendChild(footerSpan);
  footerDiv.appendChild(footerH6);
  footerSection.appendChild(footerDiv);
  footerElt.appendChild(footerSection);
  element.append(footerElt);
};

export default footer;
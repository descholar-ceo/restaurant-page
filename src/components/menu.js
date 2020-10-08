import imageOne from '../assets/images/img-1.jpg';
import imageTwo from '../assets/images/img-2.jpg';
import imageThree from '../assets/images/img-3.jpg';
import imageFour from '../assets/images/img-4.jpg';
import imageFive from '../assets/images/img-5.jpeg';

const menuPage = (location, element) => {
  // menu section
  const menuSection = document.createElement('section');
  menuSection.setAttribute('class', 'width-100 m-0 padding-y-1 centered-h-v');

  // menu container
  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('class', 'col-md-6 col-lg-4 margin-y-1 width-100 centered-h-v white-transparent-bg padding-1 rounded-corners-1');

  // ITEM 1
  // individualMenuItemDiv1
  const individualMenuItemDiv1 = document.createElement('div');
  individualMenuItemDiv1.setAttribute('class', 'width-100 box-with-shadows padding-1 width-md-90 margin-y-1');

  // menuItemImgDiv1
  const menuItemImgDiv1 = document.createElement('div');
  menuItemImgDiv1.setAttribute('class', 'centered-h-v width-100');

  // menuItemImg1
  const menuItemImg1 = document.createElement('img');
  menuItemImg1.setAttribute('class', 'meal-img');
  menuItemImg1.setAttribute('src', imageOne);
  menuItemImgDiv1.appendChild(menuItemImg1);

  // menuItemH31
  const menuItemH31 = document.createElement('h3');
  menuItemH31.setAttribute('class', 'centered-text margin-y-1');
  menuItemH31.textContent = 'Meal for vegans';

  // priceDiv1
  const priceDiv1 = document.createElement('div');
  priceDiv1.setAttribute('class', 'flex-horizontal-center');

  // priceBtn1
  const priceBtn1 = document.createElement('button');
  priceBtn1.setAttribute('type', 'button');
  priceBtn1.setAttribute('class', 'button-primary-outline primary-text white-text');
  priceBtn1.textContent = 'Rwf 1,100';
  priceDiv1.appendChild(priceBtn1);

  // orderDiv
  const orderDiv1 = document.createElement('div');

  // orderAnchorElt1
  const orderAnchorElt1 = document.createElement('a');
  orderAnchorElt1.setAttribute('href', '#');
  orderAnchorElt1.setAttribute('class', 'centered-text button-secondry white-text width-100');
  orderAnchorElt1.textContent = 'Order here';
  orderDiv1.appendChild(orderAnchorElt1);

  // put together all induvidualItem components
  individualMenuItemDiv1.appendChild(menuItemImgDiv1);
  individualMenuItemDiv1.appendChild(menuItemH31);
  individualMenuItemDiv1.appendChild(priceDiv1);
  individualMenuItemDiv1.appendChild(orderDiv1);

  // ITEM 2
  // individualMenuItemDiv2
  const individualMenuItemDiv2 = document.createElement('div');
  individualMenuItemDiv2.setAttribute('class', 'width-100 box-with-shadows padding-1 width-md-90 margin-y-1');

  // menuItemImgDiv2
  const menuItemImgDiv2 = document.createElement('div');
  menuItemImgDiv2.setAttribute('class', 'centered-h-v width-100');

  // menuItemImg2
  const menuItemImg2 = document.createElement('img');
  menuItemImg2.setAttribute('class', 'meal-img');
  menuItemImg2.setAttribute('src', imageTwo);
  menuItemImgDiv2.appendChild(menuItemImg2);

  // menuItemH32
  const menuItemH32 = document.createElement('h3');
  menuItemH32.setAttribute('class', 'centered-text margin-y-1');
  menuItemH32.textContent = 'Meal for vegans';

  // priceDiv2
  const priceDiv2 = document.createElement('div');
  priceDiv2.setAttribute('class', 'flex-horizontal-center');

  // priceBtn2
  const priceBtn2 = document.createElement('button');
  priceBtn2.setAttribute('type', 'button');
  priceBtn2.setAttribute('class', 'button-primary-outline primary-text white-text');
  priceBtn2.textContent = 'Rwf 1,100';
  priceDiv2.appendChild(priceBtn2);

  // orderDiv
  const orderDiv2 = document.createElement('div');

  // orderAnchorElt2
  const orderAnchorElt2 = document.createElement('a');
  orderAnchorElt2.setAttribute('href', '#');
  orderAnchorElt2.setAttribute('class', 'centered-text button-secondry white-text width-100');
  orderAnchorElt2.textContent = 'Order here';
  orderDiv2.appendChild(orderAnchorElt2);

  // put together all induvidualItem components
  individualMenuItemDiv2.appendChild(menuItemImgDiv2);
  individualMenuItemDiv2.appendChild(menuItemH32);
  individualMenuItemDiv2.appendChild(priceDiv2);
  individualMenuItemDiv2.appendChild(orderDiv2);

  // ITEM 3
  // individualMenuItemDiv3
  const individualMenuItemDiv3 = document.createElement('div');
  individualMenuItemDiv3.setAttribute('class', 'width-100 box-with-shadows padding-1 width-md-90 margin-y-1');

  // menuItemImgDiv3
  const menuItemImgDiv3 = document.createElement('div');
  menuItemImgDiv3.setAttribute('class', 'centered-h-v width-100');

  // menuItemImg3
  const menuItemImg3 = document.createElement('img');
  menuItemImg3.setAttribute('class', 'meal-img');
  menuItemImg3.setAttribute('src', imageThree);
  menuItemImgDiv3.appendChild(menuItemImg3);

  // menuItemH33
  const menuItemH33 = document.createElement('h3');
  menuItemH33.setAttribute('class', 'centered-text margin-y-1');
  menuItemH33.textContent = 'Meal for vegans';

  // priceDiv3
  const priceDiv3 = document.createElement('div');
  priceDiv3.setAttribute('class', 'flex-horizontal-center');

  // priceBtn3
  const priceBtn3 = document.createElement('button');
  priceBtn3.setAttribute('type', 'button');
  priceBtn3.setAttribute('class', 'button-primary-outline primary-text white-text');
  priceBtn3.textContent = 'Rwf 1,100';
  priceDiv3.appendChild(priceBtn3);

  // orderDiv
  const orderDiv3 = document.createElement('div');

  // orderAnchorElt3
  const orderAnchorElt3 = document.createElement('a');
  orderAnchorElt3.setAttribute('href', '#');
  orderAnchorElt3.setAttribute('class', 'centered-text button-secondry white-text width-100');
  orderAnchorElt3.textContent = 'Order here';
  orderDiv3.appendChild(orderAnchorElt3);

  // put together all induvidualItem components
  individualMenuItemDiv3.appendChild(menuItemImgDiv3);
  individualMenuItemDiv3.appendChild(menuItemH33);
  individualMenuItemDiv3.appendChild(priceDiv3);
  individualMenuItemDiv3.appendChild(orderDiv3);

  // ITEM 4
  // individualMenuItemDiv4
  const individualMenuItemDiv4 = document.createElement('div');
  individualMenuItemDiv4.setAttribute('class', 'width-100 box-with-shadows padding-1 width-md-90 margin-y-1');

  // menuItemImgDiv4
  const menuItemImgDiv4 = document.createElement('div');
  menuItemImgDiv4.setAttribute('class', 'centered-h-v width-100');

  // menuItemImg4
  const menuItemImg4 = document.createElement('img');
  menuItemImg4.setAttribute('class', 'meal-img');
  menuItemImg4.setAttribute('src', imageFour);
  menuItemImgDiv4.appendChild(menuItemImg4);

  // menuItemH34
  const menuItemH34 = document.createElement('h3');
  menuItemH34.setAttribute('class', 'centered-text margin-y-1');
  menuItemH34.textContent = 'Meal for vegans';

  // priceDiv4
  const priceDiv4 = document.createElement('div');
  priceDiv4.setAttribute('class', 'flex-horizontal-center');

  // priceBtn4
  const priceBtn4 = document.createElement('button');
  priceBtn4.setAttribute('type', 'button');
  priceBtn4.setAttribute('class', 'button-primary-outline primary-text white-text');
  priceBtn4.textContent = 'Rwf 1,100';
  priceDiv4.appendChild(priceBtn4);

  // orderDiv
  const orderDiv4 = document.createElement('div');

  // orderAnchorElt4
  const orderAnchorElt4 = document.createElement('a');
  orderAnchorElt4.setAttribute('href', '#');
  orderAnchorElt4.setAttribute('class', 'centered-text button-secondry white-text width-100');
  orderAnchorElt4.textContent = 'Order here';
  orderDiv4.appendChild(orderAnchorElt4);

  // put together all induvidualItem components
  individualMenuItemDiv4.appendChild(menuItemImgDiv4);
  individualMenuItemDiv4.appendChild(menuItemH34);
  individualMenuItemDiv4.appendChild(priceDiv4);
  individualMenuItemDiv4.appendChild(orderDiv4);

  // ITEM 5
  // individualMenuItemDiv5
  const individualMenuItemDiv5 = document.createElement('div');
  individualMenuItemDiv5.setAttribute('class', 'width-100 box-with-shadows padding-1 width-md-90 margin-y-1');

  // menuItemImgDiv5
  const menuItemImgDiv5 = document.createElement('div');
  menuItemImgDiv5.setAttribute('class', 'centered-h-v width-100');

  // menuItemImg5
  const menuItemImg5 = document.createElement('img');
  menuItemImg5.setAttribute('class', 'meal-img');
  menuItemImg5.setAttribute('src', imageFive);
  menuItemImgDiv5.appendChild(menuItemImg5);

  // menuItemH35
  const menuItemH35 = document.createElement('h3');
  menuItemH35.setAttribute('class', 'centered-text margin-y-1');
  menuItemH35.textContent = 'Meal for vegans';

  // priceDiv5
  const priceDiv5 = document.createElement('div');
  priceDiv5.setAttribute('class', 'flex-horizontal-center');

  // priceBtn5
  const priceBtn5 = document.createElement('button');
  priceBtn5.setAttribute('type', 'button');
  priceBtn5.setAttribute('class', 'button-primary-outline primary-text white-text');
  priceBtn5.textContent = 'Rwf 1,100';
  priceDiv5.appendChild(priceBtn5);

  // orderDiv
  const orderDiv5 = document.createElement('div');

  // orderAnchorElt5
  const orderAnchorElt5 = document.createElement('a');
  orderAnchorElt5.setAttribute('href', '#');
  orderAnchorElt5.setAttribute('class', 'centered-text button-secondry white-text width-100');
  orderAnchorElt5.textContent = 'Order here';
  orderDiv5.appendChild(orderAnchorElt5);

  // put together all induvidualItem components
  individualMenuItemDiv5.appendChild(menuItemImgDiv5);
  individualMenuItemDiv5.appendChild(menuItemH35);
  individualMenuItemDiv5.appendChild(priceDiv5);
  individualMenuItemDiv5.appendChild(orderDiv5);

  menuContainer.appendChild(individualMenuItemDiv1);
  menuContainer.appendChild(individualMenuItemDiv2);
  menuContainer.appendChild(individualMenuItemDiv3);
  menuContainer.appendChild(individualMenuItemDiv4);
  menuContainer.appendChild(individualMenuItemDiv5);

  element.append(menuContainer);
};

export default menuPage;

'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//scrolling

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1coord = section1.getBoundingClientRect();
  console.log(s1coord);
  console.log(e.target.getBoundingClientRect());
  console.log('current scrolling:', window.pageXOffset, window.pageYOffset);
  console.log(
    'width/height',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling:
  // window.scrollTo(
  //   s1coord.left + window.pageXOffset,
  //   s1coord.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coord.left + window.pageXOffset,
  //   top: s1coord.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//page navigation
//document.querySelectorAll('.nav__link') this will return a node list and now we can use it for each method
//in order to attach a event handler to each of the el's
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     //gettin href so that on which we want to scroll to
//     const id = this.getAttribute('href');
//     console.log(id);
//     //we now take this and select an el based on this, and then simply scroll to that el
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     //but this is not really efficient, so we adding here the same exact callback fn here (this is evenbt lsitener)
//     //we are adding once to each of these el's so exact same fn is now attached to these 3 el's, it would be
//     //fine for just 3 el's what if we have 1000 el's, if we attach event handler to 1000 el's, then we would
//     //effectively creating 1000 copies of the same fn, so the better sol is to use the event delegation, so
//     //EVENT DELEGATION:in this we use the fact that event bubble up, and we do that by putting event liostener
//     //on a common parent of all the el's that we are interested in, so in our ex, it's the container that
//     //around all of these links so we will put over event handler on this (nav__links) el, and then when
//     //a user clicks on one of the links the event is generated, and bubbles up and then we can basically catch
//     //that event in this common parent el and handle it there, because we also know where the evnt is
//     //actually originated
//   });
// });

//in event delagation we need 2 steps, 1st we add the event listener to a common parent el, of all the el's
//that we are interested in, and in that event listener determine what el originated the event, so we can
//then work with that el where the event is actually created
//1)add event listener to common parent el
//2)determine what el originated the event

//now we actually only wnat to work with the clicks that happened on one of the links

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  //matching strategey
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//tabbed component:
//we start by selecting the tabs

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //console.log(clicked);

  //guard class
  if (!clicked) return;
  //move active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //activate tab
  clicked.classList.add('operations__tab--active');

  //activating tab content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const handleHover = function (e) {
  const link = e.target;
  const sibilings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');

  sibilings.forEach(el => {
    if (el !== link) el.style.opacity = this;
  });
  logo.style.opacity = this;
};
//menu fade animation
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

//passing arguments into handler fn's
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

const header = document.querySelector('header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObs.observe(header);

//Reveal sections:
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

//Lazy loadin images
const imgTargets = document.querySelectorAll('img[data-src]');
//console.log(imgTargets);
const loadImg = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) return;

  //replace src attribute with data.src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

//Slider:
const sliderFn = function () {
  const slides = document.querySelectorAll('.slide');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  const dotContainer = document.querySelector('.dots');
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.3) translateX(-1200px)';
  // slider.style.overflow = 'visible';
  let currentSlide = 0;
  const maxSlide = slides.length;

  //functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "dots__dot" data-slide ="${i}"></button>`
      );
    });
  };

  const activateDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //go to slide

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDots(currentSlide);
  };
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDots(currentSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDots(0);
  };
  init();
  //event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'Arrowright') nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDots(slide);
    }
  });
};
sliderFn();
//----------SECTION 14-----------=====
//-----------------------------------------------------------------------------
//184: PROJECT:'BANKIST WEBSITE
//a link when we have a '#', when we have this # as hyperlink, then that will make the page jump to the top
//that is the default behvaiour, when we click a link that contains # as hyperlink

//instead of for loop we can do it with for each loop

//we have this btnsOpenModal, which is a nodelist, because it is the result of querySelectorAll, nodelist
//is not an array, but still it does have default for each method

//-----------------------------------------------------------------------------
//185: HOW THE DOM REALLY WORKS:
//DOM:is the interface b/w our js code and browser, or more specifically HTML documents that are rendered in
//and by the browser

//DOM allows us to make js interact with browser
//we can write js to create. modify and delete elements, set styles,classes,attributes,and listen and respond
//to events
//DOM is genereated from any html document, DOM tree is a tree like structure made out of nodes, we can then
//interact with this tree

//HOW THE INTERACTION ACTUALLY WORKS?
//DOM is a very complex API (application programmin interface), so its the interface we can use to programmatically
//interact with the DOM, DOM conatins tons of methods and properties that we use to interact with the DOM treee
//such as the querySeclector, addEventListener, or createElements methods, or alos innerHTML,textContent,
//or children properties and many more, in the DOM there are diff types of nodes, some nodes are html elements
//but others are just like text, all these DOM methods and properties are organized into these diff types of
//objects,

//HOW DOM API IS ORGANIZED BEHIND THE SCENES?
//every single node in the DOM tree is of the type node, and such as everything else in js, each node is
//represented in js by an object, this object gets access to special node methods and properties such as
//text content, child nodes, parent node,clone node and many others, this node type has a couple of
//child types to say, these are the el ype,text type, the comment type, nd also the document type, so whenever
//there is a text inside any el, it gets its own node, and thta node will be of the type text, same happens
//for html comments, everything that is in html has to go into the dom as well, for the el itself there is
//the el type of node, and this type of node gives each html el access to tons of useful properties

//ecah el is represented internall as an obj, the el type has internally an html el child type and that el
//type itself has exactly one child type fro each html el that exists in html

//INHERITANCE: all the child types will alos gets access to the methods and props of all their parent node
//types, and el weill get access to everything from the el type

//docuemnt is another type of node, it contains imp methods

//-----------------------------------------------------------------------------
//186: SELECTING,CREATING,DELETING ELEMENTS:
/*

//selecting very top of any html document is document

//SELECTING DOCUMENT:
//we have a special way of selecting the entire docuement of any web page and that is document el, jsu doc
//here is not enough to select the doc el, beacuase this is not the real dom el, if we want to apply css
//style to the entire page we always need to select docuemnt el,
//SELCTING ELEMENTS
console.log(document.documentElement);

//we can also easily select head and body
console.log(document.head);
console.log(document.body);

//for these special el's there is no need to wrire any queryselector

const header = document.querySelector('.header'); //this will return the 1st el that matched this selctor,
//if we want to select multiple el's then we shoiuld use
const allSections = document.querySelectorAll('.section');
console.log(allSections); //this will return a nodelist and that contains all of the el's

//these are not available only on the document here, but also on all the el's

document.getElementById('section--1');
//to get all the elements with same name
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
//this method actually returns htmlcollection
//HTMLcollection: is so-called live collection, means that if the dom changes then this collection is also
//immediately updated automatiocally, same does not happens with nodelist

//this is similar to getElementById and getElementsByTagName, we can now specify a classname, we dont need
//a selector, this will return htmlcollection
console.log(document.getElementsByClassName('btn'));

//CREATING AND INSERTING ELEMENTS:
//we can create html el's using insertAdjacentHTML, this is quick and easy way of creating el's
//.insertAdjacentHTML

const message = document.createElement('div');
//this here creates a dom el and then store that el into message, this el is not yet anywhere in the dom
//all this is a dom obj that we can now use to do something on it, if we want it on the page then we have
//to manually add it into the page,
//we can add classes
message.classList.add('cookie-message');
//we can add text into the el
// message.textContent = 'text cookie message';
//we can also insert html, we can use this prop to read and set content
message.innerHTML =
  'text cookie message <button class ="btn btn-cookie">got it</button';

//to insert this into our dom i.e in header, we can append this mesg to that el
//header.prepend(message);
//PREPENDING: adds the el as the 1st child of this header el, we can also add it as the last child that is append
//APPEND:to add el as the last child of the selected el
///header.append(message);
//now it is really appended as the last child, we can see that the el is only inserted at once, because this el
//message is now indeed a live el living in the dom therfore is cannot be at mulitple places at the same time

//1st we have prepended and then appended, so the appended basically move the el from being the 1st child
//to being the last child

//we can use the prepend and append method not only to insert el's but also to move them,

//what if we actullay wanted to insert multiple copies of the same el,, we actually would have to 1st copy
//the 1st el, instead of appending msg directly, we 1st clone it, so that is cloneNode, and then we need to
//pass i true which means that all the child el's will also be copied
//header.append(message.cloneNode(true));
//this is not what we want, lets only append it
header.append(message);

//there are 2 more methods before and after
//header.before(message); //this will insert before header el
//header.after(message);

//DELETING THE ELEMENTS:
//what we have to do is to delete the msg el when we click the btn
document.querySelector('.btn-cookie').addEventListener('click', function () {
  message.remove();
});

//-----------------------------------------------------------------------------
//187: STYLES,ATTRIBUTES,CLASSES:
document.querySelector('.btn-cookie').addEventListener('click', function () {
  message.remove();
});

//STYLES:
//to set a style on el
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor); //rgb(55, 56, 61)
//the style that we set manually, we cannot get the style that is hidden inside of a class, ex we want color
//which is defined in a style sheet

//we can still get the styles if we really want to, all we need to do is to use getComputedSyles,
//and from that we can take the prop
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height); //string
//COMPUTED: real style as it appears on the page and even if we do not declare in our css

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
//when we are adding number to a string it wont work

document.documentElement.style.setProperty('--color-primary', 'orangered');

//ATTRIBUTES:
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
//if we add other prop that is not standared then js will not automatically create a prop on the obj
console.log(logo.className); //nav__logo, it should be class but we have to use classNmae

//as we can read the values we can also set them
logo.alt = 'beautiful logo';

//non-standared
console.log(logo.designer); //undefined
//because this is not a standared prop that is expected to be on the images
//there is another way of reading this el from the dom
console.log(logo.getAttribute('designer')); //jonas
logo.setAttribute('company', 'bankist');

console.log(logo.src);
///Users/ravisankaruppu/madhuri/my_new_works/complete-javascript-course-master/13-Advanced-DOM-Bankist/starter/img/logo.png
////the src id diff than what we have in html
//this url is the absolute url, while what i have in html is just a relative url, so relative to the folder
//in which the index.html file is located, if we literally want the same url that is in html
file: console.log(logo.getAttribute('src')); //img/logo.png

//there is a special type of attributes,
//DATA ATTRIBUTES:
//these attributes starts with data, this attribute is at logo.dataset and then .versionNumber here we use camelcase
//just like prop names we need to transform into camelcase
console.log(logo.dataset.versionNumber); //3.0
//these special attributes always stored in dataset obj

//CLASSES:
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
*/
//-----------------------------------------------------------------------------
//188: IMPLEMENTING SMOOTH SCROLLING EFFECT
//SELECTING THE BTN AND THE SECTION THAT WE WANT TO SCROLL TO
/*

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//ADDING EVENT LISTENER TO THE BTN:
btnScrollTo.addEventListener('click', function (e) {
  //we need to get 1st the coordinates of the el that we want to scroll to
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  //DOMRect {x: 0, y: 523, width: 1440, height: 1599.1953125, top: 523, …}

  //lets get the coords for the btn we had clicked so e.target
  console.log(e.target.getBoundingClientRect());
  //DOMRect {x: 145, y: 376.0859375, width: 112.4609375, height: 28.5, top: 376.0859375, …}

  //we can also get the current scroll position, these values are at window
  console.log('current scroll:', window.pageXOffset, window.pageYOffset); //current scroll: 0 90

  //we can also read the heoght and width of the view port
  console.log(
    'width/height',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //width/height 523 1440

  //scrolling: top here is always relative to the viewport but not to the document
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//x is measured from left side, y is measured from top
//y is the distance b/w the current position of view port and the top of the page
*/
//-----------------------------------------------------------------------------
//189: TYPES OF EVENTS AND EVENT HANDLERS:
/*
//EVENT: is basically a signal that is generated by a certain dom node, and the signal means that something
//has happned for example aclick somewhere, a mouse moving, or the user trigger the full screen mode and really
//anything

//we can liosten for this events using eventListeners, so that we can then handle them, but no matter if we
//handle a certain event or not, that event always happens when a user clicks

//mouseenter is like the hover event, so it fires whenever the mouse enters a certain el, so whenever that
//happens lets create an alert
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('great you are reading the heading');
//  });

// //another way of attaching evenntListener, by using onEvent prop directly on the el
// h1.onmouseenter = function (e) {
//   alert('great you are reading the heading');
// };

//addEventListner is best to attach event handler because it allows us to add mulitple event listeners to
//the same event, we can actually remove an event handler incase we dont need it anymore, for that 1st we
//need to export that fn into a named fn
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('great you are reading the heading');
};
h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
//we can now actually prevent that from happening, after lsitennig for event and then handle that evnet in the
//fn we can then remove that event listener

//2rd way of handling events that is html attribute
*/

//-----------------------------------------------------------------------------
//190: EVENT PROPAGATION: BUBBLING AND CAPTURING:
//js events has a very imp prop, they have a so-called capturing phase and a bubbling phase

//    <html>
//   <head>
//     <title>a sample page</title>
//   </head>
//   <body>
//     <section>
//       <p>
//         a para with link <a>link</a>
//       </p>
//       <p>second para</p>
//     </section>
//     <section>
//       <img src="dom.png" alt="the dom"></img>
//     </section>
//   </body>
// </html>
// }

//document -> element(html) => element(body) => element(section) =>element(p) => element(a)
//here we can see all the parent elements of the red anchor el, this beacuse we can simulate what exactly
//happens with an event when someone clicks on that link

//lets say that a click happens on the link,the dom then generates a click event right away however this event
//is actually not generated at the target el, so at the el where the event is happened in this case the click
//on the anchor el, instead the event is generted at the root of the document, so at the very top of the dom
//tree, and from there he so-called capturing phase happens where the event then travels all the way down
//from the docyment root to the target el, and as the event travels down the tree it will pass through every
//single parent el, of the target el, until it reaches the target, as soon as the event reaches the target
//the target phase begins, where events can be handled right at the target, we do that with the event listeners
//so the event listeners wait for a certain event to happen on a certain el, and as soon as the event occurs
//it runs the attached callback fn

// document.querySelector('a').addEventListener('click', function () {
//   alert('you clicked me');
// });

//in this case it will simply create this alert window, this happens in the target phase, now after reaching
//the target the event then actually travelks all thw way up to the document root again in the so-called
//bubbling phase, so we say that the events bubbles up from the target to the document root, and just like in
//the capturing phase the event passes hrough all its parent el's, just parents not through any sibilings
//so an an event travels down and up the tree, thye pass through all the parent el's but not through any
//sibilings

//if the event also happened in each of the parent el's, so again, as the event bubbles through a parent
//el, its as if the event had happened right in that very el if we attach the same event lsitener, also
//for ex to the section el, then we get the exact same alert window for the section el as well, so we
//would havehandled the exact same event twice once at its target el, and ones at one of its parent el's
//this behaviour will allows us to implement really powerful patterns

//by default events an only be handled n the target and in the bubbling phase however we can set up event
//listeners in a way that they listen to the vents in the capturing phase instead

//also actually not all types of events do have a capturing and bubbling phase some of them created right
//on the target el,nd so we can only handle them there

//we can also say that events propagate, which is really what a capturing and bubbling phase is, its events
//propagating from one place to another

//-----------------------------------------------------------------------------
//191: EVENT PROPAGATION IN PRACTICE
/*
//we can do that by attaching event handlers to this navigation link and also to all of its parent el's
//then as we click this link we will give all these el's random bg colors,and this will then allow us to visualize
//eactly how event bubbling is happening

//creating random color random color is just a string
//rgb(255,255,255)

//random number generator
const randomInt = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

//Attaching event handlers
//in the event handler the this keywords always points to the element on which that event handler
//is attached, in this case that is  document.querySelector('.nav__link')
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);
  // link <a class="nav__link" href="#" style="background-color: rgb(204, 31, 225);">
  //   Features
  // </a>;
  //stop propagation
  //e.stopPropagation();
});

//when we do the same with parent element(nav-links) of nav__link
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('conatiner', e.target, e.currentTarget);
});
//the container also gets it own bg color, the event actually happens at the docuemnt root and from there
//it then travels down to the target el, in this case that is link, and then from there it bubbles up, and
//bubbling up means it's if event had also happened in all the parent el's, this is the reason why this
//exact event is now also being handled by this document.querySelector('.nav__links') event listener that is
///on nav__links, it is as if the click event here on this link had also happened right here document.querySelector('.nav__links')
//in this el, so both of this handlers here are noe handling the same event which happened on this link,
//when we click only on the nav links, the color on the lionk itself keeps unchanged and that beacause it
//is the parent el, and so from here the evnt only bubbles up to its parent el

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('nav', e.target, e.currentTarget);
});

//now the click event happened here was indeed handled on all the 3 places which have a click event handler

//EVENT TARGET: target is actually where the event originated, so where the event 1st happened, so this is
//not the el on which the handler is actually attached, this is where the event happened, in this case where
//the click happened, and it is not the el on which the event handler is attached

//when we click the nav-link all the 3 el's got a random bg color, and the target is always the same

//in all the 3 handlers the target will alwasy be the same, because all of them are handling the same event
//this is because of event bubbling, so the event originated here in this link, but then it bubbles up
//to its parent el.  besides the target there is actuall also the currentTarget

//CURRENT TARGET:is indeed, the el on which the event handler is attached, the current targte is actually
//same as the this keyword

//we can actually stop the event propagation all we have to do is on the event stop propagation
//e.stopPropagation

//these 3 event handlers receive events from the target el's and also from the bubbling phase, the event handler
//fn's are listening for click events that happen on the el itself and they are also listening for events
//that keep bubbling up from their child el's

//WHAT ABOUT THE CAPTURE PHASE: events are captured when they come down from the document root all thw way
//to the target, but our event handlers are not picking up these events during the capture phase, this is
//the default behaviour of the event listener, and the reason for that is that the capturing phase, is usually
//irrelvant, if we really do want to catch the events during the capturing phase, we can define a 3rd parameter
//in the event listener, we can the 3rd parameter to true or false, in this case this used capture parameter
//is set to true, the event handler will no longer listen to the bubbling events, but instead to capturing
//events, the 1st event through which the event passes is navigation, because this el is now actually listening
//for the event as it travels down from the DOM, while these other ones are listening fro the event, as it
//travels back up
*/
//-----------------------------------------------------------------------------
//192: EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION
/*
//now we are going to bulid a smooth scrolling behaviour in the navigation, so that when we click onf of these
//links here, it will then automatically scroll smoothly to the corresponding section
//page navigation
//document.querySelectorAll('.nav__link') this will return a node list and now we can use it for each method
//in order to attach a event handler to each of the el's
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    //gettin href so that on which we want to scroll to
    const id = this.getAttribute('href');
    console.log(id);
    //we now take this and select an el based on this, and then simply scroll to that el
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    //but this is not really efficient, so we adding here the same exact callback fn here (this is evenbt lsitener)
    //we are adding once to each of these el's so exact same fn is now attached to these 3 el's, it would be
    //fine for just 3 el's what if we have 1000 el's, if we attach event handler to 1000 el's, then we would
    //effectively creating 1000 copies of the same fn, so the better sol is to use the event delegation, so
    //EVENT DELEGATION:in this we use the fact that event bubble up, and we do that by putting event liostener
    //on a common parent of all the el's that we are interested in, so in our ex, it's the container that
    //around all of these links so we will put over event handler on this (nav__links) el, and then when
    //a user clicks on one of the links the event is generated, and bubbles up and then we can basically catch
    //that event in this common parent el and handle it there, because we also know where the evnt is
    //actually originated
  });
});

//in event delagation we need 2 steps, 1st we add the event listener to a common parent el, of all the el's
//that we are interested in, and in that event listener determine what el originated the event, so we can
//then work with that el where the event is actually created
//1)add event listener to common parent el
//2)determine what el originated the event

//now we actually only wnat to work with the clicks that happened on one of the links, but the click that happens
//on the nav__links the container, so now we need a matching strategey here in order to match only the el's
//that we are interested in, in this case the best way to that is to simply check if the target has this
//nav__link class

//event delegation is lot more efficient than simply attaching same event handler to mulitple el's, instaed
//we simply add one big event handler fn to the parent el, of all the el's that we are interested in, and
//then we simply determined where the click event came from, then we also need this matching strategy
//ecause we wanted to ignore clicks that did not happen right on one of these links

//there is even more important use case of event delegation which is when we are working with el's that are
//oy yet on the page on run time, so by the time the page loads the great examples are buttons that are added
//dynamically while using the application so its not possible to add event handlers on to el's that do not
//exist but we will still be able to handle events on el's that dont exist at beginning by using event delegation


document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  //matching strategey
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});*/

//-----------------------------------------------------------------------------
//193: DOM TRAVERSING:
/*
//TRAVERSING:is walking through dom, which means that we can select an el based on other el, this is imp
//bcoz sometimes we need to select el's relative to a certain other el, for example a direct child or
//a direct parent el or sometimes we dont even know the structure of the dom at the run time, and in all these
//cases, we need to dom traversing
const h1 = document.querySelector('h1');
//in h1 we have many other el's
//going downwards(selecting child el's)
//1)way of selecting is using querySelector, we can select class highlights
console.log(h1.querySelectorAll('.highlight')); //NodeList(2) [span.highlight, span.highlight]
//selects all the el's with the hightlight class that are children of h1 el, that would work no matter how
//deep these child el's would be inside of h1 el, these 2 el's direct children of h1, but as i said it would
//go down as deep as necessary

//sometimes all we need are direct children, and so for that we can use h1.childNodes
console.log(h1.childNodes);
//NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
//we get all the el's, because nodes can be anything so they can be texts, or el's or even comments, this
//gives us every single node of every single type that there exists
console.log(h1.children); //HTMLCollection(3) [span.highlight, br, span.highlight]
//this gives us html collection which is a live collection, so its updated so here indeed we get only 3 el's
//that are actually inside of the h1, this only works direct children

//there are also 1st and last el child
console.log((h1.firstElementChild.style.color = 'white'));
console.log((h1.lastElementChild.style.color = 'orangered'));

//GOING UPWARDS:(selecting parents)
//getting direct parent is simlar to childnode
console.log(h1.parentNode); //<div class="header__title"></div>
//h1 is inside of the header-title so this is the direct parent, there is also the parentElement in this
//case it is same
console.log(h1.parentElement); //<div class="header__title"></div>

//most of the time we need a parent el which is not a direct parent, or we might need to find a parent el
//no matter how far away it is in the dom, for that we have a closest method
h1.closest('.header').style.background = 'var(--gradient-secondary)';
//lets say that on a page we had multiple headers so multiple el's with a class of header, but for some reason
//we only wanted to find the one that is the parent el of h1, so for that we can use closest
//closest method receives a query string just like querySelector

//if this selector here matches the el on which we are calling we're calling closest, then that actually the
//el that gonna be returned
console.log((h1.closest('h1').style.color = 'red'));

//closest is opp of queryselector, so both receive a query string as an i/p, but queryselector finds children
//no matter how deep in the dom tree while the closest finds parents

//GOING SIDEWAYS(slecting sibilings):
//we can only access direct sibilings, so only the previous and next one
console.log(h1.previousElementSibling); //null, because there is nothing there, this is the 1st child of
//this parent el
console.log(h1.nextElementSibling); //<h4>A simpler banking experience for a simpler life.</h4>

console.log(h1.previousSibling); //text
console.log(h1.nextSibling); //text

//if we really need all the sibilings and not just the previous and next ones, then we can use the trick
//of moving up to the parent el and then read all of thechildren from them
console.log(h1.parentElement.children); //HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/

//-----------------------------------------------------------------------------
//194: BUILDING A TABBED COMPONENT:
/*
//in this we gonna build tabbed componenet, a tabbed component can appear in many diff ways, but what they
//all have in common is that they have some kind of tabs like these and when we click a tab then the content
//of the area below will change

//the whole tabbed component is called operations, then we have a tab container

//tabbed component:
//we start by selecting the tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//adding event handlers to buttons
// tabs.forEach(t => t.addEventListener('click', () => console.log('tab')));

//using event delegation, for event delegation we need to attach event handler on the common parent
//el of all the el's, n our case this is tab container
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //if we click on container then we get a null because container did have any parent el with operations tab
  //so all we need is to baiscally ignore any clicks where the result is then null

  //GUARD CLASS:it is basically an if statement which will return early if some condition is matched, in
  //this case clicked is null which is a falsy value, then falsy we become true and the fn will return
  //and none of the code that;s after it will be executed

  if (!clicked) return;
  //when we click one of them then others should put down, so before adding this class we have to remove
  //in all of the tabs
  //remove the active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //active tab
  //activating content area: the info about which content area should be displayed is in the data attribute
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
//in the button we have span el so even though we click on the button we get span el so we are not atually
//clickng on the btn but we still need the btn, we need a way of selecting the parent el, that is always a tab
*/

//-----------------------------------------------------------------------------
//195: PASSING ARGUMENTS TO EVENT HANDLERS:
/*
//creating a nice effect on page navigation where all the links fade out when hover on one of them excpet
//for the link that we actually hovered over
//menu fade animation
const handleHover = function (e) {
  //we need to match the el that we are looking for
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    //selecting the sibiling el's, we can do that bu going to the parent el and then selecting the children
    //from there, in this case the parent el of nav__link is the nav__item, so the only thing the nav__item
    //includes is always just one link, now we have to move up manually not just once but twice, so instead
    //of doing that we will again use the closest method instead of moving up manually  we can simply search
    //for a parent which matches a certain query, lets use nav even thought this is the not the closest parent
    //and from there we can search for nav__link
    const sibilings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    sibilings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

//we can actually do better by using a bind method,
//BIND: bind method creates a copy of the fn that called on
//and it will set the this keyword in this fn call to whatever value that we passed into bind, BIND
//returns a new fn, in this fn the this varibale will now set to 1 value

//passing argument into handler
nav.addEventListener('mouseover', handleHover.bind(1));
nav.addEventListener('mouseout', handleHover.bind(0));

//how do we actually use this handleHover fn, usually when we have the event handler as a separate fn all
//we do is to pass in that fn, but as the pblm is we have to pass in the values into this handleHover fn
//we need to tell this fn to use opacity of 0.5 in one case and 1 in other case, also we need a way of passing
//this event nav.addEventListener('mouseover', handleHover(e,0.5)); this wont work e is not defined
//addeventListener expects a fn here, so we need to pass a fn but if we call the fn, then all of this will
//become some other value in this case unedfined, because we dont return anything, we still have a call back
//fn here and then in here we could hen actually call this fn with the event and opacity
// //nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
//this works because we calling the fn manually, so this will be only executed as soon as js executes this
//fn value
*/

//-----------------------------------------------------------------------------
//196: IMPLEMENTING A STICK NAVIGATION: THE SCROLL EVENT
/*
//we make navigation sticky by adding sticky class whenever we reach a certain position

//stciky navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
//DOMRect {x: 0, y: 523, width: 1440, height: 1599.1953125, top: 523, …}
//we get the current top value of the section

//to implement this we use the scroll event for now, the scroll event is available in window
window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
//this event will be fired of each time that we scroll on our page, so scroll event is not really efficient
//lets start by getting our current scroll position
//console.log(window.scrollY); this scroll position is really on the window obj and not at the event

//to make the navigation sticky we will add that stciky class , but when exactly should the navigation
//actually become sticky, it should happen as soon as we reach the 1st section
*/

//-----------------------------------------------------------------------------
//197: BETTER WAY: INTERSECTION OBSERVER API:
/*
//INTERSECTION OBSERVER API: this api allows our code to basically observe changes to the way that a certain
//target el, intersects another el, or the way it intersects viewport

//to use the intersection observer api, we need to start by creating a new intersection observer and the
//we have to pass in a callback fn and then obj of options
// const observerCallback = function (entries, observer) {
//   //this callback fn will get called each time that the observed el, so our target el is interacting the
//   //root el at the threshold that we defined, this fn is called with 2 arguments entries and observer obj
//   //itself, now we can have multiple thresholds, these entries are an array of threshold entries
//   entries.forEach(entry => {
//     console.log(entry);
//     //IntersectionObserverEntry {time: 210.80000001192093, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: false, …}
//     //we already get an intersection observer entry, when we start scrolling we got a 1st real entry which
//     //appeared here because our targte el came into the vireport, so our targte el is this whole h1 that
//     //it start intersectnig the view port, and our oberver is observing that and here we see that the inter
//     //secrion ratio at the time that this callback here was called was at 0.10 and that is exactly the 10%
//     //threshold, we also get this isIntersecting prop which in this case is true because our target, so
//     //again this whole section here is now intersecting the viewport, and we are looking for the viewport
//     //beacuse we set the root to null, when we scroll down and up again we will get a new entry again it
//     //should be close to 10%, but now it happned as we are moving up again it was 10% but now, it is no
//     //longer intersecting, it is not intersecting because the threshold is at 10 and so now less than 10%
//     //basically our target el here is inside of the root so inside of viewport now still moving down we get
//     //another one and now it is back to not intersecting, because now we no longer have 10% visible
//   });
// };
// const observerOptions = {
//   root: null,
//   //now we will be able to observe our target el intersecting the viewport,
//   threshold: [0, 0.2],
// };
// //this obj needs a root property, and this root is the el that the target is intersecting, second is a threshold
// //this is basically the precentage of intersection at which the observer callback will be called

// //0 % menas that our callback will trigger each time that the target el moves completely out of the view, and
// //also as soon as it enters the view now besides there is 1 that means callback will only be called
// //when 100% target is actually visible in the viewport

// //now we can see that the intersection is exactly 0, but it is already intersecting, because the threshold herr
// //was already passed

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// //now we have to use this observer to observe a certain target, so observer and a method we call on that
// //observe and then the target el
// observer.observe(section1);

//we want naviagtion when the header is moves completely out of view

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const header = document.querySelector('.header');
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
*/

//-----------------------------------------------------------------------------
//198: REVEALING ELEMENTS ON SCROLL:
//this time we gonna reveal el's when we scroll close to them
//remove section--hidden this class as we approach ecah of these sections
//reveal sections
/*
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

//we want to oberve all the 4 sections in this case, we can do by selecting all the sections
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
*/

//-----------------------------------------------------------------------------
//199: LAZY LOADING IMAGES:
/*
//images has by far biggest imapct on page loading it is very imp that images are optimized on any page, for that
//we can use a strategy called lazy loading images, as we scroll to one of these low resolutions imgs
//we will then  replace this low res img with the one we specified in the data-serc attribute, we then also
//remove the class lazy-img which makes the img blurred

//lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
//console.log(imgTargets);
const loadImg = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) return;

  //replace src attribute with data.src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));
*/

//-----------------------------------------------------------------------------
//200: BUILDING A SLIDER COMPONENT:
/*
//on each of this slide we need to set this trabsform prop to these percentages
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let currentSlide = 0;
const maxSlide = slides.length;
//putting all slides side by side
const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-800px)';
slider.style.overflow = 'visible';

//0%,100%,200%,300%, the 1st slide should be at 0, 2nd at 100 ...
//this is bcox translateX will move them to poistion 100% so the width of each of thses images is 100%, so
//the 2nd img will start right here at the end of the 1st one, so in the beginning the i will be 0,

//to go to the next slide, going to the next slide is basically simply changing the value here in the transform
//prop so this translateX, all we do is to change the percentages, so that basically the slide that we want to
//move to is the one that has 0 %, in ghe beginning we are at slide 0, but then when we want to go to the
//next slide we need to increase that

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);
//next slide
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
*/

//-----------------------------------------------------------------------------
//201: BUILDING A SLIDER COMPONENT 2:
//attcahing event handler to a keyboard evnets so taht we can also slide through the slider uaing the left
//arrow and right, we catuakly handle the keyboard events right at the docuemnt
// document.addEventListener('keydown', function (e) {
//   console.log(e);
//   if (e.key === 'ArrowLeft') prevSlide();
//   e.key === 'ArrowRight' && nextSlide();
// });
// const dotContainer = document.querySelector('.dots');
// const createDots = function () {
//   slides.forEach(function (_, i) {
//     dotContainer.insertAdjacentHTML(
//       'beforeend',
//       `<button class = "dots__dot" data-slide ="${i}"></button>`
//     );
//   });
// };
// createDots();
// const activateDots = function (slide) {
//   document
//     .querySelectorAll('.dots__dot')
//     .forEach(dot => dot.classList.remove('dots__dot--active'));
//   document
//     .querySelector(`.dot__dot[data-slide = "${slide}"]`)
//     .classList.add('dots__dot--active');
// };

// dotContainer.addEventListener('click', function (e) {
//   if (e.target.classList.contains('dots__dot')) {
//     const { slide } = e.target.dataset;
//     goToSlide(slide);
//   }
// });

//-----------------------------------------------------------------------------
//202: LIFECYCLE DOM EVENTS
/*
//couple of diff events thta occur in our DOM during a webpage's life cycle, when we say life cycle,
//we mean right from the moment that the page is 1st accessed, until the user leaves it

//1)DOM CONTENT LOADED: this event is fired by the document as soon as the HTML is completed parsed, which
//means the HTML has been downloaded and been converted into dom tree, also all scripts must be downloaded
//and executed before the DOM content loaded event can happen
//we can listen to that event, and since it happens on the document, we call on document and then name of the
//event

//this event does not wait for the imgs and other external resources to load, so just HTML and JS need to
//be loaded
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML is parsed and DOM tree is built', e);
});
//with this here we can now execute the code that should only be executed after the DOM is available,

//we want all our code to be executed after the DOM is ready
//the script tag in out html page is at last, so basically the last thing that is going to be read in the
//HTML, and so basically the browser will only find our script when the rest of the HTML is alresdy parsed
//so when we have script tag at the end of the HTML, then we do not need to listen for the DOM content loaded
//there are also other ways of loading the js files

//2)LOAD EVENT: is fired by the window, as soon as not only the HTML is parsed, but also the imgs, external
//resources like css are also loaded, so basically when a complete page has finished loading
window.addEventListener('load', function (e) {
  console.log('page fully loaded');
});

//3)UNLOAD EVENT: this is created immediately before the user is about to leave a page ex after clicking the
//close btn in the browser tab, we can use this event to ask users if they are 100% sure thta they want to
//leave the page
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
*/

//-----------------------------------------------------------------------------
//203: EFFICIENT SCRIPT OADING: DEFER AND ASYNC
//DIFF WAYS OF LOADING A JS IN HTML

//1)till no we used a regular way of using a js file into our HTML
//<script src ="script.js>"

//2)however we can also add async attribute
//<script async src ="script.js>

//3)however we can also add defer attribute
//<script defer src ="script.js>

//these attributes gonna influence the way in which the js file is fetched, which basically means download
//and then execute

//in the html we can write script tag in the document head or usually at the end of the body
//DOCUMENT HEAD
//<script src ="script.js>"
//when we include a script without any attribute, in the head, as the user loads the page and receives HTML
//the HTML code will start to be parsed by the browser and parsing the HTML is basically building the dom tree
//from the from the HTML el's, then at a certain point, it will find a script tag, start to fetch the script
//and then execute, during all this time, the html parsing will actually stop, so it will be waiting for
//the script to get fetched and executed, only after that the rest of the HTML can be parsed, and at the end
//of that parsing, the DOM content loaded  event will finally fired, this is not ideal at all, we dont want
//the browser to be just sitting there nothing do anything, because this can have a huge impact on the
//pages performance, in this case the script will actually executed before the DOM is ready
//PARSING HTML => (FETCH SCRIPT + EXECUTE) WAITING => FINISH PARSING HTML(dom content loaded)

//END OF THE BODY:
//we usually put the script tag at the end of the body, so that all the HTML is already parsed, when it
//finally reaches the script tag, so inthis situation, this is how the page loading looks like
//PARSING HTML                  => FETCH SCRIPT + EXECUTE

//the script could have been downloaded before, while the HTML is still being parsed

//WITH ASYNC ATTRIBUTE AT HEAD:
//PARSING HTML (FETCH SCRIPT) =>EXECUTE(WAITING) => FINISH PARSING HTML
//the script is loaded at the same time as the HTML is parsed, so in asynchronous way, however the html
//parsing still stops for the script execution, so the script is downloaded asynchronously, but then its
//executed right away in a synchronous way, and so the html code has to wait fro being parsed, this makes
//page loading time shorter

//WITH DEFER ATTRIBUTE AT HEAD:
//PARSING HTML  FETCH SCRIPT        => EXECUTE
//the script is loaded asynchronously but the execution of the script is defered until the end of the html
//parsing, html parsing is never interuppted, because the script is only executed at the end

//END OF THE BODY
//PARSE HTML       => FETCH + EXECUTE
//scripts are fetched and executed after the html is completely parsed

//ASYNC IN HEAD
//PARSING + FETCH => EXECUTE (WAIT) => PARSING HTML
//scripts are fetched asynchronoulsy and executed immediately
//usually dom content loaded content wait for all scripts to execute except for async scripts, so dom content
//loaded will not wait for script
//scripts are not guarenteed to be executed in the exact order that they are declared in the code, so the
//script that arrives 1st gets executed 1st

//DEFER IN HEAD
//PARSING HTML + FETCH => EXECUTE
//scripts are fetched asynchronoulsy and executed after html is completely parsed
//dom content loaded event fires after defer script is executed
//scrits are executed in the order that they declared

//using defer in the html head is the best sol, so you should use it for your own scripts and for scripts
//where the order of execution is imp

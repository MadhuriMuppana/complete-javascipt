'use strict';
//--------------------79 PROJECT2: MODAL WINDOW-------------
//we will start by selecting everything taht we need  for this project and store it variables ao that we
//can reuse them over and over again
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//we have 3 modal elements with same class name
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
console.log(btnsOpenModal);
//we get a node list here, node list is bit like an array, its not exactly like array but here for now, it
//works as thought it was an array, so if we want to do something to all these btns then we can simply loop
//through this nodelist and do somthing with them
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//-----------------------------------------------------------------------------
//80 WORKING WITH CLASSES:
//we have to react to a click on ecah of these btns, we need to atta h event handlers to ecah of these btns
//we have classList property to remove the elements, classlist prop has many methods in that remove is one
//of them, we can also remove multiple classes

//-----------------------------------------------------------------------------
//81 HANDLING AN ESC KEYPRESS EVENT:
//inorder to listen for keyboard events, we still need to use add event listener, because keypress event is
//simply just another type of event,

//keyboard events are so-called global events, because they do not happen on one specific elements,
//for global events like keyboard events we usually listen on the whole document

//TYPES OF KEYBOARD EVENTS:
//they are 3 types of events, keydown, keypress, keyup
//KEYUP: this happens only when we lift our finger off the keyboard
//KEYPRESS: is fired continously as we keep our finger on a certain key
//KEYDOWN: is fired as soon as we just press down our key, this event happen as sson aswe hit any key on the
//keyboard, we only want to close the popup when the escape key was pressed, how will we know which key
//was actually pressed, the info about whihc key was pressed is stored in the event that is going to occur
//as soon as any key is pressed, so as i hit any key in the keyboard a keydown event is generated and our
//listener fn here is waiting for the event to happen and anytime that event like this occurs js infact
//generate an obj and that obj conatins all the information about the itself, and we can then actually access
//that obj in the vent handler fn

//when an event happened, we can have access to info about that event in the event handler fn, we never looked
//at that event we only just listened for it and then reacted to it we actually need to look at the event obj
//inorder ot figure out which key was pressed

//whatr we need to do is to give this fn a paramter(e), so then as the event occurs, js will call this fn
//with the event object as an argument

document.addEventListener('keydown', function (e) {
  //console.log('a key was pressed');
  //console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //wnat to close the modal when th e modal is actually visible, if the modal conatins the class hidden
    //it means it is not visible
    //we can check if the el already has certain class
    closeModal();
  }
});

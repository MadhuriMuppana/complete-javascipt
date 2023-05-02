'use strict';
//70 PROJECT1: GUESS MY NUMBERS

//selecting element in js:
//querySelector is method available on document object
console.log(document.querySelector('.message').textContent);

//-----------------------------------------------------------------------------
//71 WHAT IS DOM AND DOM MANIPULATION:
//we are going to make js interact with a web page very 1st time, the tecnical term of that is DOM Manipulation

//WHAT IS THE DOM:(document object model) it is basically a structured representation of HTML documents
//DOM allows us to use js to access HTML elements and styles in order to manipulate them

//we will be able to change text, to change HTML attributes and also to change CSS styles from our js,

//DOM is a connection point b/w HTML documents and js code, DOM is automatically created by the browser as
//soon as the HTML page loads, and it stored in a tree like structure, in this tree each element is one
//obj, for each element in html there is one element node in the dom tree, and we can access and interact
//with each of these nodes using js,

//DOM always starts with a document object right at the very top, and document is a very special object
//that we have access to in js, and this object serves as a entry point into the DOM, we need DOCUMENT
//to select elements

//the 1st child element of DOCUMENT is HTML element, because that is the root element in all HTLM documents
//HTML usually has 2 child elements, head and body, in HTML they are adjacent elements and so they are
//sibilings in our DOM

//DOM tree actually has more than just element nodes, it also has nodes for text itself, comments and other
//stuff, whatever is there in HTML document also has to be in DOM

//DOM is really a complete representation of the HTML docuemnt so that we can manipulate it in complex ways

//DOM !== JS
//DOM and all methods and prop taht we use to manipulate the DOM are actually part of js, this is not the case
//JS is just a dilect of the ECMAscript specification, and all this DOM related stuff is simply not in there
//untill this point we just used js lang itself, but from now we use js in browser

//if DOM is not a part of JS how does it all work? DOM and DOM methods are actually part of something called
//web API'S, web APIs are like libraries that browsers implement and that we can access from our js code
//API(APPLICATION PROGRAMMING INTERFACE)
//web APIs are libraries that are also written in js and that are automatically avialable for us to use, all
//this happened behind the scenes

//-----------------------------------------------------------------------------
//72 SELECTING AND MANIPULATING ELEMENTS:

//besides getting the content of element we can also set the content of the el

document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//input field is something where we can i/p our data, we can also get the data from there, and we can also
//set the data, for input field to get the actual value we use value property

//to set value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); //23

//-----------------------------------------------------------------------------
// 73 HANDLING CLICK EVENTS

//do something when we click on the check btn, for that we use eventListener
//EVENT: event is something that happens on the page, for ex mouse click, mouse moving, key press, or many
//other events

//EVENTLISTENER: with event listener we can wait for certain event to happen, and then react to it
//inorder to select for events we 1st need to select the el where the event should happen, in this case we
//want to listen to the event on this check button el here, this is where the click that we're interseted in
//will happen, so when we click on this btn something should happen, this will return an element and on this
//element we have to add event listener method

//in addEventlistner() we 1st have to pass in the type of the event, in this case it is simple click, but now
//we actually need to tell the eventlistener what to do, we need to specify the reaction to that click event
//we do that by defining a fn, that fn will conatin exactly the code that should be executed whenever this
//click event happens in this chek btn, and that fn is called an event handler, this addEventlistner method
//is a special kind of fn, that is beacuse the 2nd argument, it expects this event handler fn

//math is basically an obj that js gives us, and their we have lots of methods and random is one of them
//it gives us no b/w 0 and 1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.number').textContent = secretNumber;
//a fn just a value, then we can also pass a fn into anothe fn as an argument, just like any other value
document.querySelector('.check').addEventListener('click', function () {
  //we have to specify what should happen
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // usually in an app like this, which has an i/p value from the user, the 1st thing to
  //do is to check if the there actually is a value

  //0 is a falsy value so guess has falsy value
  //if there is no guess,//0 'number'
  if (!guess) {
    displayMessage('No Number');
    //document.querySelector('.message').textContent = 'No Number';
  }
  //when player wins
  else if (guess === secretNumber) {
    //if there is a guess
    //document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too low');
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game');
      //document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   //if guess > than secret no(guess too high)
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       //if guess < than secret no(guess too low)
  //       document.querySelector('.message').textContent = 'Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'start guessing';
  displayMessage('start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
//we do not call this fn anywhere, we only define the fn and then pass it into event handler, but it is the
//js engine who will call this fn as soon as the event happens

//this fn will not be called immediately once the script here is executed, this fn will only be called as
//soon as the event happens

//usually whenever we get something from the user inerface,for ex from an i/p field, it usually always is
//a string

//-----------------------------------------------------------------------------
//74 IMPLEMENTING THE GAME LOGIC
//we need to implemnt what happen swhen the guess is correct, so when it ie equal to the secret no, we also
//need to implement what happens whrn the guess is too low or when its too high, to start we actually have
//to define theat secret no, where should we define it?, we should do it outside because we only want that
//secret no to be defined once, so only when we start the application, if we define the secret no inside
//the handler fn then on each click, we would get a new secret no, and so then the game would make no sense
//at all

//we just need one no, which we can then compare to each of the guesses here on each click, we define a no
//and we need a random no b/w 1 and 20

//next stpe is score, so ecah time that we guess a wrong no our score should be decreased, so when ther is
//guess is low and guess is high we have to decrease the score by one, we can do that by reading the score
//from the dom then decrease it by 1 and then print it there again, but there is a better way, the better
//way is to create a varibale for the score in the code and then update that variabe so basically to decrease
//that variable and then display the value of that varioable in the score lable, by doing that we have
//our data also in the code and just on the DOM

//when we click over and over the same button and the score keeps ging down and eventually we reach 0, at
//this pint we should lost the game, all of the checking here
//document.querySelector('.message').textContent = 'Too High';
//score--;
///document.querySelector('.score').textContent = score;
//should only happen whenever the score is still above 0 and then when the score is actually 0, then we should
//get some kind of mesg saying that we lost the game

//-----------------------------------------------------------------------------
//75 MANIPULATING CSS STYLES
//DOM actyally also includes CSS styles, so withg DOM manipulation, we can also change styles, we can change
//bg color of entire page to green whenever the player guesses the correct no so when player wins the game
//and also make the guess no wider

//76 CODING CHALLANGE
//-----------------------------------------------------------------------------
//77 IMPLEMENTING HIGH SCORES:
//we need a variable for the high score, wher do we think to check for the high score, basically if the current
//score is greater than high score, high score was set as soon as the player won the game

//-----------------------------------------------------------------------------
//78 REFRACTORING OUR CODE: THE DRY PRINCIPLE
//REFRACTORING: means to restructure code but without changing how it works, we do it to improve the code
//and to eleiminate dupicate code

/*JavaScript in the Browser: DOM and Events
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

*/

'use strict';
//----------SECTION 10-----------=====
//-----------------------------------------------------------------------------
//128 DEFAULT PARAMETERS:
/*
//some times it is useful to have functions where some parameters are set by default. this way we do
//not have to pass them manually in case we dont want to change the default
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //we can use short circuting because we know that (numPassengers: undefined are falsy values)
  //in es6 there is a better way
  //OLD WAY OF SETTING DEFAULT PARAMTERS
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  //use this data to create obj and push into bookings array
  const booking = {
    flightNum: flightNum,
    numPassengers,
    price,
  };
  console.log(booking); //{flightNum: 'LH123', numPassengers: undefined, price: undefined}
  //after default parameters {flightNum: 'LH123', numPassengers: 1, price: 199}
  bookings.push(booking);
};
createBooking('LH123');
createBooking('H123', 2, 99); //{flightNum: 'H123', numPassengers: 2, price: 99}
createBooking('LH123', 2);
createBooking('LH123', 5);
//default values can have any type of expression
//we can also use the values of the other parameters that were set before it
//we cannot skip arguments when we call a fn

createBooking('LH123', undefined, 5); //{flightNum: 'LH123', numPassengers: 1, price: 5}
//if we want to skip the parameters, we can simply set to udefined
//setting parameter to undefined is same thing as not even setting it, when we dont set a paramter, when
//we dont pass an argument into that parameter, then it will take the value of undefined, this is how
//we will skip a default parameter that we want to leave at its default
*/

//-----------------------------------------------------------------------------
//129 HOW PASSING ARGUMENTS WORKS:VALUE VS REFERENCE
/*
const flight = 'LH234';
const jonas = {
  name: 'jonas',
  passport: 423534653456,
};
//want to create a check in function, when the passenger has already bought the flight and is then ready
//to check in to take the flight, there we need a flight num, and passenger object which contains
//data about passenger,
const checkin = function (flightNum, passenger) {
  flightNum = 'LA911';
  passenger.name = 'mr.' + passenger.name;
  if (passenger.passport === 423534653456) {
    //alert('check in');
  } else {
    //alert('wrong passport');
  }
};
checkin(flight, jonas);
console.log(flight); //LH234
console.log(jonas); //{name: 'mr.jonas', passport: 423534653456}

checkin(flight, jonas); //flight here is a primitive
//when i want to log both flight and jonas object to console after calling checkin function
console.log(flight); //LH234
//it is still LH234 evn though it seemed to be redefined, flight here is a primitive, as we passed
//that value into a function down here(checkin(flight, jonas)) then the flightnum here
//function (fNum, passenger) is basically a copy of that original value, so fNum contains a copy
//and not simply the original value of the flight variable this could be exaxtly same as writing
//fNum = flight; and this would then also simply copy this value to fNum
//and so fNum ( fNum = 'LA911'); here is a cimpletely different variable and therfore as we changed it
//here fNum = 'LA911'; it did not get reflected in the outside flight variable
console.log(jonas); //{name: 'mr.jonas', passport: 423534653456}
//we get jonas object but now name is indeed changed to mr jonas
//jonas object that we passed in checkin function in that funtion it is called passenger. and when we
//changed that passeger object  here passenger.name = 'mr.' + passenger.name; and we saw then the jonas
//object that was also effected by that change, when we pass a reference type to a function what is copied
//is really just a reference to the object in the memoery heap, so that would be exactly like doing
//this passenger = jonas

//is the same as doing..,.
const fNum = flight;
const passeger = jonas;
//when we try to copy an object like this we are really only copying the reference to that object in
//the heap memory but they both point to the same object in the memory, jonas object as we pass into a
//functoin where it is called passenger, here passenger.name = 'mr.' + passenger.name; as we are manipulaitng
//passenger object it is exatly same as manipulating jonas object because they both are same object
//in the memoery heap

//passing a primitive type to a function is really just the same as creating a copy like this
//const fNum = flight; outside of the function, so the value is simply copied on the other hand
//when we pass object to a funtion it is really just copying an object, so whjenever we change in a
//copy will also happen in orihinal

//create a new function newpasspoert it will accept any person and basically it will change that person
//passnum,  create a random num and mult with huge no this will create a num b/w 1 and huge thing\
//call that functoun with jonas object

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 2);
};
newPassport(jonas);
checkin(flight, jonas);
//2 functions manipulating the same object will create aproblem

//----there are 2 terms while dealing with functions they are apssing by value, and passing by reference
//js does not have passing by reference only passing by value even though it looks passing by refrence
*/

//-----------------------------------------------------------------------------
//130 FIRST CLASS AND HIGHER ORDER FUNCTIONS
//js has 1st class functions: this enables us to write higher order functions

//js is a language that has 1st class functions which in technical terms means that
//functions are so-called 1st citizens, in practice that means that
//functions are simply treated as values but this is such an important feature of the language
//function are just another type of objects in js and since objects are values, functions are values too

//since functions are values there is a bunch of interesting things that we can do with them like
//1.storing them in variables or object properties
//const add = (a,b) => a + b;
//const counter = {
//value: 23,
//inc: fucntion(){
//this.value++;
//}
//}
//

//2.we can also pass functions as arguments to other functions
//const greet = () => console.log('jonas');
//btnClose.addEventListener('click', greet)

//3)we can also return a function from another function

//4)function are objects and many types of objects in js have methods like array methods there are also
//function methods, so methods we can call on fn's

//--higher order functions: is either a function that recieves another function as an argument or
//a function that returns a new function

//1.function that recieve another fucntion
//const greet = () => console.log('jonas);
//btnClose.addEventListener('click', greet)
//here the addEventListener function is the higher order fucntion because it recieves another fucntion
//as an input and we usually say the function that is passed in is a callback function, that is because
//the callback function will be called later by the higher order fucntion in this the addEventListener
//will call the greet() callback later as soon as the click event happens

//2.we can also have function that return another function
//function count() {
//     let counter = 0;
//     return function(){
//         counter++;
//     };
// }
//so we have the higher order function here function count() { this whole code block which clearly returns
//a new funcion

//1st class functions is just a feature that a programming language either has or doen not has,
//all that means is that all function are values , there are no 1st class functions in practice
//there are how ever higher order functions in practice which are possible because the language suppors
//1st class functions

//-----------------------------------------------------------------------------
//131 FUNCTIONS ACCEPTING CALLBACK FUNCTIONS:
/*
//create a function that accepts other functions as an input

//replacing all spaces in the word
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
//this will simply work anywhere in our code with any string and it takes in one string and returns
//a new one without any spaces in it

//this function will transform 1st woird of input string to uppercase
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//HIGHER ORDER FUNCTIONS:
//creating a higher order function called transformer, this function will take string but as a seond
//argument it will take in function and therefore this is an higher order functon

//higher order function
const transformer = function (str, fn) {
  console.log(`original sting: ${str}`);
  console.log(`transformed string: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
  //function even have methods besides methods functions even have properties and one of them in name
};
transformer('javascript is best', upperFirstWord);
//transform the string using this function, we are only passing the function value itself, we are not
//calling this function and it will be transformer function calling this fucntion

//we are calling the transformer function here and into that function we are passing the callback fn
//and when we call these functions that we pass, we do not v]call them by ourselves but instead we call
//js to basically tell them later, it is the transformner function that will call this function
transformer('javascript is best', oneWord);

//js uses callback all the time
// const high5 = function () {
//   console.log('hi');
// };
// document.body.addEventListener('click', high5);

//just like transformer function we pass in a callback fn, this callback fn in this case is also called
//event handler or event listener(high5) is the callback function and (addEventListener) this is the
//higher order function

// ['jonas', 'alex', 'adam'].forEach(high5);
//foreach of them the callback will be called

//uses of callback functions: it makes it easy to split up or code into more reusable and interconnected
//parts there is 2nd and way more important advantage which is the fact that callback fucntions
//allow us to create abstraction,

//--an abstraction: is that we hide the details of some code implementation because we dont really care
//about all that details and this allows us to think about problems at a higher most abstract level

//the transformer function does not care at all how the string is transformed, it does'nt care about
//this level of detail, all that wants to do is to transform the string but it does/nt care how it should
//do it, we could have taken the code in  oneWord and upperFirstWord and write it directly into
//transformer taht would have worked just the same but instead we abstracted this code away into
//other functions, so again we created a new level of abstraction and by doing this or main transformer
//function here is really only concerned with transforming the input string itself but no matter how
//that transforming actually works, so its basically deligating the string transformation to other lowe
//level of functions
*/

//-----------------------------------------------------------------------------
//132 FUNCTIONS RETURNING FUNCTIONS:
/*
//create a function that returns a new function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}: ${name}`);
  };
};
const greeterhey = greet('hey'); //the result of this function call will be the inner funtion
//store result of the function, this value here(greeterhey) is now a function
greeterhey('jonas');
greeterhey('alex');
greet('hellow')('jonas');

//rewrite functon using arrow function
const greets = greeting => name => console.log(`${greeting}: ${name}`);
greets('hello')('jonas'); //hello jonas
*/

//-----------------------------------------------------------------------------
//133 THE CALL AND APPLY METHODS:

//HOW TO SET THIS KEYWORD MANUALLY
const united = {
  airline: 'united',
  code: 'LH',
  bookings: [],
  book(flighNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight and ${this.code}${flighNum}`
    );
    this.bookings.push({ flight: `${this.code} ${flighNum}`, name });
  },
};
united.book(239, 'jonas'); //jonas booked a seat on united flight and LH239
united.book(420, 'alex'); //alex booked a seat on united flight and LH420
console.log(united); //{airline: 'united', code: 'LH', bookings: Array(2), book: ƒ}

const spirit = {
  airline: 'spirit',
  code: 'SP',
  bookings: [],
};

const book = united.book;
//book(23, 'john'); //error because book here is not a regular function call, in regular function call
//the this keyword point to undefined. book is now a regular function call so this keyword now point to
//udefined

//how do we tell js that you want to create a booking on the new spirit airlines or even how do we tell
//js that we want to book on united, well basically we need to tell js explicitly what the this keyword
//here sohuld be like, so if you want to book at united the this keyword should point to united but
//if we want to book a spirit then the this keywird should point to spirit,
//there are 3 function methods to do that they are call, apply, bind

//instead of doing this book(23, 'john'); does not work we use book.call
//a function is really an object and object have methods and therfore function can have methods too
//and in call method the first argument is exactly waht we want the this keyword to point to and then
//rest of the arguments

book.call(spirit, 23, 'sarah');
console.log(spirit);
//{airline: 'spirit', code: 'SP', bookings: Array(1)}

book.call(united, 45, 'max');
console.log(united);
//{airline: 'united', code: 'LH', bookings: Array(3), book: ƒ}

const swiss = {
  airline: 'swisss',
  code: 'al',
  bookings: [],
};
book.call(swiss, 2, 'denver');

//there is similar method to the call method called apply
//apply method: apply method does basically exactly the same thing the only difference is that apply
//does not recieve a list of arguments after the this keywiord but instead, its gonna take an array
//of the arguments it will then take the elements from that array and pass it into the function
const flightData = [583, 'george cooper'];
book.apply(swiss, flightData);
console.log(swiss);
//1st argument will be the this keyword
book.call(swiss, ...flightData);

//-----------------------------------------------------------------------------
//134 THE BIND METHOD:
//like call method bind also alows us to set this keyword for any function call, the difference is that
//the bind does not immeditely call the function instead it returns a new function where the this keyword
//is bound, so it set to what ever value we pass into bind

//lets use airline example and now we need to use book function for spirit all the time
//we use spirit object and then we use book.call to use the book function with spirit set to this keyword
//book.call(spirit, 23, 'sarah');

//we can use bind method to create a new function with the this keyword set to spirit
//book.bind(spirit); //this will not call the book function instead it will return a new function
//where this key word always set to spirit
//let create a new fucntion call
const bookSp = book.bind(spirit);
const bookSw = book.bind(swiss);
//lets use this function
bookSp(23, 'jondsff');
//this looks like a normal book function call that is because this fucntion here already has the this
//keyword set in stone, so here we no longer to specify this keyword again

//in the call method we can pass multiple arguments beside this keyword, and so in bind method
//we can actually do the same and then all of these arguments will also be set in stone, so they will
//defined and then the function will be then always be called with same arguments
//we use a bind to create a function for one specific airline and a specific flight number really
//specific only for flight 23
const bookSw24 = book.bind(swiss, 23);
//book function now needs the flightnum and name but now in bookSw24 it is as if this first argument
//was already set, and so all remaining function now only need the name
bookSw24('madhuri muppana');
bookSw24('ravi sankar');
//specifying parts of the arguments beforehand, is actually a common pattern called partial application
//so essentially partial application means that a part of the arguments of the original function
//are already applied, so which means already set
//uses of bind method: when we use objects together with event listener
//bind with event listeners: lets add a new property to only united object and set it to 300 means this
//company has 300 planes
united.planes = 300;
//and then also method to buy a new plane
united.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
  //esentially we want to add a new plane when ever we click on this buy new plane button
};
united.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', united.buyPlane.bind(united)); //nan
//this.planes is not a number the reason for that is this keyword here is button element
//in any event handler functions the this keyword always point to the element on which the handler is
//attached //united.buyPlane is the handler function so it ios attached to this
//but we need pass a function and not to call it, the call method calls the fucntion so we use bind
//bind will return a new fucntion. this keyword should point to united object so use bind method

//partial application: we can preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220
//general function for adding tax
//lets say there is one tax that we use all the time
const addVat = addTax.bind(null, 0.23);
console.log(addVat(100)); //123

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));

//-----------------------------------------------------------------------------
//135 CODING CHALLANGE:

//-----------------------------------------------------------------------------
//136 IMMEDIATELY INVOKED FUNCTION EXPRESSION:
//sometimes in js we need a fn that is only executed once, and then never again, so basically a fn that
//disappears right after it's called once, and this might not appear to make much sense right now, but we
//actually need this technique later, for ex with async/wait, so how could we do that

//we could simply create a fn and then only execute it once
const runOnce = function () {
  console.log('this will never run again');
};
runOnce();
//however we can actually run this fn again, at some other point in the code, if we want it to right, this
//is not what we want to do, we want to execute a fn immediately, and not even having to save it somewhere
//and so this is how we do that, so we simply right the fn expression itself, so without assigning to any
//variable, now if we try to run this we will get error for now, so it says fn staements require a fn name

//IMMEDIATELY INVOKED FN EPRESSION
(function () {
  console.log('this will never run again');
})();
//however we can still trick js into thinking that this is just an expression, we do that by simply wrapping
//all of this into (), and so now we basically transformed the statement that we had before into an expression
//but also this fn did'nt execute yet, we never called it, so we know that this is here is a fn, and so we
//can then immediately call it, and so with this, we will get the text bock, this here is just the fn value
//so it's just a fn expression, and then immediately we call it, and so this is why this pattern here, is called
//the immediately invoked fn expression

//the same would also work for arrow functions
(() => console.log('this will also never run again'))();
//this wont work, so we 1st wrap this into ()

//2 ways of writing IIFE

//WHY WAS THIS PATTERN ACTUALLY INVENTED:we know that fn creates scopes, one scope does not have access to
//variables from an inner scope, therfore we say that all data defined inside a scope is private, we also
//say that this data is encapsulated, so many times we actually need to protect our variables, from being
//accidentally overwritten by some other parts of the prog or even with external scripts or libraries, it
//is imp to hide variables and that scopes are good tool for doing this, and this is also the reason why
//the IIFE were invented, this is not really the feature of js, it's more of a pattern, that some develoeprs
//came up with

//variables declare with let and const also create their own scope inside a block, so when we create a block
//like this and declare isPrivate in there, then the outside can still not access isPrivate, how ever
//variable with var is still accessable
{
  const isPrivate = 23;
  var notPrivate = 46;
}
//console.log(isPrivate); //error
console.log(notPrivate);
//------------A CLOSER LOOK AT FUNCTIONS:

//Coding Challenge #1
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
const poll = {
question: "What is your favourite programming language?",
options: ["0: JavaScript", "1: Python", "2: Rust", "3:
C++"],
// This generates [0, 0, 0, 0]. More in the next section!
answers: new Array(4).fill(0),
};


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    //get answer
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          '\n'
        )} \n (Write option number)`
      )
    );
    console.log(answer);
    //update answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    //console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      //Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
*/

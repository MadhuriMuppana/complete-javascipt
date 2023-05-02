"use strict";
//activating strict mode
//----------SECTION 3-----------
/*
//-----------------------------------------------------------------------
//32 ATIVATING STRICT MODE: we should activate a special mode in js, called strict mode which makes it easy for us
to write a secure js code, and we have to do to activate strict mode is to write this string at the begining
//of the script 'use strict';

//this statement has to be the 1st very statement in the script, so if we have any code before this then strcit
mode will not be activated, comments are aloowed because js will just ignore them but no code
//we can also activate a strict mode only for a specific fn or a specific block

//the strict mode makes it easier for developers to avoid accidenetal errors, so basically it helps us 
introduce bugs into our code, that is becaouse of 2 diff scenarios

//1)strict mode forbids us to do certain things and second, it will actually create visible errors to us
in certain situations in which without strict mode js will simply fails silently without letting us to know
that we did a mistake

//2)strict mode will introduce a short list of variable names that are reserved for features that might be
added to the lang a bit later

const interface = "audio";
//expected strict mode reserved word 

// Remember, we're gonna use strict mode in all scripts now!

let hasDriversLicense = false;
const passTest = true;

//if (passTest) hasDriverLicense = true;
//we will get error when using a strict mode as we assigned a variable that is not yet declared,
//without strict mode
if (hasDriversLicense) console.log("i can drive");

//strict mode will introduce a short list of variable names that are reserved for features that might be
//added to the lang a bit later

//const interface = "audio";
//const private = 534;
//const if = 23;

//expected strict mode reserved word error, because js is reserving this word here for a feature that it might
//implement in the future, and so by reserving these kind of words it will then make it easier to implement
//the feature in the future
*/

//-----------------------------------------------------------------------
// 33 FUNCTIONS:
/*
//fn is simply a piece of code that we can reuse over and over again in our code, it is little
//bot like a varibale but for whole chunks of code

//a varioable holds a value but fn can hold one or more complete lines of code
function logger() {
  //fn body: will execute this code when we run this fn
  console.log("my name is jonas");
}
//calling,running,invoking
logger(); //my name is jonas
logger(); //my name is jonas
logger(); //my name is jonas
//we can use fn as many times as we want, to use fn write fn name followed by (), this process of using
//this fn is called invoking a fn, running the fn, or calling the fn

//when we run fn's we also pass data into a fn and additionally, a fn can also return data as well which
//means to give us data back that we can use for something else in the prog

//a fn not only reuse a data but it can also recieve data and return data back,

//we can specify parameters: parameters are like variables that are specific only to this fn and they will
//get defined once we call a fn

//apples and oranges will get defined once the fn is called and they represnt the i/p data of this fn

//RETURN: withthis we can return any value from the fn, so this returned value can be used anywhere in the
//code
function fruitProccessor(apples, oranges) {
  //console.log(apples, oranges); //5,0
  //we can produce juice out of these fruits
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

//this juice will become the result of executing this fn
//fruitProccessor(5, 0); //these actual values are the i/p's of the fruit processor fn, these actual values
//of the parameters are called arguments

//the juice was returned from this fn, so basically that means the result of running this fn is the juice
//that we just returned, basically once this fn has been executed, this coed fruitProccessor(5, 0);
//is then replaced by the result of the fn and in this case that is juice string that we produced, so if
//we want to use that value that was returned we need to store it in the variable
const appleJuice = fruitProccessor(5, 0);
console.log(appleJuice); //juice with 5 apples and 0 oranges

const appleOrangeJuice = fruitProccessor(2, 4);

//Funtions allows us to write more maintainable code becoz with fn's we can create reusable chucks of code
//instaed of having to manually write the same code over and over again

//console.log is also a fn but a built in fn

*/

//-----------------------------------------------------------------------
// 34 FUNCTION DECLARATIONS VS FN EXPRESSIONS:
/*
//Function declarion: we simply use the fn keyword to declare a fn a bit like a variable

//fn to calc age based on the given birthyaer
//fn declarion
function calAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calAge1(1991);
console.log(age1); //46

//Function expression(fn without a name is called anonymous fn), expression produces a value we stored it in
//calcAge2
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

//fn's in js are just values like numbers, string, boolean, fn is not a type but it's also a value

//DIFFERENCE B/W FN DECLARATION AND FN EXPRESSION:
//we can actually call fn declarations before they are defined in the code
//when we call fn expression before they are declared we will get an error cannot access before intialization
*/

//-----------------------------------------------------------------------
//35 ARROW FUNCTIONS:
/*
//is simply a special form of fn expression that is shorter and therfore faster

//Arrow fn: excellent for simple one liner fn's(this is the simplest form as we have exactly one paramter)
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); //46
//this is stll a fn expression, it is a value that we assigned to varibale, it is easy to write because we
//dont need {} and the return actually happens implicitly, so the value (2037 -birtYear) will automatically
//returned wihout us having to explicitly  write the return keyword

//it will get littlt bit complex if we want to add more paramters or more code

//fn to write how many years left until retirement, we need return if we had more lines of code, if we have
//more multiple paramters we have to wrap into ()
const yearsUntiRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntiRetirement(1991, "jonas")); //jonas retires in 19 years
console.log(yearsUntiRetirement(1980, "bob")); //bob retires in 8 years
*/

//-----------------------------------------------------------------------
//36 FUNCTIONS CALLING OTHER FUNCTIONS
/*

//Lets do that the fruitprocessor will make juice only with smaller fruit pieces, so before making the juice
//the fruit processor now needs another machine that 1st cuts the fruits that we give it into multiple smaller
//pieces

//fn thta cuts fruits into multiple pieces
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProccessor(apples, oranges) {
  //we called one function inside another fn
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
console.log(fruitProccessor(2, 3)); //juice with 8 apples and 12 oranges
//when we call the fruitprocessor with (2,3) it will call fruitprocessor fn which then in turn will call
//cutfruitpieces fn
*/

//-----------------------------------------------------------------------
//37 REVIEWING FUNCTIONS:
/*
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

//convert the above into fn expression
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
    //these are ignored
  } else {
    console.log(`${firstName} retires in ${retirement} years`);
    return -1;
  }

  //return retirement;
  //return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "jonas")); //19
console.log(yearsUntilRetirement(1950, "jonas")); //-1,-2 which means he has already retired
//return number if above 0 , and if it below 0 we are gonna return something else like -1

//we have 2 diff fn's with the same parameter names, they are completely 2 diff paramters, 2 diff varibales
//we could even have a varibale outside of any if the fn's which could also be called bithyear, here the
//paramter innthe fn is a like a local variable

//RETURN FN: will actually immediately exit the fn, so it will 1st return the value that we tell it return
//in this case retirement value and then after fn is done, it exits immediately, we also say that the fn
//is returned

//FUNCTION DECLARATION: they can be used before they are declared in the code
//FUNCTION EXPRESSION: they are essemtially fn values that are stored in a variable
//ARROW FNNCTIONS:they are infact fn expression's but special ones, these are great for on liner fn's
// where we dont need to explicitly use the return keywored, this one has no this keyword

// these are 3 diff ways of writing a fn's but they all work in a similar way
*/
//38 CODING CHALLNEGE

//-----------------------------------------------------------------------
//39 INTRODUCTION TO ARRAYS:
/*
//1st data structire arrays:
const friend1 = "micheal";
const friend2 = "bob";
const friend3 = "john";
//imagine if we actually wanted to represent 10 friends, then we would have to create 10 variables, instead
//we can bundle all of these values together into some bigger container, that's why we have a data structures
//in js, and array are such a data structures
//ARRAY: is a big container into which we can throw variables and then later reference them
//programmin is all about data, we get data some where, we store and process data and then we give some data
//back, and thta data, it has to go somewhere, so it has to be stored in some place for that we use data
//structures, just like arrays

//2 most imp data structures in js are arrays and objects
const friends = ["micheal", "john", "steven"];
console.log(friends); //(3) ['micheal', 'john', 'steven']
//another way of creating arrays
//const years = new Array(1991, 1994, 2000, 2020);
//array can hold as many values as we want and also values of any type

//we need to have a way to get them out
console.log(friends[0]); //micheal

//to get actual n.o of elements in an array, we can use this to get automatically get the last element in
//the array
console.log(friends[friends.length - 1]); //steven
console.log(friends.length); //3 it is not 0 based

//we can change or mutate the array
friends[2] = "jay";
console.log(friends); //(3) ['micheal', 'john', 'jay']

//var declared with const cannot be changed, we did infact declared the friends with const, but we can still
//able to change the array, only primritive values are immutable, but an array is not a primitive value
//so we can actually change it so we can mutate it, because js stores it in the memory

//we cannot replace the entire array

//array can hold values of diff types at the same time
const firstName = "jonas";
const jonas = [firstName, "ben", 2037 - 1991, friends];
console.log(jonas); //(4) ['jonas', 'ben', 46, Array(3)]0: "jonas"1: "ben"2: 463: (3) ['micheal', 'john', 'jay']length: 4[[Prototype]]: Array(0)
console.log(jonas.length); //4

//cal the age using the years and array and store the resukt in new array
const calAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1991, 2020, 1994, 1990];
const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [
  calAge(years[0]),
  calAge(years[1]),
  calAge(years[years.length - 1]),
];
console.log(ages); //3) [46, 17, 47]
*/

//-----------------------------------------------------------------------
//40 BASIC ARRAY OPERATIONS:
/*
//js has some built in fn's that we can basically apply directly on arrays, these are called methods, we
//can think of methods as array operations
const friends = ["john", "alex", "steven"];

///ADD ELEMENTS
//PUSH: adds elements to the end of the array(push method return length of the array)
const newLength = friends.push("jay");
console.log(friends); //(4) ['john', 'alex', 'steven', 'jay']
console.log(newLength); //length of the new array

//UNSHIFT: add elememts at the beginning of the array
friends.unshift("ben");
console.log(friends);
(5)[("ben", "john", "alex", "steven", "jay")];

//REMOVE ELEMENTS:
//POP:removes last element of the array (pop method return the removed elements)
const popped = friends.pop();
console.log(popped); //jay
console.log(friends); //(4) ['ben', 'john', 'alex', 'steven']

//SHIFT: removes 1st element of the array
friends.shift();
console.log(friends); //(3) ['john', 'alex', 'steven']

//INDEXOF: to know which position a certain elements is in the array
console.log(friends.indexOf("alex")); //1
//if we try for element that is not there
console.log(friends.indexOf("madhu")); //-1

//INCLUDES: instead of returning the index of the element it will simply return true if the element is in the
//array and false if it's not
console.log(friends.includes("alex")); //true
console.log(friends.includes("madhu")); //false

//we use includes method to write conditions
if (friends.includes("alex")) {
  console.log("you have a friend called alex"); //you have a friend called alex
}
*/

//41 CODING CHALLANGE
//-----------------------------------------------------------------------
//42 INTODUCTION TO OBJECTS:
/*
//ARRAYS: are used to store multiple related values in the same varibale
const jonasArray = [
  "jonas",
  "schem",
  2037 - 1991,
  "teacher",
  ["jonas", "steven", "jay"],
];

//we cant reference them by name, but only by their order number in which they appear in the array

//OBJECTS: we use objects to essentially group together diff variables that really belong together, such as
//the propperties of jonas
//we actually define key value pairs, so then we can gibve each of the values a name, key is
//basically a variable name and then value, value can be any type
//object leiteral syntax
const jonas = {
  firstName: "jonas",
  lastName: "schem",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["jay", "jonas", "peter"],
};

//this obj contains 5 key value pairs, each key has a value, we were able to assign a name to each of these
//values, each of these key is also called a property

//DIFFERENCE B/W OBJECTS AND ARRAYS:
//in objects the order of these values does not matter at all when we want to retrieve them,
//we use obj's for more unstructured data
//in arrays the order in which we specify the elements matters a lot bcoz, that's how we retrieve the el's
//we can only access array el's by their order numbers
//we use arrays for more ordered data
*/

//-----------------------------------------------------------------------
//43 DOT VS BRACKET NOTATION:
/*
const jonas = {
  firstName: "jonas",
  lastName: "schem",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["jay", "jonas", "peter"],
};

//one way of getting properties frmo the object:
console.log(jonas.lastName); //schem
console.log(jonas["lastName"]); // we can put any expresssion in braket notation

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
//console.log(jonas.'last' + nameKey)

//when we need to 1st compute the prop name then we have to use bracket notation

//if we dont know to which prop to show as it is coming from the user interface
// const intersetedIn = prompt(
//   "what do you want to know abpout jonas? choose b/w firstName, age, job,friends"
// );
// console.log(jonas.intersetedIn); //undefined

//undefined is what we get if we try to access the prop that does not exist, jonas does not have prop called
//interestedIn
//console.log(jonas[intersetedIn]); //teacher

// if (jonas[intersetedIn]) {
//   console.log(jonas[intersetedIn]);
// } else {
//   console.log("wrong request choose b/w firstName, age, job,friends");
// }

//ADDING PROPERTIES TO OBJECT:
jonas.location = "portugal";
jonas["loaction"] = "india";
console.log(jonas);

//jonas has 3 friends and his best friend is called peter
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[2]}`
);
//jonas has 3 friends and his best friend is called peter
*/

//-----------------------------------------------------------------------
//44 OBJECT METHODS:
/*
//OBJECTS: can hold diff types of data, they can hold even arrays, and in fact they can even hold objects
//inside obj's, fn are really just another type of value, and if fn is just a value then that means we can
//create a key value pair in whihc the value is a fn, we can infact add fn's to objects
const jonas = {
  firstName: "jonas",
  lastName: "schem",
  birthYear: 1991,
  job: "teacher",
  friends: ["jay", "jonas", "peter"],
  hasDriversLicense: true,
  //   calcAge: function (birthyear) {
  //     return 2037 - birthyear;
  //   },

  //   calcAge: function () {
  //     console.log(this);
  //     //jonas obj is calling this method, whatever appears before the . is calling the method, in the method
  //     //this points to jonas
  //     return 2037 - this.birthyear;
  //   },

  calcAge: function () {
    //we can use this keyword to store the new prop
    //we cal the age and we created a new prop on the jonas obj
    //we are creating jonas prop and setting it to this age
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};
console.log(jonas.getSummary()); //jonas is a 46-year old teacher, and he has a drivers license

//THIS KEYWORD: is basically equal to object on which the method is called, or it is equal to the obj calling
//the method

//any fn thta is attached to object is called a method, we cannot use fn declartion we can only use fn exp
//as we can think fn's as simple values then you can see method is actually a prop, it a prop thta holds a
//fn value

//we can also access calcAge prop
console.log(jonas.calcAge(1991)); //46
//console.log(jonas["calcAge"](1991)); //46

//if we need to access the age multiple times throughout the code, that would be like calling
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//this will work what happen is that the fn will get called a total of 4 times and this computation will be
//done 4 times, it would be a bad practice to do it multiple times, instead what we can do is to just cal
//age once then store it in the obj and then when we need it at later point, we can just retrieve the age
//as a prop from the obj

//we use methods on arrays
//we have an array and on there we call a method, arrays are actually objects, they are just a special
//kind of objects, and so they have fn's, or in other words they have methods that we can use to mainpulate
//them like push,pop..
//in arrays we creadted our own methods on our own objects, but here we basically used built-in methods
//on arrays, arrays are also called objects that is why they can have methods as well
*/

//45 CODING CHALLANGE

//-----------------------------------------------------------------------
//46 ITERATION:
/*
//THE FOR LOOP: one of the other controlled structure are loop
//LOOPS: are fundamental aspect of every programming lang, because they basically allows us to automate
//repetitive tasks, so the tasks that we have to perform over and over again

//if we have 10 repetitions:, then we have to preform this 10 times, if we want to change some word in the
//string then we have to change it everywhere
console.log("lifting weight repetition1");
console.log("lifting weight repetition1");
console.log("lifting weight repetition1");

//instead of doing this we can create a loop and put one of these lines of code in there, and the loop
//will then run that code over and over agian, until we tell it to stop

//loop has 3 parts: initial value of counter, logical condition that is evaluated before each iteration
//of the loop, before each time the code in the loop is executed, if the condition is true then the next
//loop iteration will run else it will stop, the loop will keep running if thhis condition is true, in each
//iteration of loop the rep counter will get increased and so at a certain point it reaches 10, and with 10
//the condition is still true, after that it will be 11, and loop will stop, we have to update the counter
//after each iteration

//for loop keeps running while consition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weight repetition ${rep}`);
}
*/

//-----------------------------------------------------------------------
//47 LOOPING ARRAYS, BREAKING CONTINUING:
/*
//USES OF FOR LOOP
//one of the most used application of for loops is to loop through arrays

const jonasArray = [
  "jonas",
  "schem",
  2037 - 1991,
  "teacher",
  ["jonas", "steven", "jay"],
];
const types = [];
//to individually log every element of the array to the console , all we have to do is log all 5 values
for (let i = 0; i < jonasArray.length; i++) {
  //reading jonasArray
  console.log(jonasArray[i], typeof jonasArray[i]);

  //filling types array //creating a new array which will contain all the type
  //types[i] = typeof jonasArray[i];//(5) ['string', 'string', 'number', 'string', 'object']
  types.push(typeof jonasArray[i]); //(5) ['string', 'string', 'number', 'string', 'object']
}
console.log(types);

//array of birthyears
const years = [1991, 2007, 1969, 2020];
//cal ages for these 4 years, and we want to store themn in a new array
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages); //(4) [46, 30, 68, 17]

//2 STATEMENTS FOR LOOPS: CONTINUE AND BREAK
//CONTINUE: is to exit the current iteration of the loop and continue to the next one
//BREAK: is used to completely terminate the whole loop

//we only wanted to print elements to the array that are strings

console.log("-----only strings----");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
//jonas string , script.js:521 schem string, script.js:521 teacher string

//to log no other elements after we found a number
console.log("-----break with number----");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
//jonas string, script.js:533 schem string
*/

//-----------------------------------------------------------------------
//48 LOOPING BACKWARDS AND LOOPS IN LOOPS
/*
const jonasArray = [
  "jonas",
  "schem",
  2037 - 1991,
  "teacher",
  ["jonas", "steven", "jay"],
];

//LOOPING OVER THE ARRAY BACKWARDS:
//0,1,2...4
//4,3,2...0
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

//LOOP INSIDE OF THE LOOP:
//we have 3 diff exercises and we want to repeat each of them 5 times
for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`-------starting excercise ${excercise}`);
  //we have to create loop inside a loop, so thta in each execise we can have the 5 repetitions that we want
  for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise ${excercise} lifting weights repetition ${rep}`);
  }
}
*/

//-----------------------------------------------------------------------
// 49 WHILE LOOP:
/*
//it will run while the condition is true, we do need a loop without counter, you can reach
//for the while loop, if we dont know how many iterations the loop will have we can use whole loop
//WHILE USE CASE:
//implementing with while loop:
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weight repetition ${rep}`);
// }

//for the while loop we can only specify a condition, we want to keep loop running while rep <= 10
//we have to explicitily define other 2 componentes, we have to do that outside

let rep = 1; //initialization
while (rep <= 10) {
  //condition
  //console.log(`lifting weight repetition ${rep}`); //the code we want to execute
  //at the end of oteration we will then increase the counter
  rep++;
}

//keep rolling a dice, roll dice until we roll a six, here we dont need any counter, in this case we dont
//know how many times the loop should run, so we dont need a counter var, but depends on a random var
//Math.random() creates a number b/w 0 and 1
let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

//keep running a loop until we roll a 6
while (dice !== 6) {
  //we are only creating one dice value, we are only creating 1 random n.o b/w 1 and 6, but now the loop
  //will run for ever, so we have to create new dice values
  console.log(`you a rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("loop is about to end");
  }
  //now we get a situation where the 1st ever dice was a 6, and so the loop never starts
}
//so when dice is right away 6 in the beginnong, then ofcourse this loop will have exactly 0 iterations, it will never
//start, the conclusion is that the while loop does not really have to depend on any counter var, so whenever
//we do need a loop without counter, you can reach for the while loop

//WHILE loop does not really need a counter, so you put a counter here because we need it, but all the while
//loop really needs is the condition which needs to stay true for it to keep running
*/

//50 CODING CHALLANGE

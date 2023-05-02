"use strict";
//activating strict mode
//----------SECTION 3-----------
/*
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

//activating strict mode
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
//33 FUNCTIONS:
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
//34 FUNCTION DECLARATIONS VS FN EXPRESSIONS:
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
where we dont need to explicitly use the return keywored, this one has no this keyword

these are 3 diff ways of writing a fn's but they all work in a similar way
*/

//38 CODING CHALLANGE:
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

//41 CODING CHALLANGE 2

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

//45 CODING CHLLANGE 3

//-----------------------------------------------------------------------
//46 ITERATION: THE FOR LOOP:
/*
//one of the other controlled structure are loop
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
//48 LOOPING BACKWARDSAND LOOPS IN LOOPS
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
//49 WHILE LOOP:
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

//50 CODING CHALLANGE
*/

/*
---------------------------------------------------------------------------
//SECTION3

LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
  const string = `${country} has ${population} million people and its
capital city is ${capitalCity}`;
  return string;
}
const country1 = describeCountry("Finland", 6, "Helsinki");
console.log(country1);

LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)

function percentageOfWorld1(country, population) {
  const popPerc = (population / 7900) * 100;
  return `${country} has ${population} million people, so it's about ${popPerc}% of
  the world population`;
}
const perc1 = percentageOfWorld1("china", 1441);
console.log(perc1);

const percentageOfWorld2 = function (country, population) {
  const popPerc = (population / 7900) * 100;
  return `${country} has ${population} million people, so it's about ${popPerc}% of
  the world population`;
};
const perc2 = percentageOfWorld2("china", 1441);
console.log(perc2);

LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const perc3 = percentageOfWorld3(10);

LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice

const percentageOfWorld1 = (pop) => (pop / 7900) * 100;

function describePopulation(country, population) {
  const percent = percentageOfWorld1(population);
  return `${country} has ${population} million people,
which is about ${percent}% of the world.`;
}
const descPop = describePopulation("china", 1441);
console.log(descPop);

LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
const worldPopulation = (population) => (population / 7900) * 100;
const populations = [1200, 500, 200];
console.log(populations.length === 4);
const percentages = [
  worldPopulation[populations[0]],
  worldPopulation[populations[1]],
  worldPopulation[populations[2]],
];

LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.


const neighbours = ["india", "japan", "Sweden"];
neighbours.push("Utopia"); //(4) ['india', 'japan', 'usa', 'Utopia']
neighbours.pop(); //(3) ['india', 'japan', 'usa']
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D"); //Probably not a central European country :D
}
neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
console.log(neighbours); //(3) ['india', 'japan', 'Republic of Sweden']


LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)

const myCountry = {
  country: "india",
  capital: "delhi",
  language: "hindi",
  population: 1200,
  neighbours: ["john", "ben", "alex"],
};

LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.

const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["john", "ben", "alex"],
};
console.log(`${myCountry.country} has ${myCountry["population"]} million 
${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}`);
myCountry.population += 2;
console.log(myCountry.population); //8
myCountry["population"] -= 2;
console.log(myCountry["population"]); //6


LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.

const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["john", "ben", "alex"],
  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, 
    ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.'`);
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

for (let i = 1; i <= 50; i++) {
  console.log(`'Voter number ${i} is currently voting`);
}

LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);//(4) [0.12658227848101267, 18.240506329113924, 4.2025316455696204, 1.0506329113924051]


LECTURE: Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway 😉


const listOfNeighbours = [
  [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

Neighbour: Canada,Mexico
script.js:787 Neighbour: Spain
script.js:787 Neighbour: Norway,Sweden,Russia


LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [10, 1441, 332, 83];
const percentages3 = [];

let i = 0;

while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
*/

/*
//------------JavaScript Fundamentals – Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
const scoreDolphins = calcAverage(44 + 23 + 71);
const scoreKoalas = calcAverage(65 + 54 + 49);
const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("no team wins");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new

const calcTip = (bill) => (bill <= 300 && bill > 50 ? bill * 0.15 : bill * 0.2);
const value = calcTip(100);
console.log(value); //15
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
//(3) [125, 555, 44] (3) [18.75, 111, 8.8] (3) [143.75, 666, 52.8]


Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}

Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  //console.log(sum);
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 5]));
console.log(calcAverage(totals));

*/

//----------SECTION 1-----------
//

//-------------------------------------------------------------------------
//1. HELLO WORLD:
//alert is a js fn
//alert("hello world");
//js will gives us a popup window which has hello world
// let js = "amazing";
// if ((js = "amazing")) alert("javascript is fun");
// js = "boring";
// if ((js = "amazing")) alert("javascript is fun");

//---------------------------------------------------------------------------
// 2.A BRIEF INTRODUCTION TO JAVASCRIPT
// Javascript: It is high level object-oriented, multi-paradigm programming language

// PROGRAMMING LANGUAGE: is basically just a tool that allows us to write code that will instruct a computer to
// do something

// HIGH-LEVEL: we dont have to think about a lot of complex stuff such as managing the computers memory while It
// runs or program, in js there are a lot of so-called abstractions over all these small details that we dont
// want to worry about, this makes the lang a lot easier to learn and write

// OBJECT-ORIENTED: it is mostly based on concepts of objects for storing most kinds of data.

// MULTI-PARADIGM: it is so flexible and versatile, that we can use all kinds of different programming styles
// such as imperative and declarative programming, And these diff styles are just diff ways of structuring
// our code, basically

// //ROLE OF JS IN WEB DEVELOPMENT:(what do we use it for):

// the 3 core technologies of web, (html,css,js) these 3 work together to create beautiful, interactive and
// dynamic websites or web applications
// HTML: responsible for content of the page, so the text,images,buttons and all content that we see on webpage
// is always written in html

// CSS: responsible for presentation of that content for styling,laying out the elements on webpage

// JS: is the real programming language of the internet, it allows developers to add dynamic on interactive
// effects to any webpage, we also used to manipulate the content or the CSS,load data from remote servers and
// really build entire applications in the browser, which we then call web applications

// js allows us to add dynamic effects to pages, and in fact to build entire web app in browser, and these
// applications feel almost like all apps that we use on our computers and phones every single day, so we
// can say that js is what made modern web developement, and really the whole  modern web itself possible in
// the 1st place

// //there are modern js libraries and frameworks such as React, Angular or Vue, these are basically tools
// that make writing modern, large scale web apps, a lot easier and faster

// //js lang and the web browser are actually 2 separate things, js can also run outside of the browser, for
// example it is possible to use js on web server using very popular tech called Node.js, which doesnt need
// any browser at all, this allows us to create so-called back-end apps, which are simply apps that runs on
// a web server and interact with databases and stuff, when we use js in the browser, we create so-called
// front end applications

// //JAVASCRIPT RELEASES:
// es5 => es6/es2015 => es7/2016 => es8/2017 => es9/2018 => es10/2019 => es11/2020 =>
// there is a huge update in 2015 which is officially called es2015, but most people called it as es6, simply
// because it was released after es5, es stands for ecma script, after 2015 there is now a yearly new release
// with a couple of js features, in all of these releases or versions starting from es2015 is what we call
// modern js

// --------------------------------------------------------------------------
// //LINKING A JS FILE
// we always need a html doc because our js needs to be attached to an html, in html there is a script tag
// //where we can write js in the head benath the style, we use script tag at the end of the body
//  <script src="allcode.js"></script>

//---------------------------------------------------------------------------
//VALUES AND VARIABLES
/*

//VALUE: is a piece of data, it is the most fundamental unit of information that we have in programming
//for example this text 'jonas is a value, if we actually see this in the console
console.log("jonas"), //we can have diff values
  console.log(23);
//it is the smallest unit of information that we have in js
//USES OF VALUE: we can store them into variables, this way we can reuse them over and over again
// declaring a variable, this will actually create a real variable in our computers memoery and will store
// this value inside of this variable
//console.log(firstName);
//naming convention for variables(can only conayin numbers,letters,underscores or dollar sign)
//camelcase
//let firstName = "jonas";
//DONTS
// let 3years = 3;
// let jonas&Matilda = 'jm';
// let Person = 'jonas'; //it is a convention, we use these for specific use case in js which is oops
//using reserved keyword
// let new = 27;//new is a reserved keyword
// let function = 27;
let name = "jonas";
//variables that are reseverd for all are uppercase
let PI = 3.14;
// We know that this numb never gonna change, so that is the constant and we have a convention
// make sure variable name sare decriptive
*/

// -------------------------------------------------------------------------
// //DATA TYPE
/*
// In every lang values can have diff types, depending on the type of data that we want to hold, we already saw
// strings and numbers, but there are actually more data types

//Types of data type: in js every value is either an obj which looks something like this
// let me = {
//     name: 'jonas';
// }
// //or a primitive value like this
// let firstName = 'jonas';
// let age = 30;
// so a value is only a primitive type when it's not an obj

//7 Primitive data type:
// 1)NUMBER: are always so-caleed floating point numbers, which means they always have decimals even if we dont
// see them or dont define them
// let age = 23; this is exactly like having 23.0, but they are both simply number data type, in many other
// programming languages, you will find diff data types for integers and for decimals but not in js, all numbers
// are simply of the type number
// 2)STRING: a sequence of charecters, and so they are just used for texts and always put them in quotes
// let firstName = 'jonas';
// 3)BOOLEAN: is essentially a logical type that can only take one of the logical values true or false, in
// other words a boolean is always either trur or false, we use booleans values to take decisions with code
// let fullAge = 'true';
// these are the 3 most important data types
// 4)UNDEFINED: is the value taken by a variable that is not yet defined, and the variable that is not yet
// defined is simply just a varible that we declared but without assigning any value
// let children;
// undefined means empty value
// 5)NULL:which is pretty similar because it alos means empty value, but it's used in different circumstances
// 6)BIG INT: starting from es2020 we also have BigInt which is for integers that are too large to be represented
// by the number type, it is another type for numbers
// 7)SYMBOL: was introduced in es2015, it simply defines a value that is unique and cannot be changed

// //DYNAMIC TYPING:when you create a new variable, you do not have to manually define the data type of the
// value that it contains, in many other programming languages, you actually have to do that but not in js
// instead js will automatically determines the data type of a value when it's stored into the variable, this
// ditinction b/w value and varibale is pretty important, in js the value it's has the type, not the variable
// //VARIABLE: variable simply stores values that have a type

// //FEATURE OF DYNAMIC TYPING:later in our code, we can assign a new value with a different data type to the
// same variable, variable var x initially be a number and then later a string

// //CODE COMMENTING: in programming, we use comments to literally comment a code or to deactivate code without
// deleteing

true;
console.log(true); //true
///we can aslo store booleans in variable
let javascriptIsFun = true;
console.log(javascriptIsFun); //true
//the value that holds thetype not the variable
//TYPE OF OPERTAOR(typeof): is just like the plus opertaor thatb we can use to show the type of a value
console.log(typeof true); //boolean
//the result of using this opertor on a value will be new value which is a string with the type of this value
console.log(typeof true); //boolean
console.log(typeof javascriptIsFun); //boolean
console.log(typeof 23); //number
console.log(typeof "jonas"); //string

//DYNAMIC TYPING IN PRACTICE: we can easily change the type of a value that is hold by a variable
javascriptIsFun = "yes!";
console.log(typeof javascriptIsFun); //string

//undefined: is a value taken by a variable that is not yet defined, it means an empty value
let year;
console.log(year); //undefined
console.log(typeof year); //undefined
//whenever we declare an empty variable, the value of the variable will be undefined, and type of the
//variable is also undefined, undefined is the both the value and type of the value, we can also reassign
//this variable
year = 1991;
console.log(typeof year); //number
console.log(typeof null); //object
//type of null is an obj, this is regarded as a bug or an error in js
*/

// --------------------------------------------------------------------------
// //LET CONST AND VAR:
/*
// (3 different ways of declaring variables)

// let and const are introduced in es6 and so they are modern js, while var keyword is the old way od declaring
// variables
// LET: (block scope)
// we use the let keyword to declare the variables that can change later, so basically during the execution
// of our program
let age = 30;
age = 31;
//we call this reassigning a value to the variable, or alos we can say that we mutate the age variable
//when we need to mutate a variable, that is the perfect use case for using let, and that also counts for
//the case that we want to declare empty variables

//CONST: we use const to declare variables that are not supposed to change at any point in the future, so the
//value in a const variable cannot be changed
const birthYear = 1991;
//birthYear = 1990; //typeError: Assignment to constant variable.
//it creates a variable that we cannot reassign or am immutable variable, we cannot declare empty const variables
//const job;//missing initializer in const declaration

//without declaring variables
//lastName = "jonas";
//console.log(lastName);
//this does not create a variable in a so-called scope, instead js will create a property on the global obj
*/

//---------------------------------------------------------------------------
//BASIC OPERATORS:
/*
//OPERATORS:an operator basically allows us to transform values or combine multiple values and really do
//all kind of work with values, there are many categories of operators mathematical,comparision,logical,
//assignment and more
//MATHEMATICAL OPERATORS OR ARTHIMETIC OPERTAORS:
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah); //46, 19
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); //92 4.6 8
//2 ** 3 means 2 to the power 3 = 2 * 2 * 2 = 8

//we can use + operator to join strings, to concatenate different kinds of strings
const firstName = "jonas";
const lastName = "schem";
console.log(firstName + " " + lastName); //jonasschem

//ASSIGNMENT OPERATORS(=, +=)
let x = 10 + 5;
x += 10; // x = x + 10 = 25;
x *= 4; // x = x * 4 = 100
x++; //x + 1;//101
x--; //x - 1; 100
console.log(x); // 100;

//COMPARISION OPERATORS(>, <, >=, <=)
console.log(ageJonas > ageSarah); //true
//testing if sarah is of full age that means shge should be atleast 18 years old, she is greater than 18
//or exactly 18
console.log(ageSarah >= 18); //true
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2019); //true
//COMPARISION OPERATORS: we use these to produce boolean values
*/

// ---------------------------------------------------------------------------
// //STRINGS AND TEMPLATE LITERALS
/*
const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas =
  "i'am " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);
//we have a template literal: with template literal we can write a string in a more normal way, then basically
//insert the variables directly into the string and they will be simple replaced, a template literal
//can assemble multiple pieces into one final string
const jonasNew = `I,am ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(`just a regular string`);
//before es6
console.log(
  "string with \n\
multiple \n\
lines"
);
//we can create multiline strings
console.log(`string with
multiple strings`);
*/

//---------------------------------------------------------------------------
//TAKING DECISIONS: IF/ELSE STATEMENTS
/*
//program which checks whether a person is allowed to start taking a driving license or not, and if she is
//then print that to the console, and if not it will print how many years are left until the person can
//start taking the driving license
const age = 15;
if (age >= 18) {
  console.log(`sarah can start driving license`);
} else {
  const yearLeft = 18 - age;
  console.log(`sarah is too young wait another ${yearLeft} years`);
  //sarah is too young wait another 3 years
}

//we can execute certain parts of our program based on certain conditions, this if else statement is called
//a controlled structure, because this structure allows us to have more control over the way that our code
//is executed, in this if else statement the whole code is not executed in a linear way, so js does not execute
// all of the code here linearly, instead we can now control blocks of code thta should execute and block that
// should not execute, that gives us a lot more control over how our code work
*/

//---------------------------------------------------------------------------
//TYPE CONVERSION AND COERSION:there is type conversion and type coersion
/*
//TYPE CONVERSION: when we manually convert from one type to another, when we explicitly want to convert
// from one type, lets say we have an input field on a web page for the user to input their birthYear, and these
// inputs from input fields usually comes as a string
//TYPE COERSION:is when js automatically converts types behind the scenes, it is hidden from us
//TYPE CONVERSION:we manually convert from one type to another
//Converting strings to numbers
const inputYear = "1991"; //string
//we can convert string to a number by using a number function
console.log(Number(inputYear)); //is a number, but the original value is not converted, so inoutYear is still
//a string
console.log(Number(inputYear + 18)); //2009 is a string
//if we want to do some calculations with this, this wont really work
//when we have a string and add something to the string, it will basically concatenate the strings, we need
//a way of fixing this, which means we need a way of converting this string to a number
console.log(Number("jonas")); //NaN is a invalid number
console.log(typeof NaN); //NUMBER

//converting numbers to strings
console.log(String(23), 23); //23 23

//js can only convert to 3 types, we can convert to a number, to a string or to a boolean, we cannot convert
//to undefined or null

//TYPE COERSION: this happens whenever an operator is dealing with 2 values that have different types,in
//that js behind the scenes will convert one of the values to match the other, so that in the end the opertaion
//can be execute
console.log("iam " + 23 + " years old"); //iam 23 years old is a sting
//in js the + operator triggers a coersion to strings, so whenever thers is an operation b/w string and
//a number, the number will be converted into a string
//not all the operators do type coersion to the strings
console.log("23" + "10" + 3); //23103
console.log("23" - "10" - 3); //10, this time js converted string to numbers
//- operator actually triggers the opposite conversion, in this case strings are converted into numbers
console.log("23" * "2"); //46 converted to numbers, both of them now are numbers, because that is the only
//way thta multiplier can work
console.log("23" / "2");

let n = "1" + 1; //11 string
n = n - 1; //10 number
console.log(n);
*/

//--------------------------------------------------------------
//TURTHY AND FALSY VALUES
/*
//FALSY VALUES:these are not the values that are exactly false, but will become false when we try to convert
//them into a boolean, there are 5 falsy values
//5 FALSY VALUES: UNDEFINED,NULL,0, '',NaN
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("jonas")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false
//conversion to boolean is always implicit, is always type coercion thta js does automatically behind the scenes

//WHEN DOES JS DO TYPE COERCION TO BOOLEANS?
//when using logical operators, and in a logical context like in the condition if else statment

const money = 0;
if (money) {
  console.log("dont spend it all");
} else {
  console.log("you should get a job");
}
//you should get a job, in if else statment condition, here js will try to coerce any value to boolean,as
//money is 0(falsy value), we converted falsy value to boolean so false, as the result else block is executed

//to check if the varibale is defined or not
let height;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined"); //height is undefined
}
*/

//---------------------------------------------------------------------------
//EQUALITY OPERATORS: (==, ===)
/*
const age = 18;
//creating an if statemnt which will log that the person just became an adult, only if the age is exactly 18
//if the if block has only one line there is not need of {}
if (age === 18) console.log("you just became an adult"); //you just became an adult
//just like comparision operators, this operator will return a true or false value, so a boolean value
console.log(18 === "18"); //false
//=== is a strict equality operator, it does not perform type coercion it only return true when both values
//are exactly same

//== is a loose equality operator, it does type coercion
console.log(18 == "18"); //true

//getting a value from the web page, we can do that by using prompt
const fav = Number(prompt("whatt's your fav number")); // we get a prmpt window
console.log(fav); //value is a string
console.log(typeof fav); //string
if (fav === 23) {
  //'23' == 23
  console.log("23 is a cool num");
} else if (fav === 7) {
  console.log("7 is a cool number");
} else {
  console.log("num is not a 7 or 23");
}
//we can also add else if block

//DIFFERENT OPERATOR:(!== strict version)
if (fav !== 23) console.log("why not 23");
*/

//---------------------------------------------------------------------------
//BOOLEAN LOGIC: is a branch of computer science, which uses true and false values to solve complex logical
//pblms, inorder ot do that it uses several logical operators to combine true and false
//LOGICAL OPERATORS: AND, OR, NOT
//AND: only if both the values are true the result will be true
//OR:even if one of the value is false the result can still be true, if any one value is true the result is true
//NOT:if a is true it will return false, and if a is false it returns true

//---------------------------------------------------------------------------
//STATEMENTS AND EXPRESSIONS:
/*
//EXPRESSION: is a piece of code that produces a value
//3 + 4 is an expression as it produces a value
//1994 is also an expression
//true && false && !false

//STATEMENT: is a bigger piece of code that is executed and which does not produce a value itself
//a declaration is like complete sentence, and expressions are like the words that make up sentences, we
//write our whole prog as a sequence of actions, these actions are statements
if (23 > 10) {
  const str = `23 is bigger`;
}
//this if else is infact a statments, same is true for switch statements
//this statement here doesnt produce a value, in this case it simply declares is var called str, it performs
//some actions, in this case declaring variable, but it doesnt produce a value, string itself is an expression
//and this whole line of code is a statement, whenever something ends with a ; that's then a statement

//in template lieral we can only insert expressions but not statements
console.log(`i'am ${2037 - 1991} years old`); //i'am 46 years old
*/

//---------------------------------------------------------------------------
//THE CONDITIONAL(TERNARY OPERATOR):
/*
//This operator allows us to write something similar to if/else statement, but all in one line
//it has 3 parts condition, if part and else, an operator is an experssion as it produces a value
const age = 23;
age >= 18
  ? console.log("i like to drink wine")
  : console.log("i like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

//as ternery operation produces a value we can use it in template literal
console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
*/

//---------------------------------------------------------------------------
//JAVASCRIPT RELEASES: ES5, ES6+,AND ESNEXT
//HISTORY OF JS:after internet is invented and the 1st web browsers were developed, developers wanted to
//start making websites more interactive, they needed a programming lang fo the browser

//in 1995, the netscape navigator, which by the time was the dominant browser hired a guy amed Brandon
//Eich to create a very 1st version of js in just 10 days, it was called mocha but it already had many
//of the fundamental features that modern js has today

//in 1996, mocha was renamed to livescipt which was then again, renamed to js for one simple reason to attract
//develoeprs from the hottest lang at that time which was java, so the java in js was really just for
//marketing reasons because the lang itself has basically nothing to do with java, also in 1996 microsoft
//launched the internet explorer, which basically copied js from netscape, but they call the jscript for
//legal reason because you cannot just go around and copy other people programming lang, now what that means
//is that we had 2 very similar but competing languages, which ofcourse is never a good idea, and so with
//internet growing like crazy people realized they needed to standardize js so the lang was submitted
//to an independent standared organization called ECMA which in 1991 released ECMAscript 1 or es1, this
//was the very 1st official standareds fro the js lang, with this every browser could now implement the
//same standard 'js', in the real world we usually use the term ECMAScript to refer to the standard, while
//js is used when we talk about the lang in practice as it is implemented in the browser

//in 2009, after a lot of complications and disagreements about the where the lang should be headed, es5 was
//released with a lot of great new features, and then finally, another 6 years later, the much awaited
//new version es6 was launched in june 2015, and this was the single biggest update to the lang ever, so it
//contained a ton of new features, es6 is being called es2015, which is actually the official name, but most
//people call es6

//in 2015 ECMAScript changed to an annual relase cycle, so right now ther's gonna be a new release every single
//year, the reason for that is that they prefer to just add a small number of new features per year, instaed
//of shipping a huge new version every couple of years, like it happened in es6, so according to the new
//realse cycle 2016 es2016 or es7 was released, es2017 and 2017 and it will continue until the end of time

//there is one particularity about js releases, which is pretty unique for any proraming lang and that is
//backward compatibility all the way to es1, it means that if you were to take some js code written back
//in 1997 and put it in modern browser with a modern js engine today, it would still work just the same
//so again, the js engine that's in our broeser today is able to unserstand old code written 25 yr ago
//without having to rely on version numbers, it works this way because of the fundamental principle that's
//baked into the js lang and its development, which is to not break the web, this means that there is
//almost never anything removed from the lang but only added in new versions, we cannot really call them
//new versions even, because they do not contain breaking changes like when other lang moved to new version
//instead new versions are always just incremental updates which adds new stuff, so we call releases not
//versions

//forward compatability: if we took totally mdaeup code from 2038 and try to run in todays browser, it
//would not work

//HOW CAN WE USE MODERN JS TODAY: inorder to use modern js today we have to use 2 scenarios, development
//and production
//so the dev phase is simply when you're building the site or app on your computer, to ensure you can use
//latest js features in this face all we have to do is to use the most upadte version fo the browser
//production:which is when your web app is finished, you deply to internet and it's then running in your
//browsers, this is the part which we cant control, we cant control which browser the user uses, we also cant
//assume that all the users always use latest browser, the solution for this is to basically convert
//these modern js versions back to es5 using a process transpiling and also polyfiling

//we use a tool called babel to transpile our code

/*
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console
let country = "Portugal";
let continent = "Europe";
let population = 10;
console.log(country, continent, population); //portugal Europe 10


LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console

let isIsland = false;
let population = 10;
let country = "Portugal";
let language;
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
); //boolean,number,string,undefined


LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens

let language;
language = "portuguese";
const country = "Portugal";
const continent = "Europe";
const isIsland = false;
isIsland = true;

LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'


let language;
language = "portuguese";
let country = "Portugal";
let continent = "Europe";
let population = 11;

console.log(population / 2);
population++;
if (population > 6);
if (population < 33);
console.log(
  country +
    " is in " +
    continent +
    "and its " +
    population +
    " million people speak " +
    language
);

LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original

let population = 22;
let country = "Portugal";

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)

const language = "english";
const population = 100;
const country = "usa";
let isIsland = true;
if (language === "english" && population < 50 && !isIsland) {
  console.log(`'You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'

const language = "english";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original

const country = Portugal;
const population = 100;
console.log(`'Portugal's population is ${population > 33 ? "above" : "below"}`);

*/

//
//
//
/*
//CODING CHALENGES

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data: Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);


Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI})is higher than John's! ${johnBMI}`);
} else {
  console.log(`John's BMI (${johnBMI})is higher than Mark's! ${markBMI}`);
}



Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsAvg = (96 + 112 + 101) / 3;
const koalasAvg = (88 + 91 + 110) / 3;
const minScore = 100;
if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("Dolphins team is the winner");
} else if (koalasAvg > dolphinsAvg && dolphinsAvg >= 100) {
  console.log("Koalas team is winner");
} else if (
  koalasAvg === dolphinsAvg &&
  koalasAvg >= 100 &&
  dolphinsAvg >= 100
) {
  console.log("draw");
} else {
  console.log("no team wins");
}

Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
const bill = 275;
const tip = bill <= 300 && bill > 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);

*/

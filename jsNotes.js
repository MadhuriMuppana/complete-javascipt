/*
//
//----------SECTION 1-----------
//

//-------------------------------------------------------------------------
7. HELLO WORLD:
alert is a js fn
alert("hello world");
//js will gives us a popup window which has hello world
let js = "amazing";
if(js = "amazing") alert('javascript is fun');
js = 'boring';
if(js = "amazing") alert('javascript is fun');


//---------------------------------------------------------------------------
8.A BRIEF INTRODUCTION TO JAVASCRIPT
Javascript: It is high level object-oriented, multi-paradigm programming language

PROGRAMMING LANGUAGE: is basically just a tool that allows us to write code that will instruct a computer to 
do something 

HIGH-LEVEL: we dont have to think about a lot of complex stuff such as managing the computers memory while It
runs or program, in js there are a lot of so-called abstractions over all these small details that we dont
want to worry about, this makes the lang a lot easier to learn and write

OBJECT-ORIENTED: it is mostly based on concepts of objects for storing most kinds of data.

MULTI-PARADIGM: it is so flexible and versatile, that we can use all kinds of different programming styles
such as imperative and declarative programming, And these diff styles are just diff ways of structuring
our code, basically

//ROLE OF JS IN WEB DEVELOPMENT:(what do we use it for):

the 3 core technologies of web, (html,css,js) these 3 work together to create beautiful, interactive and
dynamic websites or web applications
HTML: responsible for content of the page, so the text,images,buttons and all content that we see on webpage
is always written in html

CSS: responsible for presentation of that content for styling,laying out the elements on webpage

JS: is the real programming language of the internet, it allows developers to add dynamic on interactive
effects to any webpage, we also used to manipulate the content or the CSS,load data from remote servers and
really build entire applications in the browser, which we then call web applications


js allows us to add dynamic effects to pages, and in fact to build entire web app in browser, and these
applications feel almost like all apps that we use on our computers and phones every single day, so we
can say that js is what made modern web developement, and really the whole  modern web itself possible in
the 1st place

//there are modern js libraries and frameworks such as React, Angular or Vue, these are basically tools
that make writing modern, large scale web apps, a lot easier and faster

//js lang and the web browser are actually 2 separate things, js can also run outside of the browser, for
example it is possible to use js on web server using very popular tech called Node.js, which doesnt need
any browser at all, this allows us to create so-called back-end apps, which are simply apps that runs on
a web server and interact with databases and stuff, when we use js in the browser, we create so-called 
front end applications

//JAVASCRIPT RELEASES:
es5 => es6/es2015 => es7/2016 => es8/2017 => es9/2018 => es10/2019 => es11/2020 =>
there is a huge update in 2015 which is officially called es2015, but most people called it as es6, simply
because it was released after es5, es stands for ecma script, after 2015 there is now a yearly new release
with a couple of js features, in all of these releases or versions starting from es2015 is what we call
modern js


--------------------------------------------------------------------------
//9 LINKING A JS FILE
we always need a html doc because our js needs to be attached to an html, in html there is a script tag
//where we can write js in the head benath the style, we use script tag at the end of the body 
 <script src="allcode.js"></script>



 ---------------------------------------------------------------------------
 //10 VALUES AND VARIABLES

 //VALUE: is a piece of data, it is the most fundamental unit of information that we have in programming
 for example this text 'jonas is a value, if we actually see this in the console
 console.log('jonas'), we can have diff values
  console.log(23)
it is the smallest unit of information that we have in js

//USES OF VALUE: we can store them into variables, this way we can reuse them over and over again
declaring a variable, this will actually create a real variable in our computers memoery and will store
this value inside of this variable
console.log(firstName);
//naming convention for variables(can only conayin numbers,letters,underscores or dollar sign)
camelcase
let firstName = 'jonas';

//DONTS 
let 3years = 3;
let jonas&Matilda = 'jm';
let Person = 'jonas'; //it is a convention, we use these for specific use case in js which is oops
//using reserved keyword
let new = 27;//new is a reserved keyword
let function = 27;
let name = 'jonas';
//variables that are reseverd for all are uppercase
let PI = 3.14;
We know that this numb never gonna change, so that is the constant and we have a convention
make sure variable name sare decriptive


//11 PRACTICE ASSIGNMENTS
-------------------------------------------------------------------------
// 12 DATA TYPES
In every lang values can have diff types, depending on the type of data that we want to hold, we already saw
strings and numbers, but there are actually more data types

//Types of data type: in js every value is either an obj which looks something like this
let me = {
    name: 'jonas';
}
or a primitive value like this 
let firstName = 'jonas';
let age = 30;
so a value is only a primitive type when it's not an obj

//7 Primitive data type:
1)NUMBER: are always so-caleed floating point numbers, which means they always have decimals even if we dont
see them or dont define them 
let age = 23; this is exactly like having 23.0, but they are both simply number data type, in many other 
programming languages, you will find diff data types for integers and for decimals but not in js, all numbers
are simply of the type number
2)STRING: a sequence of charecters, and so they are just used for texts and always put them in quotes
let firstName = 'jonas';
3)BOOLEAN: is essentially a logical type that can only take one of the logical values true or false, in
other words a boolean is always either trur or false, we use booleans values to take decisions with code
let fullAge = 'true';

these are the 3 most important data types
4)UNDEFINED: is the value taken by a variable that is not yet defined, and the variable that is not yet
defined is simply just a varible that we declared but without assigning any value
let children;
undefined means empty value
5)NULL:which is pretty similar because it alos means empty value, but it's used in different circumstances
6)BIG INT: starting from es2020 we also have BigInt which is for integers that are too large to be represented
by the number type, it is another type for numbers
7)SYMBOL: was introduced in es2015, it simply defines a value that is unique and cannot be changed

//DYNAMIC TYPING:when you create a new variable, you do not have to manually define the data type of the 
value that it contains, in many other programming languages, you actually have to do that but not in js
instead js will automatically determines the data type of a value when it's stored into the variable, this
ditinction b/w value and varibale is pretty important, in js the value it's has the type, not the variable
//VARIABLE: variable simply stores values that have a type

//FEATURE OF DYNAMIC TYPING:later in our code, we can assign a new value with a different data type to the
same variable, variable var x initially be a number and then later a string

//CODE COMMENTING: in programming, we use comments to literally comment a code or to deactivate code without
deleteing

true;
console.log(true);//true
we can aslo store booleans in variable
let javascriptIsFun = true;
console.log(javascriptIsFun); //true
the value that holds thetype not the variable

//TYPE OF OPERTAOR(typeof): is just like the plus opertaor thatb we can use to show the type of a value
console.log(typeof true);//boolean
the result of using this opertor on a value will be new value which is a string with the type of this value
console.log(typeof true); //boolean
console.log(typeof javascriptIsFun);//boolean
console.log(typeof 23);//number
console.log(typeof "jonas");//string

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


--------------------------------------------------------------------------
// 13 LET CONST AND VAR: 
(3 different ways of declaring variables)

let and const are introduced in es6 and so they are modern js, while var keyword is the old way od declaring
variables
LET: (block scope)
we use the let keyword to declare the variables that can change later, so basically during the execution
of our program
let age = 30;
age = 31;
we call this reassigning a value to the variable, or alos we can say that we mutate the age variable
//when we need to mutate a variable, that is the perfect use case for using let, and that also counts for
the case that we want to declare empty variables

//CONST: we use const to declare variables that are not supposed to change at any point in the future, so the
value in a const variable cannot be changed
const birthYear = 1991;
birthYear = 1990;//typeError: Assignment to constant variable.
it creates a variable that we cannot reassign or am immutable variable, we cannot declare empty const variables
const job;//missing initializer in const declaration 

//VAR:(function scope)
old way of declaring varibles, it works same as let
var job = 'programmer';
we can change the value of the variable later
job = 'teacher';

//without declaring variables
lastName = "jonas";
console.log(lastName);
this does not create a variable in a so-called scope, instead js will create a property on the global obj



 ---------------------------------------------------------------------------
 // 14 BASIC OPERATORS: 

 //OPERATORS:an operator basically allows us to transform values or combine multiple values and really do
 all kind of work with values, there are many categories of operators mathematical,comparision,logical,
 assignment and more
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
x++; //x + 1;
x--; //x - 1; 99
console.log(x); // 15;

//COMPARISION OPERATORS(>, <, >=, <=)
console.log(ageJonas > ageSarah); //true
//testing if sarah is of full age that means shge should be atleast 18 years old, she is greater than 18
//or exactly 18
console.log(ageSarah >= 18); //true
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2019); //true
//COMPARISION OPERATORS: we use these to produce boolean values


//15 OPERATOR PRECEDENCE
//16 CODING CHALLENGE 1
---------------------------------------------------------------------------
//17 STRINGS AND TEMPLATE LITERALS
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


---------------------------------------------------------------------------
//18 TAKING DECISIONS: IF/ELSE STATEMENTS
//program which checks whether a person is allowed to start taking a driving license or not, and if she is
//then print that to the console, and if not it will print how many years are left until the person can
//start taking the driving license
const age = 15;
if (age >= 18) {
  console.log(`sarah can start driving license`);
} else {
  const yearLeft = 18 - age;
  console.log(`sarah is too young wait another ${yearLeft} years`);
}

//we can execute certain parts of our program based on certain conditions, this if else statement is called
//a controlled structure, because this structure allows us to have more control over the way that our code
//is executed, in this if else statement the whole code is not executed in a linear way, so js does not execute
all of the code here linearly, instead we can now control blocks of code thta should execute and block that
should not execute, that gives us a lot more control over how our code work


//19 CODING CHALLANEGE 2

---------------------------------------------------------------------------
//20 TYPE CONVERSION AND COERSION:there is type conversion and type coersion
//TYPE CONVERSION: when we manually convert from one type to another, when we explicitly want to convert
from one type, lets say we have an input field on a web page for the user to input their birthYear, and these
inputs from input fields usually comes as a string
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

--------------------------------------------------------------
//21 TURTHY AND FALSY VALUES
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



//---------------------------------------------------------------------------
// 22 EQUALITY OPERATORS: (==, ===)
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

//---------------------------------------------------------------------------
//23 BOOLEAN LOGIC: is a branch of computer science, which uses true and false values to solve complex logical
//pblms, inorder ot do that it uses several logical operators to combine true and false
//LOGICAL OPERATORS: AND, OR, NOT
//AND: only if both the values are true the result will be true
//OR:even if one of the value is false the result can still be true, if any one value is true the result is true
//NOT:if a is true it will return false, and if a is false it returns true

//24 LOGICAL OPERATORS
//25 CODING CHALLENGE 3

//---------------------------------------------------------------------------
//26 SWITCH STATEMENT:

//alternativw way of writing if/else statements when all we want to do is to compare one value to mulitple
//different options, lets say we have a week day variable and for each day there is diff ativity so we gonna
//map one activity to each day
const day = "monday";
//map one activity to each day
switch (day) {
  case "monday": //comopare day with strict equality day === 'monday'
    console.log("plane course structure");
    console.log("go to coding meet up");
    break;
  case "tuesday":
    console.log("prepare theaory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("not a valid day");
  //default if all the other cases failed
}
//without the break the code simply continues and it stops when there is a break



//---------------------------------------------------------------------------
//27 STATEMENTS AND EXPRESSIONS:
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
console.log(`i'am ${2037 - 1991} years old`);


//---------------------------------------------------------------------------
//28 THE CONDITIONAL(TERNARY OPERATOR):
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


//29 CODING CHALLENGE

//---------------------------------------------------------------------------
//30 JAVASCRIPT RELEASES: ES5, ES6+,AND ESNEXT
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







//----------SECTION 3-----------
//32 ATIVATING STRICT MODE: 
//we should activate a special mode in js, called strict mode which makes it easy for us
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
"use strict";
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




//-----------------------------------------------------------------------
//33 FUNCTIONS: fn is simply a piece of code that we can reuse over and over again in our code, it is little
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

//-----------------------------------------------------------------------
//34 FUNCTION DECLARATIONS VS FN EXPRESSIONS:
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


//-----------------------------------------------------------------------
//35 ARROW FUNCTIONS: 
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


//-----------------------------------------------------------------------
//36 FUNCTIONS CALLING OTHER FUNCTIONS

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

//-----------------------------------------------------------------------
//37 REVIEWING FUNCTIONS:
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

//38 CODING CHALLANGE:


//-----------------------------------------------------------------------
//39 INTRODUCTION TO ARRAYS:
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



//-----------------------------------------------------------------------
//40 BASIC ARRAY OPERATIONS:
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

//41 CODING CHALLANGE 2
//-----------------------------------------------------------------------
//42 INTODUCTION TO OBJECTS:
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


//-----------------------------------------------------------------------
//43 DOT VS BRACKET NOTATION:
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



//-----------------------------------------------------------------------
//44 OBJECT METHODS:
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

//45 CODING CHLLANGE 3
//-----------------------------------------------------------------------
//46 ITERATION: THE FOR LOOP: 
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

//-----------------------------------------------------------------------
//47 LOOPING ARRAYS, BREAKING CONTINUING:

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


//-----------------------------------------------------------------------
//48 LOOPING BACKWARDSAND LOOPS IN LOOPS
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


//-----------------------------------------------------------------------
//49 WHILE LOOP:
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
//SECTION 4 HOW TO NAVIGATE TO COURSE
//SECTION 5 DEVELOPER SKILLS & EDITOR SETUP
//SECTION 6 OPTIONAL HTML AND CSS
//----------SECTION 7-----------=====
//-----------------------------------------------------------------------------
//JAVASCRIPT IN BROWSER: DOM AND EVENT ELEMENTS
//70 PROJECT1: GUESS MY NUMBER

//selecting element in js:
//querySelector is method available on document object
console.log(document.querySelector(".message").textContent);

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

document.querySelector(".message").textContent = "Correct Number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//input field is something where we can i/p our data, we can also get the data from there, and we can also
//set the data, for input field to get the actual value we use value property

//to set value
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value); //23




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
// document.querySelector('.message').textContent = 'Too High';
//score--;
//document.querySelector('.score').textContent = score;
//should only happen whenever the score is still above 0 and then when the score is actually 0, then we should
//get some kind of mesg saying that we lost the game

//-----------------------------------------------------------------------------
//75 MANIPULATING CSS STYLES
//DOM actyally also includes CSS styles, so withg DOM manipulation, we can also change styles, we can change
//bg color of entire page to green whenever the player guesses the correct no so when player wins the game
//and also make the guess no wider

//76 CODING CHALLANGE
//-----------------------------------------------------------------------------
//77IMPLEMENTING HIGH SCORES:
//we need a variable for the high score, wher do we think to check for the high score, basically if the current
//score is greater than high score, high score was set as soon as the player won the game

//-----------------------------------------------------------------------------
//78 REFRACTORING OUR CODE: THE DRY PRINCIPLE
//REFRACTORING: means to restructure code but without changing how it works, we do it to improve the code
//and to eleiminate dupicate code

JavaScript in the Browser: DOM and Events
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


//--------------------PROJECT3: PIG GAME-------------
//



//----------SECTION 8-----------=====
//-----------------------------------------------------------------------------
//HOW JAVASCRIPT WORKS BEHIND THE SCENES

//89 AN HIGH-LEVEL OVERVIEW OF JAVASCRIPT

// javascript is a high level, prototype-based object oriented, multi-paradigm, interpreted,
//just-in-time compiled, dynamic, single-threaded, garbage-collected rogramming language with first
//class functions and a non- blocking event loop concurrency model

//high-level:
//every programs that runs on your computer needs some hardware resources, such as memory, and
//cpu to do its work. there are low languages such as c where you have to manually mange these resources
//for example asking the computer for memory to create a new variable on the other you have high level
//language such as js, python where we do not manage resources at all because these languages
//have so called abstractions that take all of that work from us. this makes the language easier to
//learn and to use, but the downside is that programs will never be as fast or as optimized as for
//example, c programs, 

//Garbage collection:
//now one of the powerful tools that takes memory management away from us developers is garbage
//collection which is basically an algorithm inside the javascript engine, which automatically removes
//old,unused objects from the computer memory in order not to clog up with unnecessary stuff

//interpreted or just-in-time: the computer's processor only understands 0's and 1's, ultimately
//every single program needs to be written in 0's and 1's, which is also called machine code,
//since it is not practical to write, we simply write human-readable js code, which is abstraction
//over machine code, but this code eventually needs to be translated to machine code and that
//step can be either compiling or interpreting. this step is necessary in every single programming
//language because no one writes machine code manually, incase of it happen inside the js engine

//Multi-paradigm: a paradigm is an approach and an overall mindset of structuring our code which
//will ultimately direct the coding style and technique in a project that uses a certain
//paradigm
//3 popular paradigm are 
//1)procedural programming: it is basically organizing the code in a very linear way, and then with
//some functions in between

//we can classify paradigm as imperative and declarative
//2)object-oriented programnming(oop) 
//3)functional programming(fp)
//js does all of it, so it's really flexible and versatile


//prototype based object oriented: everything in js is an object, except for primitive values such as
//numbers, string etc.., but arrays for example are objects
//we create an arrays from an array blueprint , which is like a template and is called prototype
//this protype contains all the array methods, the arrays we create in code inherits the method from
//blueprint so that we can use them on the arrays

//First class functions: functions are treated just as a varaibles, so we can pass functions into
//other functions and we can even return functions from funtions

//Dynamic: means dynamically typed let x = 23; let y = 10; x ='fgfd';
//in js we dont assign data type to variables, instead they only became known when the js engine
//executes our code, also type of variable can be easily changed as we reassign

//concurrency model:it means how js engine handles multiple tasks happening at the same time
//we need that because js itself runs in one-single thread, which means it can only do one thing
//at a time and therefore we need a way of handling multiple things happening, and by the way when 
//computing a thread is like a set of instructions that is executed in the computers cpu.
//so basically the thread is where our code is actually executed in a machine's processor

//if there is a long running task like fetching data from a remote server, that would block the
//single thread where the code is running, we want non blocking behaviour for this we use an event loop

//Non blocking event loop: the event loop takes long running tasks executes them in the background
//and then puts them back in the main thread once they are finished





//-----------------------------------------------------------------------------
//90 JAVASCRIPT ENGINE AND RUN TIME

//Javascript engine: it is simply a computer program that executes js code.
//every browser has its own js engine, but the most well known engine is Google's v8
//js engine always contains a call stack and heap stack.
//1.the call stack is where our code is actually executed using something called execution context

//HEAP is unstructured memory pool which store all the objects that our application needs
//how the code is complied to machine code
//computer processor understand only 0's and 1's therefore every single program needs to be converted
//into machine code this can be done by compilation and interpretation

//COMPILATION: the entire source code is converted into machine code at once and this machine code
//is then written into a portable file that can be executed on any computer memory
//it has 2 steps first the machine code is built and then it is executed in cpu' memory and the execution
//happen way after the compilation

//INTERPRETATION: there is an interpreter which runs through the source code and executes it line by line
//the code is read and executed at the same time, the source still needs to beconverted into machine code
//but it simply happens right before it's executed


//interpreted languages are much slower that complied languages
//js is mix between compilation and interpretation which is called just in time compilation
//just-in-time: entire code converted into into machine code at once and then executed immediately 

//as a piece of js code enters into the engine the 1st step is to parse the code (to read the code)
//during parsing the code is parsed into a data struture called ast(abstract syntax tree)
//this works by first splitting up each line of code into pieces that are meaningful to the language
//like const or function keywords, and then saving all these pieces into the tree in a structured way
//this step also checks if they are any syntax errors and the resulting tree will later be used to
//generate the machine code

//next step is compilation: which takes the generated ast and compiles into a machine code
//this machine code then executed right away
//execution happen in the js engine call stack
//modern js engine actually have some pretty clever optimization, what they do is to create a very
//unoptimized version of machine code in the beginning just so that it can start executing as fast as possible
//then in the background this code is optimized and recompiled during already running execution program
// and this can be done multiple times and after each optimization the unoptimized code is simply swept
//for the new more optimized code without ever stopping execution

//all this parsing, compilation, optimization happen in special threads inside engine that we cannot access
//from our code so completely separate from the main thread that is basically running into a call stack
//executing our own code

//JAVASCRIPT RUN TIME is big container which includes all the things that we need in order to use js
//in this case in the browser
//the heart of any runtime is the js engine
//without the engine there is no run time and there is no js
//js engine alone is not enough. in order to work properly we also need access to web API'S
//WEB APIS are functionalities provided to the engine but which are not part of the js language
//js simple get access to this api's through the global window object, but it still make sense that
//the web api's are also part of the runtime because again a runtime is just like a box that contains all
//the js related stuff

//a typical js run time also includes a callback queue: this is a data structure that contains all
//the callback functions that are ready to be executed. for example we attach event handlersfunctions
//to dom elements like button to react to certain events. these event handler funtions are also called
//callback functions.as the event happens for example a click, the callback function will be called
//the 1st thing that actually happens after the event is that the callback function is put into the 
//callback queue then when the call stack is empty tha tcallback function is passed to stack so that it
//can be executed, this happen by something called the event loop, 

//EVENT LOOP:so basically the event loop takes callback fn's from the callback queue and puts them into the
//call stack so that they can be executed


//-----------------------------------------------------------------------------
//91 EXECUTION CONTEXT AND THE CALL STACK

//suppose our code just finished compiling, the code now is ready for execution, what happens then is
//that a so-called global execution context is created for the top level code, a top-level code is basically
//code that is not inside any function, so again, in the beginning only the code that is outside of
//the functions will be executed. functions should only be excecuted when they are called

const name = 'jonas';// the name declarion is clearly top-level code so it will be executed in global
//execution context
const first = () => {
    let a = 1;
    const b = second();
    a = a + b;
    return a;
};

function second() {
    var c = 2;
    return c;
}


//EXECUTION CONTEXT: it is an abstract concept. it is an environment in which a js is executed
//it is like a box that stores all information for some code to be executed such as local variables
//or arguments passed into functions, so js code runs inside an execution context

//in js project thers is only one global execution context,it is always there as a default context, and
//its where top-level code will execute. then top-level code is exected
//once top level code is finished function finally start to execute as well

//for each and every function call a new execution context will be created containing all the info
//that is necessary to run exactly that function, same goes with methods, they are simply functions
//attcahed to objects. all this execution context make up the call stack. when all functions are done
//executing the engine will basically keep waiting for callback functions to arrive so that it can execute
//these, for example a callback function associated with a click event, the event loop provides the callback
//fn's

//WHATS INSIDE THE EXECUTION CONTEXT:(VARIBALE ENVIRONMENT)
//the 1st thing that is there in execution context is VARIBALE ENVIRONMENT
//VARIABLE ENVIRONMENT: var, let cont declartions, function, argument object
//in this environmment all the variables, and function declarations are stored and there is also a special
//arguments object, this object contains, as the name says all the arguments that were passed into the
//function that the current execution context belongs to, each function gets its own execution context
//as soon as the function is called. so basically all the variables that are somehow declared inside a function
//will end up in its variable environment. however the function can also access variables outside of a function
//this works because of scope chain

//SCOPE CHAIN:
//scope chain basically consists of references to variables that are located outside of the current function
//and to keep track of this scope chain, it is stored in each execution context, finally each context
//also get a special variable called the this keyword. the content of the execution context,
//so variable environment, scope chain and this keyword is generated in so called creation phase which
//happens right before execution

//execution contexts belonging to arrow functions, do not get their own arguments keyword nor do they get
//the this keyword
//basically arrow functions dont have the arguments object and the this keyword, instead they can use 
//the argument object and the this keyword from their closest regular function parent

//callstack together with the memory heap, makes up the js engine itself
//CALL STACK:
//it is basically where the execution context get stacked on top each other, inorder to keep track
//of where we are in the program execution, so the execution context that is on the top of the stack
//is the one that is currently running, and when its finished running, it will be removed from the stack
//ans execution will go back to the previous execution context

//-----------------------------------------------------------------------------
//92 SCOPE AND THE SCOPE CHAIN

//SCOPING: scoping controls how our program's variables are organized and accessed by the js engine
//where do variables live and where can we access certain variables?
//in js we have somthing calles lexical scoping

//LEXICAL SCOPING:
//lexical scoping means that the way the variables are organized and accessed is entirely controlled by
//by the placement of functions and of blocks in the program code
//for example the function that is written inside another function has access to the variables of the
//parent function

//SCOPE: is the space or environment in which a certain varaible is declared
//incase of functions that's essential the variable envirinment which is stored in execution context
//we have 3 scopes
//1.function scope 2)global scope 3)block scope

//SCOPE OF THE VARIABLE:
//scope of the variable is basically the entire region of our code, where a certain varaible is accessed
//global scope is once more for a top level code
const mee = 'jonas';
const job = 'teacher';
const year = 1994;
//so this is for variables that are declared outside of any function or block. these variables can be
//accessabile anywhere in ou program in all our functions and all blocks

//LOCAL SCOPE:
//each and every function create a scope and the varaiables declared inside that function scope are only
//accessable inside that function
function calAge(birthYear) {
    const now = 2037;
    const age = now - birthYear;
    return age;
  }
  //console.log(now) refernce error
  //this is also called a local scope, local variables lives inside the fn, outside of a fn, the variables
  //are then not accessabel at all, this is same as variable environment
  
  //BLOCK SCOPE: varaibles declared inside a block are only accessable inside the block
  if (year >= 1981 && year <= 1996) {
    const millenial = true;
    const food = 'avacado toast';
  }
  console.log(millenial);
  //BLOCK scope only apply to variable declared with LET or CONST
  //VAR IS FUNCTION SCOPED
  //all functions now are also block scoped,
  
  //LET,CONST and FUNCTIONS are block scoped
  
  const myName = 'jonas'; //global scope
  
  function first() {
    const age = 30;
    if (age >= 30) {
      const decade = 3;
      var millenial = true;
    }
    function second() {
      const job = 'teacher';
      console.log(`${myName} is a ${age}-old ${job}`);
    }
    second();
  }
  first();
  
  //myNmae var is the only var declartion that we have in global scope, inside a global scope, we have a scope
  //for 1st fn because each fn creates its own scope, we have age variable in this scope, inside the 1st fn
  //scope let/s now conside the 2nd which will also creates its own scope containing the job var set to teacher
  //we have a nested structure of scopes with one scope inside the other, here in the 2nd fn, we have
  //console.log(`${myName} is a ${age}-old ${job}`); this line of code where we need myName varibale and
  //age variable which were both not declared inside the current scope, but we really need these varibales
  
  //every scope always has access to all the varaibles from all the outer scopes from all its parent scope
  
  //VRAIBALE LOOKUP:
  //if one scope needs to use a certain variable, but cannot find in current scope, it will look up
  //in the scope chain and see if it can find a variable in one of the parent scopes. if it can it can use
  //that variable. this process is variable lookup
  
  //a certain scope will never, ever have access to inner scopes
  
  //scope chain: order in which functions are written in the code
  
  const a = 'jonas';
  first();
  function first(){
      const b = 'hello';
      second();
  
      function second(){
          const c = 'hi';
          third()
      }
  }
  
  function third(){
      const d = 'hey';
      console.log(d + c + b + a);
  }
  
  //we have 3 fn's called 1st, 2nd and 3rd, we start by calling the 1st fn, which then calles the 2nd fn
  //which in turn calls the 3rd
  
  //global scope conatins a = 'jonas', first = <fn>, third<fn>
  //first()ec contains b ='hello', second = <fm> -- a = 'jonas', first = <fn>, third<fn>
  //second()ec contains c = 'hi', third = <fn>
  //third() ec contains d = 'hey'
  
  //in global scope we also called the 1st fn, this fn also gets its own scope which contains all the variables
  //that are declared inside of the fn, so the 1st scope also get access to all the varibales from its parent scope
  
  //scope chain is all about the order in which fn's are written in the code, scope chain has nothing to do
  //with the order in which fn's were called, scope chain has nothing to do with the order of the execution
  //contexts in the call stack the scope chain does get the variable environment from the execution context
  //
  
  //WHERE DO VARIABLES LIVE? or where can we access a certain variable, and where not?
  
  //there are 3 types of scoping in js: the global scope, scope defined by fn's, and scopes defined by
  //blocks
  
  //only let and const variables are block scoped, variables declared with var end up in the closest fn scope
  
  //in js we have lexical scoping: which means that the rules of where we can access varibales are based on
  //exactly where in the code fn's and blocks are written
  
  //very scope always has access to all the vraibles from all its outer scopes, this is the scope chain
  
  //when a certain var is not in a current scope, the engine looks up in the scope chain unitl it finds the
  //var, this is called varibale look up
  
  //scope chain is a one wy street: a scope will never, ever have access to the varibales of an inner scope
  


//-----------------------------------------------------------------------------
//93 SCOPING IN PRACTICE:

//this calcAge fn here is defined in a global scope, this fn creates its own scope that is equal to the
//variable environment  of its execution context

function calAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `you are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear < 1996) {
      //if we decalre a var here that is already exist in a parent scope, js tries to look for the var name
      //in the current scope, it is actuallu=y in the current scope, so js will use this var and not perform a
      //any variable look up
      const firstName = 'steven';
      var millenial = true;
      const string = `oh you are a millenial ${firstName}`;
      console.log(string);

      function add() {
        return a + birthYear;
      }

      output = 'new output';

      //the scope of this add fn is only the block in which it is defined, so only in that block we
      //can use add fn, this is only true for strict mode
    }
    //console.log(string);error
    console.log(millenial); //true
    //add(2, 3);
    console.log(output);
  }
  printAge();
  //scope of the variable is the entire region of the code in which the variable is accessable
  //console.log(firstName);
  //this firstNmae is not in this scope, however it is a global variable, so through scope chain, it will be
  //available also inside this scope
  return age;
}

//gobal variable
const firstName = 'jonas';
calAge(1991);

//we can have diff fn's with the same parameter names, becoz each paramter is only defined in that scope
//when we redfine a variable from a parant scope inside of an inner scope


//-----------------------------------------------------------------------------
//94 VARIBALE ENVIRONMENT: HOISTING AND THE TDZ:

//we learnt that execution contaxt contains 3 parts, a variable environment, scope chain in the current
//context, and this keyword

//VARIABLE ENVIRONMENT: how varaibles are actually created in js. in js we have mechanism called hoisting

//HOISTING: basically make some type of variables accessable, or let's say usable in the code before they
//actually declared in the code, variables are lifted up to the top of thier scope

//the code basically scanned for variable declarations before it is executed, this happens in the so-called
//creation phase of the execution context, then for each variable that is found in the code, the new
//property is created in a variable environment object. hoisting is different for
//1)function declarations, 2)var variables 3)let and const variables 4)function expressions and arrow functions

//FUNCTION DECLARATION(HOISTING)
//fn decalarions are actually hoisted, and intial values in variable environment is set to the
//the actual function,(we can use function declarations before they are declared in the code), again
//because they are stored in the variable environment object, even before the code starts executing,
//function declaration are BLOCK SCOPED

//HOISTING WITH VAR:
//variables declared with var are also hoisted, but hoisting works in a different way, when we try to access
//var variable before it is declared, we dont get the declared value but we get undefined, FUNCTION SCOPED

//HOISTING WITH LET AND CONST:
//let and cont are not hoisted, there value is set to unintialized, these variables are placed in a
//so-called temporal dead zone or tdz,
//TEMPORAL DEAD ZONE: which makes it so that we can't access the variables between the
//the beginning of the scope and the place where the variables are declared. when we use a let,const
//before we declare, we get an error, BLOCK SCOPED

//arrow functions or function expressions: these are simply variables so if a function expression or
//arrow functions created with var is hoisted to undefined but created with let, const it's not usable
//before it's declared in the code because of the temporal dead zone, so again just like normal variables
//

//TEMPORAL DEAD ZONE:
const myName1 = 'jonas';

if (myName1 === 'jonas') {
  console.log(`jonas is a ${job}`); //cannot access job before initialization
  const age = 2037 - 1994;
  console.log(age);
  const job = 'teacher';
  console.log(x); //x is not defined
}

//job varaible it is a const so it's scoped only to this if block and it's gonna be accessable starting
//from the line where it is defined, because there is temporal dead zone for the job variable, it's
//basically the region of the scope in which the variable is defined, but can't be used in anyway
//so it is as if the variable did'nt even exist, now if we still tried to access variable while in the
//tdz we get a reference error(telling us we cant access job before initialization)

//if we tried to acces a varaible that is actually never been created then we get error saying(it is
//not defined at all), job is infact in the temporal dead zone where it is still initialized, but the
//engine know that it will eventually be initialized, becoz it already read the code before and set the job
//variable in the var environment to uninitialized, then when the execution reaches the line, where the var
//is declared it is removed from the temporal dead zone

//each and every let and const variable get their own dead zone that starts at the beginning of the scope
//until the line where it is defined and the variable is only safe to use after the tdz

//what is actually need for js to have a temporal dead zone: makes it easier to avoid and catch errors
//because using a variable that is set to undefined before it's actually declared can cause serios bugs
//which may be hard to find

//WHY TDZ?
//Makes it easier  to avoid and catch errors: accessing var before declaration is a bad practice and should
//be avoided

//Makes consts variables actually work

//WHY HOISTING:
//using fn's before declaration
//var hoisting is a by product of hoisting fn's


//-----------------------------------------------------------------------------
//95 HOISTING AND TDZ IN PRACTICE

//HOISTING WITH VARIABLES:
//console.log(me); //undefined, var declared with var are hoisted but they are hoisted to value undefined
//console.log(job); //we cannot access job before initialization, becoz job variable is still in tdz here
//at this point

//the tdz of a var declared with let or const, starts from the beginning of the current scope until the point
//of the code where it is defined
//console.log(year);//we cannot access year before initialization
var me = 'jonas'; 
let job = 'teacher';
const year = 1994;


//HOISTING WITH FUNCTIONS:


console.log(addDecl(2,3)); //5
//we were able to call the function declaration before it was actually defined

//console.log(addExp(2,3)); //cannot access before initialization, becoz this fn here is a const variable too
//and it means it is in a tdz, we are simply assigning fn value to this variable
//console.log(addArrow(2,3));
//console.log(adddArr);
//console.log(adddExp(2,3)); //adddExp is not a function
//any variables declared with var will be hoisted and set to undefined, variabled declared with var 
//is undefined, so if we try to call undefined we will get it is not a function

//FUNCTION DECLARATIONS
function addDecl(a,b){
    return a + b;
}
//FUNCTION EXPRESSION
const addExp = function(a,b){
    return a + b; 
}
//if we declare it with var
var adddExp = function(a,b){
    return a + b;
}

//ARROW FUNCIONS
var adddArr = (a,b) => a + b;
const addArrow = (a,b) => a + b;

//logic which will delete the shoppingCart  whenever the no of products is 0, we know that 0 is a falsy value
if(!numProducts) deleteShoppingCart()

//declare a var which contains the no of products
var numProducts = 10;

//fictional fn that deleteshpping cart
function deleteShoppingCart(){
    console.log('all products deleted')
}

//we will get all products deleted even though numProducts is 10; this is bcoz of hoisting at this point
//if(!numProducts) deleteShoppingCart() numProducts variable is in fact not 10, instaed iot is undefined
//we know that undefined is a falsy value, so this will still execute even though we thought that numProducts
//is 10;, but infact this is undefined so that will also trigger the execution of the if block

//use const most of time to declare variables and let if we really need to change the variable later
//we should declare variables at the top of each scope
//always declare funtions first and use them only after declaration

var x = 1;
let y = 2;
const z = 3;
//window is the global object of js in browser, you can see all kinds of stuff
//variables declared with let and const do not create property on the window object
console.log(x === window.x);//testing if x is actually a prop of the window //true
console.log(y === window.y);//false
console.log(z === window.z);//false

//variables declared with var will create a prop on the global window obj

//in window obj we will get a property of x = 1; and that's exactly the variable that we declared above
//using var however we cannot find y or z because they were declared with let or const, so variables
//decalred that way do not create prop's in the window obj


//-----------------------------------------------------------------------------
//96 THE THIS KEYWORD:

//THIS: this keyword or this variable is basically a special variable that is created for every
//execution context and therefore any function, infact its one of the 3 components of any execution context

//this keyword will always take the value of the owner of the function in which, the this keyword is used
//we also say it point to the owner of that function

//the value of the this keyword is not static, so it's not always the same.

//it depends on how the function is actually called, and it's value is only assigned when the function
//is actually called

//4 WAYS TO CALL A FUNCTION
//1)FUNCTION AS A METHOD
//1.to call function is as a method, as a function attached to an object, so when we call a method
//the this keyword inside that method will simply points to the object on which the method is called
//or it points to the object that is calling the method

const jonas = {
  name: 'jonas',
  year: 1994,
  calAge: function () {
    return 2037 - this.year;
  },
};
jonas.calAge();
//the method here is a calAge method, again because it is function attached to the jonas object
//this here is jonas

//2)SIMPLY CALLING AS NORMAL FUNCTIONS:
//2. another way of calling functions is by simply calling them as normal functions, so not as method
//and so not attached to any object, in this case the this keyword will simply be undefined, however
//that is only valid for strict mode, if you are not in strcit mode this will point to the global
//object which in case of the browser is the window object

//3)ARROW FUNCTIONS:
//3.arrow functions: arrow functions do not get their own this keyword, instead if you use this variable
//in an arrow function, it will simply be the this keyword of the surrounding function, so of the parent
//function, this is called the lexical this keyword, because it simply got picked up from the outer lexical
//scope of the arrow function

//4)FUNCTION CALLED AS A EVENT LISTENER:
//4.event listener: this keyword will always point to the dom element that handler function is attached
//to

//this keyword will never point to the function in which we are using it.
//this will never point to the variable environment of the function

//OTHER WAYS OF CALLING A FUNCTION: new,call,apply,bind
*/

/*

//-----------------------------------------------------------------------------
//97 THE THIS KEYWORD IN PRACTICE:

//this keyword in practice:
//THIS KEYWORD OUTSIDE OF ANY FUNCTION:
//outside here is global scope
//console.log(this);//the this keyword in global scope will simply window object

//THIS INSIDE A REGULAR FUNCTION CALL
const calAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);//undefined
}
calAge(1994);//undefined, inside a regular fn call, the this keyword will be undefined, bcoz we are in strict
//mode, regular fn means a without a fn being attached to the obj, without having a owner


//THIS INSIDE AN ARROW FUNCTION:
const arrwThis = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);//window
}
arrwThis(1992);//window obj
//the arrow function does not gets it own this keyword. instead it simply uses the lexical this keyword
//it uses the this keyword of its parent function or of its parent scope. in this case the parent scope 
//is global scope i.e.., window


//THIS KEYWORD INSIDE THE METHOD:
const jonas = {
    birthYear: 1991,
    calAge: function(){
        console.log(this);//jonas object
        console.log(2037 - this.year);//46
    }
};
jonas.calAge();
//when we have a method call the this keyword inside of a method will be the object that is calling
//the method, jonas here is the owner of the method

//the this keyword will point to the obj that is calling the method, that means the this keyword will not
//simply point at the obj in which we wrote the method, here we wrote a calcAge method inside of the jonas obj
//we might think that is the reason why the this keyword point to jonas, nut this is not true, the reason
//that the this keyword will point to jonas in this case bcoz jonas was the obj calling that method


const matilla = {
    year: 1991;
};

//remember the fn is just a value, so we can do this, we copied from one obj to another, this is called 
//method borrowing,
matilla.calAge = jonas.calAge;
matilla.calAge();//20 gives us the correct result, in this method call here to this keyword does now
//actually point to matilla, so the this keyword always points to the obj that is calling the method, so 
//here we are calling the method on matilla, and therefore the this keyword points to matilla, which was
//the obj which called the method, even thought the method is written inside of the jonbas obj the this
//keyword still points to matilla if it is matilla who calls the method

const f = jonas.calAge; //copying the jonas object function into a new variable
console.log(f);//f here is a regular function so the this here is undefined
f();//this keyword is undefined and we also get the error it cannot read year undefined, bcoz the this keyword
//here is undeined, so undefined.year ofcouirse not exist, this happens bcoz the fn here is just a regular
//fn call, it is not attached to any object, there is no owner of this fn, therfore it is just a regular fn call

*/

/*
//-----------------------------------------------------------------------------
//98 REGULAR FUNCTIONS VS ARROW FUNCTIONS:
//THIS WORD FOR REGUALR FUNCTIONS AND ARROW FUNCTIONS

//regular functions vs arrow functions
//var firstName = 'matilla';

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calAge: function (birthYear) {
    console.log(2037 - this.year);
    //solution1:
    // const self = this;
    // const isMillenial = function(){
    //     console.log(self)//undefined
    //     // console.log(this.year >= 1981 && this.year < 1996);
    //     console.log(self.year >= 1981 && self.year < 1996);
    //     //cannot read the prop yaer of undefined
    // }

    //solution2:
    //bcoz arrow fn does not have this keyword, it simply uses the the this keyword of parent scope, in this
    //case the parent scope is calcAge method and in here the this keyword is jonas
    const isMillenial = () => {
      console.log(this); //undefined
      console.log(this.year >= 1981 && this.year < 1996);
    };
    isMillenial();
  },

  //GREET METHOD USING ARROW FUNCTION
  greet: () => {
    console.log(`hey ${this.firstName}`);
  },
};
jonas.calAge();
jonas.greet(); //HEY UNDEFINED bcoz arrow fn does not get its own this keyword, it will simpy use the this
//keyword from the surroundings, so in other words, its parents this keyword, and the parent scope of
//greet method is the global scope, this is not a code block, it is an obj literal, it is just a way we
//literally define objs, all this is in the global scope, that includes greet method, it is in global scope
//therfore the arrow fn here which does not have its own this keyword, will use the this keyword  from the
//global scope, that is the window obj
console.log(this); //window obj so this .firstName is aloso undefined
//jonas.greet();//hey matilla if we declare var with var it will create a prop on the obj

//when we try to access a prop thta doesnt exist on a certain obj, we do not get error, but simply undefined

//we should never ever use an arrow fn as a method, that is even true if we are not using the this keyword
//in a particular method, bcoz if we have this rule of never using arrow fn as a method, then you never think
//abt which type of fn you should use, you always just use a fn expression

//WHEN WE HAVE A FN INSIDE OF A METHOD
jonas.calAge();

//ARGUMENTS KEYWORD:in abt execution context, and the call stack we learned that fn's also get access to an
//arguments keyword, so not just the THIS keyword but also an ARGUMENT KEYWORD, just like the THIS keyword
//the ARGUMENTS keyword is only available in regular fns

//ARGUMENTS KEYWORD
const addEXp = function (a, b) {
  console.log(arguments); //Arguments(2) [2, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
  //we get basically an array with 2 and 5 and that is exactly the 2 paramters that we passed in, and this
  //can be useful when we need a fn to accept more parameters than we actually specified
  return a + b;
};
addEXp(2, 5); // we have 2 parameters and we added 2, but is conpletely legal to add more arguments, we didnt
//name them but they exists, we can see them in arguments array, they do appear and we can use them in fn's
//we could use a loop and then loop over this array and add all the numbers together
addEXp(2, 5, 8, 12);

//arrow fn does not get this argument keyword
var addArrow = (a, b) => {
  console.log(arguments); //Arguments is not define at addArrow (s
  return a + b;
};
addArrow(2, 5, 8, 12);

*/

/*
//---------------------------------------------------------------------------
//99 PRIMITIVES VS OBJECTS(PRIMITIVE VS REFERENCE TYPES)

//PRIMITIVES: primitives are like numbers, strings, booleans etc..,
// let age = 30;
// let oldAge = age; // at this point the age is still 30
// age = 31;
// console.log(age); //31
// console.log(oldAge); //30

//WITH OBJECTS:
// const me = {
//   name: 'jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log(friend); //27
// console.log(me); //27

//JAVASCRIPT PRIMITIVE DATA TYPE:Number, String, Boolean, Undefined,Null,Symbol,BigInt,
//then everything else are basically objects

//OBJECTS: object literal, arrays, functions etc..,

//when we are talking abt memoery and memory management, its usualy to call primitives, primitive types
//and objects reference types because of diff way in which they are stored in memory

//JAVASCRIPT ENGINE: has 2 components, the call stack and heap memory
//CALL STACK: where the fns are executed
//HEAP: where objs are stored in memory

//all the objs in other words refernce types will get stored right in the memory heap, on other hand the primitives
//and primitive types are stored in the call stack, primitive types are stored in execution context in which
//they are declared, but for sake of simplicity primitive types are stored in call stack bcoz thats where
//the execution context runs

let age = 30;
let oldAge = age; // at this point the age is still 30
age = 31;
console.log(age); //31
console.log(oldAge); //30

//when we declare a variable like age = 30, 1st js will create a so-called unique identifier with the variable
//name identifier: age, then the piece of memory will be allocated with a certain address address: 0001
//so 0001 and finally the value would be stored in a memory at the specified address value: 30
//identifier address    value
//age           0001      30
//in this case the value 30 will be specified at memoery address 0001, this all happen in th ecall stack
//where primitive values are stored

//the identifier is actually points to the address and not to the value itself, so we would say that the
//age variable is equal to 30, but infact, age is equal to the memory address 0001 which holds the value
//of 30

//in next line we declare oldage = age, so knowing that a variable actually holds the memory address,
//the oldAge simply points to the same memoery address as the age variable, and so it will look like
//old age, is simply 30 as well

//now in next line we set age = 31, the value at address 0001 will certainly not 31, because that would change
//the oldage as well, since they both point to the same address, the value at the certain memory address
//is immutable, that cannot be changed, instaed a new piece of memoery is allocated and the age identifier
//now simply points to the new address, which is holding the new value 31

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(friend); //27
console.log(me); //27

//with reference values, when a new obj is created such as me obj, it is stored in the heap, and such as
//before there is a memory address and then the value itself, now in the case of refrence values like this
//me obj the me identifier does actually not point directly to this newly created memory address in the heap
//in this case D30F, instead it will point to a new peice of memory thats created in the stack, and thi new
//piece of memory will then point to the obj thats in the heap by using the memory address as its value
//address value
//D30F      {
// naem: 'jonas'
//age: 30
//}

//the piece of memory in the call stack has a refernce to the piece of memory in the heap, which hold a me obj

//when we declare variable as an obj, an identifier is created, which points to the piece of memory in stack
//which in turn points to a piece of meory in the heap, and thst is where the obj is stored, it works this
//way bcoz objs might too large to store in the stack instaed they are stored in the heap, which is like
//an almost unlimited memeory pool, and the stack just keep the reference to where the obj is stored in the
//heap, so that it can find it whenever necessary

//we create anew var called friend that we set equlat to me obj, just like with primitive values, the
//friend identifier will point to the exact same address as the me identifier, and again that address contains
//the reference, which then points to the obj itself, like this th efriend obj is now essentially the
//exact  same as me obj, in the me obj, the age is now also 27 even though we never changed the me directly
//the reason for this is that the me and friend actually point to the same obj in the memory haep, so whenever
//we cahnge something in this obj, it will be always be reflected in friend  and in me obj, these are just
//2 diff identifiers pointing to the exact same value

//whenever we think copying an obj, you are really just creating a new varibale that points to the same obj

*/

/*

//-----------------------------------------------------------------------------
//100PRIMITIVES VS OBJECTS IN PRACTICE

//MUTATING A PRIMITIVE VALUE
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'davis';
console.log(lastName, oldLastName); //davis Williams

//beacsue each primitive value will simply be saved into its own piece of memory in the stack

//MUTATING AN OBJECT(REFERENCE VALUE): beacuse it is gonna be stored in heap, and the stack then just keeps
//reference to the memory position at which the obj is stored in the heap
const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log('before marriage:', jessica);
//before marriage: {firstName: 'jessica', lastName: 'davis', age: 27}
console.log('after marriage:', marriedJessica);
//after marriage: {firstName: 'jessica', lastName: 'davis', age: 27}
//in both the last name is davis, it happen because when we attempt to copy the original obj, it did infact
//not created a new obj in the heap, so this is not a new obj in the heap, it simply just another variable
//in the stack, which holds the reference to the original obj, so  both of these 2 variables simply point
//to exactly the same memory address in the heap, and thats because in the stack, they both hold the same
//memory address reference

//waht actually needs to be constant is the value in the stack, in the stack the value only holds the reference
//which we are not actually changing the only thing that we are changing is the underlying obj that is stored
//in the heap,

//completely changing the obj, so assigning a new obj to it is completely diff tahn simply changing the prop

//what if we actually really wanted to copy an object so that we could then change one of them without changing
//the other

//COPYING OBJECTS:
const jessica2 = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
  family: ['alice', 'bob'],
};
//If we areally wanted to copy this obj we could use a fn called Oject.assign

//OBJECT.ASSIGN: this fn actually merges two objects and then return a new obj, what we do is merge empty
//new obj with jessica2
//OBJECT.ASSIGN: only creates a shallow copy and not a deep clone
const jessicaCopy = Object.assign({}, jessica2); //this will then create a completely new obj where all the properties are
//really copied, the result of calling this fn with these arguments will be a new obj
jessicaCopy.lastName = 'davis';
console.log(jessica2); //{firstName: 'jessica', lastName: 'Williams', age: 27}
console.log(jessicaCopy); //{firstName: 'jessica', lastName: 'davis', age: 27}

//using this technique of Object.assign only works no the 1st level, in other words if we have an obj inside
//the object, then this inner obj will actually still the same, so it will still point to the same place in
//memory

//Object.assign only creates a shallow copy and not a deep clone, a shallow copy will only copy the prop
//in the 1st level while a deep clone would copy everything
jessicaCopy.family.push('mary');
jessicaCopy.family.push('john');
console.log(jessica2); 
console.log(jessicaCopy);
//both the objects now have the family of 4, family obj is a deeply nested obj, so Object.assign did not
//really, behind the scene, copy it to the new obj

*/

//----------SECTION 9-----------=====
/*
//-----------------------------------------------------------------------------
//103 DESTRUCTUTING ARRAYS:
//DESTRUCTRING: is an es6 feature, and its basically a way of unpacking values from an array or an object
//into separated variables
//OR
//DESTRUCTURING: is to break complex data structure down into a small data structure like a variable
//so for arrays we use destructuring to retrieve elements from an array and store them into variables in
//a very esay way

const arr = [1, 2, 3];
//if we want to retrieve each one into it's own variable without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

//1)if we want to retrieve each one into it's own variable with destructuring
//but now with destructuring we can actually declare all the 3 variables at the same time
const [x, y, z] = arr;
console.log(x, y, z); //1 2 3

//we have to declare variables with const in detructuring
//even though we destructuring the array the original array is ont affected
console.log(arr); //(3) [1, 2, 3]

//2)to take some elements out of categories
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); //Italian Vegetarian

//3)if we want to switch these to variables 'Italian' and 'Vegetarian' without destructuring, we need to create
//a temporary variable and assign one of them temp = 'main'; and then we could switch to main
//main = secondary and then secondary = temp

//switching variables:
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); //Vegetarian Italian

//3)to switch values using destructutong
//but with destructuring we can make it a lot easier
//1st we create an array with both of them and the 1st one is going to be secondary and then secondary will
//be to main

//in order to switch to 2 variables using destructuring, we would first start by creating a new array with
//the two variables inverted [secondary, main] and then we can simply distract them

[main, secondary] = [secondary, main];
//we are not using let or const we just reassigning them, we do not need a temporary variable
console.log(main, secondary); //Italian Vegetarian

//4)another trick with destructuring is that we can have a function, return an array and then we can immediately
//destruct the result into different variables and so this basically allows us to return multiple values from
//a function

//write a function to order food
//receive to return values from a function:
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //Garlic Bread Pizza

//what if we have nested array
//5)NESTED array DESTRUCTURING
const nested = [2, 3, [4, 5]];
//const [i, , j] = nested;
//console.log(i, j); //2 (2) [4, 5]
//what if we want all the individual values then we have to do desturturing inside desturturing

const [i, , [j, k]] = nested;
console.log(i, j, k); //2 4 5

//6)DEFAULT VALUES: we can also set default values for the variables when we are extracting them, this is
//useful if we dont know the length of the array, this can sometimes happens in real world applications
//if we have an array that is shorter than we might think, then we might try to unpack the
//array in position that dont exsit

const [n, s, t] = [2, 3];
console.log(n, s, t); //2 3 undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
//we can set default values set them all to 1 then r will become 1

*/

/*
///-----------------------------------------------------------------------------
//104 DESTRUCTUTING OBJECTS:

//DESTRUCTURING OBJECTS: to destructure we use {} all
//1) all we have do is provide the variable names that exactly match the property name that we want to
//retrieve from the object, in objects the order of elements does not matter, there is no need to skip
//the elements

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

//2)what if we want the variable names to be different from the property names, well we still need to reference
//the property names otherwise js has no way of knowing what we actually want, this create 3 brand new variable

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
////Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//[] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//3)MUTATING VARIABLES:
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//{a,b} = obj when we start an object with {} then js expects the code block, since we cannot assign anything
//to a code blk we will get an unexpected error, to solve this wrap all of this into ()
({ a, b } = obj); //{a,b} = obj gives error as we cannot assign anything to the code block
console.log(a, b); //23,7

//4)//NESTED OBJECTS:
//we wanted to create an array open and close, thes should contain open hours for friday, we have openeing
//hours obj in that we have anothe obj
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(open, close); //{open: 11, close: 23}, actually we want 2 variables one called open and other called close
//11, 23

*/

/*
///-----------------------------------------------------------------------------
// 105 SPREAD OPERATOR:
//we can use spread operator to basically expand an array into all its elements so basically unpacking all the
//array elements at one

const arr = [7, 8, 9];
//creating new array based on the above array but with some el's at the beginning
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray); //(5) [1, 2, 7, 8, 9]

//1)CREATING A NEW ARRAY BASED ON INITAL ARRAY USING SPREAD OPERATOR
const newArray = [1, 2, ...arr];
console.log(newArray); //(5) [1, 2, 7, 8, 9]

//SPREAD operatorbasically takes all the values out of the array and then write them individually

//USES OF SPREAD OPERATOR:
//1)when we want to wrie multiple values separated by commas, that situation happens
//whenever we write an array literal

//2)when we pass arguments into the fn
//if we want to actually log the individual elements of this newArray
console.log(...newArray); //1,2,7,8,9

//whenever we need to write the elements individually then we can use the spread operator, that is useful when
//we write an array or when we need to pass multiple elements into a fn

//1)create an array by creating one more food item in the main menu array
const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);
//spread operator is similar to destructuring, beacause it also helps us get elements out of arrays,
//the big difference is that spread operator takes all the elements from an array and also it doesn not create new
//variables

//2 USE CASES OF SPREAD OPERATOR
//a)which is to create shallow copies of arrays,
//b)and to merge 2 arrays together

//CREATING A SHALLOW COPY
const mainMenuCopy = [...restaurant.mainMenu];
//here we just created a shallow copy of an array

//to join 2 arrays or more together
//JOINING 2 ARRAYS
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);
//(7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

//spread opeator works on arrays but not completely true, because actually spread operator works on all so-called
//iterables
//iterables are things all like arrays, strings, maps or sets but not objects, most of the built-in data
//structures in js are now iterables, except obj

////SPREAD OPERATOR ON STRING:
const str = 'jonas';
const letters = [...str, '', 's.'];
console.log(letters); //(7) ['j', 'o', 'n', 'a', 's', '', 's.']
console.log(...str); //j o n a s
//console.log(`${...str} jonas`);
//this is not a place that expects multiple values separated by ,
//1)multiple values separated by comma are usually only expected when we pass arguments into a function, or when
//we build a new array
//2)we can only use spread operator when buliding an array, or when we pass values into a function

//write a own function that accepts multiple arguments and then use the spread operator to actually pass
//those arguments, create a method to order pasta, and the pasta always needs to have 3 ingrdienest
//getting ingredients from pasta
// const ingredients = [
//   prompt('lets make pasta ingrdient 1?'),
//   prompt('lets make pasta ingrdient 2?'),
//   prompt('lets make pasta ingrdient 3?'),
// ];
// console.log(ingredients); //(3) ['a', 'b', 'c']

//calling order pasta function
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//SPREAD OPERATOR ON OBJECTS: even though objects are not iterables
//objects
//create a new restaurant object with all the data from the original one plus some additional data
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'guiseppe' };
console.log(newRestaurant);
//{foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

//CREATING SHALLOW COPIES USING SPREAD OPERATOR
//since we were able to do shallow copies of arrays, using spread operator we can do the same for objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'new Restaurant';
console.log(restaurantCopy.name); //new Restaurant
console.log(restaurant.name); //Classico Italiano

*/

/*
//-----------------------------------------------------------------------------
//106REST PATTERN AND PARAMETERS:

//rest pattern looks exactly same as spread operator, so it has the same syntax with 3 dots but it actaully does
//the opposite of spread operator
//we use spread operator to build new arrays or to pass multiple values into a function, in both the cases
//we use spread operator to expand an array into individual elements, rest pattern uses the same syntax

//REST OPERATOR: to collect multiple elements and condense them into an array
//spread operator is to unpack an array and rest operator is to pack elements into an array

//TO CREATE A NEW ARRAY BASED ON EXISTING ARRAY USING SPARED OPERATOR

//1)DESTRUCTURING
//SPREAD BECAUSE ON RIGHT HAND SIDE OF =
const arr1 = [1, 2, ...[3, 4]];
//we know this is a spread syntax as we are using it on the right hand side of equal sign, however we can
//also use it on left hand side of assignment together with destructuring, it will take rest of the elemnts
//in the array and keep it into a new array

//REST BECAUSE ON LEFT HAND SIDE OF =
const [n, y, ...others] = [1, 2, 3, 4, 5];
console.log(n, y, others); //1 2 (3) [3, 4, 5]
//Rest pattern basically collects the elements that are unused in the destruturing assignment

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//the rest syntax collects all the elements after the last variable, so in this case risotto, it does not include
//any skipped elements, the rest element must be the last element, there can only be one rest element

//REST IN OBJECTS:
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays); //{thu: {…}, fri: {…}}

//2) FUNCTIONS:
//the use case of spread operator is to pass multiple arguments into a fn all at the same time
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
add(2, 3); //(2) [2, 3]
add(5, 3, 7, 2); //(4) [5, 3, 7, 2]
//any arbitary amount of arguments should work for this fn, but we are not gonna specify all these arguments
//in the fn, we will use rest pattern for this

const x = [23, 5, 7];
add(...x);

restaurant.orderPizaa('mushrooms', 'olives', 'spinach', 'onion');
restaurant.orderPizaa('mushrooms');

*/

/*
//-----------------------------------------------------------------------------
//107 SHORT CIRCUITING(&& AND ||)
//we have used logical operators only to combine Boolean values
//OR
//they can use any type of data, return any data type, short circuiting
console.log('----- OR -----');
console.log(3 || 'jonas');
//o/p: 3
//SHORT CIRCUTING WITH OR OPERATOR,
//means that if the 1st value is a truthy value, it will immediately return that 1st value
console.log('' || 'jonas'); //jonas, 1st value is false
console.log(true || 0); //true
console.log(undefined || null); //both are falsy values null
console.log(undefined || 0 || '' || 'hello' || 23 || null); //o/p hello because it is the 1st truthy value
//and therfore it will short circuit the entire evaluation and it will be the returned value

//there might be a property on the restuarant object  with the number of guests, but we dont know if it exist
//however we want to define a variable based on number of guests and we want to set a default value

//restaurant.guestNumber = 0;
const guests1 = restaurant.guestNumber ? restaurant.guestNumber : 10;
console.log(guests1); //10

const guest2 = restaurant.guestNumber || 10;
console.log(guest2); //10

//SHORT CIRCUTING WITH AND OPERATOR
console.log('----- AND -----');
//exact opposite of OR operator
//AND operator short circuits when the 1st value is falsy and then immediately returns the falsy value without
//even evaluating the second operand
console.log(0 && 'jonas'); //0
console.log(true && 'jonas');
jonas;
//when the 1st value is truthy, it means the evaluation continues and then simply the last value is returned
console.log('hello' && 23 && null && 'jonas'); //o/p null

if (restaurant.orderPizaa) {
  restaurant.orderPizaa('mushrooms', 'spinach', 'onion');
}

restaurant.orderPizaa && restaurant.orderPizaa('mushrooms', 'spinach', 'onion');
//OR operator will return 1st truthy value of all the operands, or simply the last value if all of them are falsy
//AND operator will return 1st falsy value or the last value if all of them are truthy

//we can use OR operator to set default values, and AND operator to execute code in the 2nd operand if the
//1st one is true

*/
/*
//108 THE NULLISH COASLESCING OPERATOR:
//we use the OR operator to set a default value in case that the 1st value was a falsy value
restaurant.guestNumber = 0;
const guests = restaurant.guestNumber || 10;
console.log(guests); //10
//when we set guestNumber to 0, then js will still take this default value here 10, and assign it to guest
//because 0 is a falsy value now, however fortunately for us we have a nullish coealscing operator

//THE NULLISH COASLESCING OPERATOR: it is an operator intorduced in es6 and it works like this
const guestsCorrect = restaurant.guestNumber ?? 10;
console.log(guestsCorrect); //0 the real value that is atually there

//nullish coalescing operator works with the idea or with the concept of nullish values instead of falsy values

//NULLISH VALUES: null,undefined(not include 0 or ')
*/

//-----------------------------------------------------------------------------
//109 LOGICAL ASSIGNMENT OPERATORS
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

//110 CODING CHALLANGE 1
/*
//-----------------------------------------------------------------------------
//111 LOOPING ARRAYS: THE FOR OF LOOP:
//new way of looping over array was intorduced in es6, and that is for-of-loop
//we want to loop over our entire menu here
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//to loop over this array using for loop

for (const item of menu) console.log(item); //we got all the element individually logged to the console
//this loop automatically loop over entire array, and in each iteration, it will gives us access to the
//current array element which we can specify here as (item)

//we can still use the break and continue in for-of-loop

//now what if we also need the current index not just the current element, for that instead of menu we need
//menu.enties method on this array
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

//112 OBJECT LITERALS
//-----------------------------------------------------------------------------
//113 OPTIONAL CHAINING:
/*
//Lets say we want to get the opening hours of our restuarant for monday
//if a certain property does not exist then undefined is returned immediately

if (restaurant.hours && restaurant.hours.mon)
  console.log(restaurant.hours.mon.open);

//with optional chain
console.log(restaurant.hours.mon?.open);
console.log(restaurant.hours?.mon?.open);
//only if the property that is before the ? here, so only if mon exist then this open property will be read
//from there, but if not then immediately undefined will be returned, and exist here actually means the nullish
//concept, so a property exists it it's not null and not undefined

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//looping over this array and log to the console whether the restaurant is opened or closed on each of the days
for (const day of days) {
  //console.log(day);
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(`on ${day} we open at ${open} `);
}

//methods:
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderChicken?.(1, 3) ?? 'method does not exist');

//arrays(we can check whether array is empty)
const users = [
  {
    name: 'jonas',
    email: 'admin@admin.com',
  },
];
console.log(users[0]?.name ?? 'user array empty');
if (users.length > 0) console.log(users[0].name);
else console.log('user array does not exist');
*/

//-----------------------------------------------------------------------------
//114 LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES
/*
//we can also loop objects which are not iterable, but in an indirect way
//we have different options depending on what exactly we want to loop over,
//so do you want to loop over the objects property names, or over the values or both together

//lets start by simply looping over property names, and so remember they are also called keys

//property names,

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
const properties = Object.keys(openingHours);
console.log(properties); //(3)['thu', 'fri', 'sat']
//now we can compute how many properties are in the object
//print the string how many days restaurant is open

let openStr = `we are open on ${properties.length} days:`;

for (const day of properties) {
  //console.log(day); //we get thu, fri, sat that are exactly 3 key names of the object
  openStr += `${day},`;
}
console.log(openStr);

//property values:
const values = Object.values(openingHours);
console.log(values); //(3) [{…}, {…}, {…}]
//to loop over the entire object, we actually need entries, and so entries is basically name + values together

//entire object
const entries = Object.entries(openingHours);
//console.log(entries);
//we can use this to loop over the object

for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}
*/

//115 CODING CHALLENGE
//-----------------------------------------------------------------------------
//116 SETS:
/*
//set is basically just a collection of unique values, so that means that a set can never have duplicates
//lets create a new set, and again to create a new set we write new set and then we need to pass in an iterable
//and the most common iterable here is an array, lets create an array with couple of strings
//set can ofcourse hold mixed data types
const orderSet = new Set(['pasta', 'pizza', 'pizza', 'maggie', 'fruits']);
console.log(orderSet); //Set(4) {'pasta', 'pizza', 'maggie', 'fruits'}

//we will get it has a size 3 and only values that are in there are pasta, pizza,maggie,fruits,
//all duplicates are gone
//we can see that set is similar to an array, there are no key value pairs, it's just a bunch of values grouped
//together
//just like arrays sets are also iterables
//in sets its elements are unique and the order of the elements in set is irrelevant
//strings are also iterables

console.log(new Set('jonas'));
//1)we can get the size of the set orderSet.size
//size is similar to length in arrays

console.log(orderSet.size); //4
//2)we can check if a certain element is in a set
console.log(orderSet.has('pizza')); //true
console.log(orderSet.has('bread')); //false
//has method is similar to includes method in arrays

//3)we can also add new elements to a set
orderSet.add('garlic bread');
orderSet.add('garlic bread');
//4)we can also delete elements
orderSet.delete('pizza');
//5)to delete all the elements of the set
//orderSet.clear();
console.log(orderSet);

//how to actually retrieve elements from the set
//in sets actually there are no indexes, infact there is no way of getting values out of a set

//sets are also iterables so we can loop over them
for (const order of orderSet) {
  console.log(order);
}

//the main use case of sets is actually to remove duplicate values of arrays

const staff = ['waiter', 'chef', 'waiter', 'manager'];
//convertion from set to an array for this we can use spread operator
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
//to know how many different position they are size property is very useful
console.log(new Set(['waiter', 'chef', 'waiter', 'manager']).size);
//to count how many different letters there are in a string
console.log(new Set('jonasdavid').size);
*/

//-----------------------------------------------------------------------------
//117 MAPS:FUNDAMENTALS:
/*
//MAP is a data structure that we can use to map values to keys, so just like an objects data is stored in
//key value pairs in maps

//difference in b/w maps and objects is that in maps, the keys can have any type and this can be huge,
//so in objects, keys are basically always strings, but in maps we can have any type it can be objects, arrays
//or other maps

//creating a restaurant map
const rest = new Map(); //empty map
//to fill up the map we can use set method and pass arguments 1st is key name: name, and name of the restaurant
//itself
//it both allow us to add a new element
rest.set('name', 'classic italiano');
//set method allows us to add the new element to the data structure
rest.set(1, 'firenze, italy');
console.log(rest.set(2, 'lisbon, portugal'));

//set method actually returns updated map allows us to change the set method like this
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close');

//inorder to read data from map we use get method
//pass the name of the key
//console.log(rest.get('name'));
//console.log(rest.get(true));
//console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //we are open

//1)we can also check if a map contains a ecrtain key
console.log(rest.has('categories')); //true
//2)we can also delete elements from the map by using the key
console.log(rest.delete(2)); //true
console.log(rest);

//3)we can also delete properties from the objects using something called delete operator
console.log(rest.size); //7
//console.log(rest.clear);

//we can use arrays and objects as map keys
const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
//to get the data based on the array

console.log(rest.get(arr));
*/

//-----------------------------------------------------------------------------
//118 MAP ITERATION:
/*
//thers is another of populating map without using the set method
//we can pass in an array and this array itself will contain multiple arrays, and in each of these arrays
//the 1st position is gonna be the key, and the second position will be the value
const question = new Map([
  ['question', 'what is the best programming language in the world'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(question);

//convert object to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//ITERATION: it is possible on maps because maps are also iterables
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
}

//to get the answer from the user let's use prompt
//const answer = 3;
//const answer = Number(prompt('your answer'));
console.log(answer);

//we can use the power of boolean keys here in order to print either success message here or the error message

console.log(question.get(question.get('correct') === answer));

//some times we need to convert map back to an array and we can do that by
//convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

//-----------------------------------------------------------------------------
//119 SUMMARY: WHICH DATA STRUCTURE TO USE?
//we have 4 data structures
//where data actually comes from. well actually there are essentially 3 sources of data
//1. the data can be written within the program source code itself like status messages that will be
//displayed on a webpage based on user action

//2. data can come from user interface, so from the webpage, it can either be data that the user inputs into
//some form or data test already wriiten somehowin the dom
//example: this can be the users tasks in a todo app or expenses in a budget app, or anything like that

//3.finally data can come from external sources which is usually a web api. now what is a web API
//API: it stands for application programming interface and we can basically use a web api to get data from other
//web applications, for example we can use a web api to get the current weather in any city or data about
//movies, or currency conversion rates and really every kind of data that you can imagine

//no matter where the data comes fom and what kind of data it is, we usually always have collections of data
//that we then need to to store somewhere, and so where do we store collections of data?
//we use data structures, but as we know there are 4 built-in data structures in javascript and so we need a
//way to deciding between them

//1st decision is do we just need a simple list of values?,  if so thenwe're gonna use an array or a set, but
//on the other hand if we need key value pairs then we need an object or a map,

//the big difference here is
//that with a key value pair we have a way of describing the values, so by using the key,
//on the other hand, in a list like an array or a set, we simply have the values without any description

//example for getting data from a web api beacuse in modern js applications that's usually the most common
//source of data, so data from web API'S usually comes in a special data format called json,

//example of json

// {
//   'count': 3,
//   'reciepies' : [{
//     'publisher': 'dsfsdf',
//     'title': 'best title',
//   },
//   'reciepies' : [{
//     'publisher': 'dsfsdf',
//     'title': 'best title',
//   },
//'reciepies' : [{
//     'publisher': 'dsfsdf',
//     'title': 'best title',
//   },
// ]
// }

//so json
//is essentially just text so a long string, but it can easily be converted to js objects because it uses the the
//same formatting as js objects and arrays so here we have 3 objects that decribe recipies, we have the values in
//green like title and puoblisher, and it makes complete sense that these values are decribed using a key
//otherwise we would have no idea what the different values actually are, so key value pairs are essential
//and that's why the data is stored in an object, not an array, now each of these recipies object in itself
//can be seen as a value, so we have a collection of data, and therefore we need a data structure to store
//them, array is a perfect data struture for that

//arrays vs sets: we use them for simple list of values, when we do not decribe the values

//arrays:
//you should use arrays whenever you need to store values in order and when these values might contain
//duplicates
//also you should always use arrays when you need to manipulate data because there are tons of useful array methods

//sets: should only be used when you are working with unique values, beside that you can also use sets in
//situations when high performance is really important, because operations like searching for an item or
//deleting an item from a set can be more faster in sets than in arrays

//objects vs maps: we should use these key value data structures whenever we need to describe the values using
//keys

//objects have been the traditional key value data structure, but using objs simply as key value pairs
//has a couple fo disadvantages

//maps are way better suited from simple key value pairs, because they offer better performance instead
//mak keys can have any data types and they are also easy to iterable and its easy to compute the size
//of the map

// if we need functions as values then we should use objects, so in obejcts these fn are called methods

//we should we use maps when we simply need to map keys to values and also when we need keys that are not strings

/*
//120 CODING CHALLANGE 3
//-----------------------------------------------------------------------------
//121 WORKING WITH STRINGS PART1:

const airline = 'tap air Portugal';
const plane = 'A320';

//1)we can get the charecter of a string at a certain position
console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2
console.log('B737'[0]); //o/p B

//2)we can also read the length property of strings
console.log(airline.length); //16
//we can also do that directly on the string
console.log('B737'.length); //4

//comparing strings to arrays strings also have methods

//3)we can get the position in which a certain letter is in the string
console.log(airline.indexOf('r')); //6
//this will only gives the 1st occurrence but sometimes we need the last one then we can use last indexOf
//space also count as a charecter
console.log(airline.lastIndexOf('r')); //10

//4)we can also search for the entire words. this one is case sensitive. IF YOU SEARCH WIOTH WRONG ONE WE GET -1
console.log(airline.indexOf('Portugal')); //8

//5)INDEXES are used to extract part of a string using the slice method and the slice method needs indexes as
//arguments
console.log(airline.slice(4)); // air Portugal
//4 is the begin parameter. so basically it's the position at which the extraction will start. this is 0 based
//4 happens to be this A so there is where the sice method starts to extract

//6)we also specify the end parameter(end value is not included in the string)
console.log(airline.slice(4, 7)); //Air
//the length of the extracted string here is always going to be end - beginning 7-4 is 3 and that is the
//length of the string

//just want to extract 1st word of the string without knowing the indexes
console.log(airline.slice(0, airline.indexOf(' '))); //tap
//extracting the last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //portugal

//we can also define a -ve begin argument then it will start counting from the end or start extracting from
//the end
console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //ap air Portuga

//B and E are the middle seats
const checkMiddle = function (seat) {
  //Checking last charecter of the string if it is B or E
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('you got the middle seat');
  else console.log('you got lucky');
};
checkMiddle('11B'); //you got the middle seat
checkMiddle('12D'); //you got lucky
checkMiddle('10E'); //you got the middle seat

//we know that strings are primitives, so why they have methods?
//should'nt methoda only be available on objects, however js is really smart
//whenever we call a method on a string js will automatically behind the scenes convert that string primitive
//to string object with the same content

console.log(new String('jonas')); //string looks like an obj
console.log(typeof new String('jonas')); //object

*/

/*
//-----------------------------------------------------------------------------
//122 WORKING WITH STRINGS PART2:
const airline = 'Tap Air Portugal';
//CHANGING THE CASE OF THE STRING

console.log(airline.toLowerCase()); //tap air portugal
console.log(airline.toUpperCase()); ///TAP AIR PORTUGAL
console.log('jonas'.toUpperCase()); //JONAS

//to fix the passenger name in the capitalization:
const passenger = 'JoNaS'; //FIX TO Jonas
const passengerLower = passenger.toLowerCase();
console.log(passengerLower); //jonas
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const passengerFunction = function (passengers) {
  const correctNameLower = passengers.toLowerCase();
  const capName = correctNameLower[0].toUpperCase() + correctNameLower.slice(1);

  console.log(capName);
};
passengerFunction('MIkeL'); //Mikel
passengerFunction('MADhUri'); //Madhuri

//1)to check a user input email
//comparing email
const email = 'hello@jonas.io';
const loginEmail = ' HellO@JOnas.io';
//const lowerEmail = loginEmail.toLowerCase();//hello@ jonas.io
//const trimmedEmail = lowerEmail.trim();

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail); //hello@ jonas.io
console.log(email === normalEmail); //true

//2)TO REPLACE PART OF A STRING
const priceGB = '288,97£';
const priceUs = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUs); //288.97$

//we can replace the entire word not just single charecter
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); //All passengers come to boarding gate 23. Boarding door 23!
//this will replace only the 1st occurence
//console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); //g is a global variable
//All passengers come to boarding gate 23. Boarding gate 23!
//create a regular expression for 'door' i.e /door/
//replace is case sensitive

//there are 3 simply methods that return booleans
//includes, startWith, endsWith
const planes = 'Airbus A320neo';
//we can simply use includes as same in arrays to test if it includes A320
console.log(planes.includes('A320')); //TRUE
console.log(planes.includes('Boeing')); //false
console.log(planes.startsWith('Air')); //false

//check if the current plane is part of the new airbus family
if (planes.startsWith('Air') && planes.endsWith('neo')) {
  console.log('part of the new airbus family'); //part of the new airbus family
}

//practice excercise:
//check if the baggage officer and passenger is basically allowed to be checked-in,

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket of Knife');
//You are NOT allowed on board
checkBaggage('Socks and camera'); //Welcome aboard
checkBaggage('Got some snacks and gun for protection'); //You are NOT allowed on board
*/

/*
//-----------------------------------------------------------------------------
//123 WORKING WITH STRINGS PART3
//SPLIT AND JOIN
//one of the most powerful string methods, which is split,

//SPLIT: so split allows us to split a string into multiple parts based on a divider string
//for some reason we have string like this. on this string we can call the split method and there we
//need to specify a divider string,
console.log('a+very+nice+string'.split('+'));
//now the string will split up by plus sign and it will store the result into elements of a new array
//(4) ['a', 'very', 'nice', 'string']
console.log('muppana madhuri'.split(' ')); //(2) ['muppana', 'madhuri']:

//we can now actually use the power of destructuring to create variables like this
const [firstName, lastName] = 'muppana madhu'.split(' ');
console.log(firstName, lastName); ///muppana madhu

//now if we want to make the lastName uppercase here and then we also want to add mister in the beginning
//we could just use a template literal
//for this we can use joint method which is essentially opposite of split
const newArrays = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newArrays); //Mr muppana MADHU

//capitalization of string
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('my name is madhuri');
capitalizeName('javascript is a programming language');

//PADDING A STRING: means to add a number of charecters to a string until the srting has a desired
//length

const mess = 'go to gate 23!';
//PADSTART( will add some charecters at the beginning of 1st argument will be the length that we want for
// a string and the charecter that we want to pad the string)
console.log(mess.padStart(20, '+').padEnd(30, '+')); //++++++go to gate 23!++++++++++
//+++++++++++go to gate 23! totoal length will be 25
console.log('jonas'.padStart(20, '+').padEnd(30, '+')); //+++++++++++++++jonas++++++++++

//when we see a credit card number on the internet you never see the entire number, usually we see last
//4 digits and the rest is masked with some symbol
const maskCredit = function (number) {
  const stNumber = number + '';
  const lastDigits = stNumber.slice(-4);
  console.log(lastDigits.padStart(stNumber.length, '+'));
};
maskCredit(12345678); ///++++5678
maskCredit(89345618); //++++5618
//+++++++++++++++jonas

//REPEAT METHOD:this simply allows us to repeat the same string multiple times
//lets say there is some bad weather at wen airport, so when that happens usually have those long messages
//on the screen like with the text repeating which then keep running and repaeting all the times
const mess1 = 'bad weather... all departures delayed.. ';
//now we want to basically create a big string repeating this one here multiple times
console.log(mess1.repeat(5));
//bad weather... all departures delayed.. bad weather... all departures delayed.. bad weather...
//all departures delayed.. bad weather... all departures delayed.. bad weather... all departures delayed..

//there are many planes waiting in line for takeoff
const planesLine = function (numPlane) {
  const planeL = `we have ${numPlane} planes in line ${'🛩'.repeat(5)}`;
  console.log(planeL);
};
planesLine(6); //we have 6 planes in line 🛩🛩🛩🛩🛩
planesLine(2); //we have 2 planes in line 🛩🛩🛩🛩🛩
*/

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
/*
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
*/

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

/*
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

*/

/*
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

*/
//-----------------------------------------------------------------------------
//135 CODING CHALLANGE:

//-----------------------------------------------------------------------------
//136 IMMEDIATELY INVOKED FUNCTION EXPRESSION:
/*
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
*/

//----------SECTION 11-----------=====
//-----------------------------------------------------------------------------
//142 SIMPLE ARRAY METHODS
/*
//WHY ARRAY DO ACTUALLY HAVE METHODS: methods are simply fn's that we can call on objects, so basically they
//are fn's attached o objects, so if we have array methods, thta means that arrays themselves are also objects
//so these array methods are simply fn's that are attached to all arrays that we create in js,

//arrays are objects and they get access to special built in methods that we can essentially see as tools
//for arrays

let arr = ['a', 'b', 'c', 'd', 'e'];
let string1 = 'madhuri';
let string2 = 'muppana';
//SLICE METHOD:(DOES NOT MUTATE ORIGINAL ARRAY)(CREATES A SHALLOW COPY)(same for strings)
//SPREAD AND SLICE GIVES SHALLOW COPIES
//similar to slice method that is on strings, with slice method we can extract part of any
//array, but without changing the original array
//1)
console.log(arr.slice(2)); //(3) ['c', 'd', 'e']
//it returns a new array, so copy of array, but only with extracted part
console.log(string1.slice(2)); //dhuri

//2)we can also define the end paramter
console.log(arr.slice(2, 4)); //(2) ['c', 'd']
//just like strings end paramter is not included
console.log(string1.slice(2, 4)); //dh

//3)we can specify a -ve begin paramter
console.log(arr.slice(-2)); //(2) ['d', 'e']
console.log(string1.slice(-2)); //ri

//4)it is easy to get the last element of the array
console.log(arr.slice(-1)); //['e']
console.log(string1.slice(-1)); //i

//5)we can also use a -ve index as the end paramter
console.log(arr.slice(1, -2)); //(2) ['b', 'c']
console.log(string1.slice(1, -2)); //adhu

//USES OF SLICE METHOD: we use slice method to simply create a shallow copy
console.log(arr.slice()); //(5) ['a', 'b', 'c', 'd', 'e']
console.log(string1.slice()); //madhuri

//when we want to chain multiple methods together, so callin gone after the other

//SPLICE:(MUTATE ORIGINAL ARRAY)(no splice for strings)
//works almost same way as slice but the diff is that it does actually change the original array, so it mutates
//the array
//console.log(arr.splice(2)); //(3) ['c', 'd', 'e']
arr.splice(-1); //(4) ['a', 'b', 'c', 'd']
console.log(arr); //(4) ['a', 'b', 'c', 'd']
arr.splice(1, 2); //(2) ['a', 'd']  b and c are deleted, 2 paramter is the no of elements that we want to
//delete
console.log(arr); //(2) ['a', 'b']
//extracted elements are actually gone

//USES OF SPLICE:to delete one or more elements from an array we use splice, and simply remove the last
//element of an array

//REVERSE:(MUTATE ORIGINAL ARRAY)(not works for strings)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //(5) ['f', 'g', 'h', 'i', 'j']
//it returns the reverse array
console.log(arr2); //(5) ['f', 'g', 'h', 'i', 'j']

//CONCAT:(DOES NOT MUTATE ORIGINAL ARRAY)(same for strings)
//used to concat 2 arrays, letters will be the result of calling the concat method on array
const letters = arr.concat(arr2);
console.log(letters); //(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); //(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(string1.concat(string2)); //madhurimuppana

//JOIN:(DOES NOT MUTATE ORIGINAL ARRAY)not works for strings
console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j
*/

//-----------------------------------------------------------------------------
//143 THE NEW AT METHOD:(works on strings)
/*
const arr = [23, 11, 64];
//to take one of the values at an array, lets say 1st one, then we would do
console.log(arr[0]); //23
//with at method
console.log(arr.at(0)); //23

//USE OF AT METHOD: if we wanted to get the last element of an array, suppose we dont know the length of
//an array we write something like this

//GETTING LAST ELEMENT OF AN ARRAY
console.log(arr[arr.length - 1]); //64
//USING SLICE
console.log(arr.slice(-1)[0]); //64
console.log(arr.at(-1)); //64

//AT METHOD ON STRINGS:
console.log('madhuri'.at(0)); //m
console.log('madhuri'.at(-1)); //i
*/

//-----------------------------------------------------------------------------
//144 LOOPING ARRAYS: FOREACH
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//to loop over movements array, in order to print message for each movement in this bank account
//+ve values are basically deposits and -ve values are withdrawals

//USING FOR OF LOOP
// for (const mov of movements) {
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`movement ${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`movement ${i + 1}: you withdrew ${Math.abs(mov)}`);
  }
}

//USING FOREACH METHOD
//to loop over movements array, we use forEach, and forEach method actually requires a callback fn
//forEach is a higher order fn, which requires a callback fn in order to tell it what to do, so it's a
//forEach method here that will call this callback fn, we are not calling it ourseleves, but when exactly
//the forEach will call this callback fn?

//foreach method loop over the array, and in each iteration it will execute the callback fn. also as the
//forEach method calls this callback fn, in each itertion it will pass in the current element of the array
//as an argument

//so each time is the call back is called, so in each iteration, it will recieve the current el of the array
//as an argument
console.log('------forEach----');
movements.forEach(function (mov, i, array) {
  if (mov > 0) {
    console.log(`movement ${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`movement ${i + 1}: you withdrew ${Math.abs(mov)}`);
  }
});

//i iteration 0 it will call this fn function(200)
//1: function(450)

//what if we actually needed access to a counter variable here, so just like we can access the current index
//in the for-of-loop

//it is so easy to get the current index in forEach loop, as the forEach method who calls the callback fn,
//as it calls the fn it also passes in the current el of an array, but actually that is not all it passes
//in, infact forEach passes in the current element, the index and the entire array that we are looping, and
//so therefore we can specify them in our parameter list, in this order matters a lot, so the 1st parameter
//always needs to be the current element, and 2nd be the current index, and 3rd entire array

//we cannot break out of a forEach loop, so the continue and break statements do not work in forEach loop
//instead forEach will always loop over entire array, if we really need to break out of a loop, then you have
//to keep using the for of loop 
*/

//-----------------------------------------------------------------------------
//145 FOREACH WITH MAPS AND SETS:
/*
//FOREACH WITH MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//In this array of arrays, each of these array elements, so the inner array will be one entry of the map
//where 'USD' is the key and 'United States dollar' this is the value

//we can call forEach on also maps
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// USD: United States dollar
// script.js:242 EUR: Euro
// script.js:242 GBP: Pound sterling


//FOREACH WITH SETS
const currencyUnique = new Set(['usd', 'gbp', 'usd', 'eur', 'eur']);
console.log(currencyUnique); //Set(3) {'usd', 'gbp', 'eur'}
currencyUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// usd: usd
// script.js:254 gbp: gbp
// script.js:254 eur: eur

//key here is exactly same as value because as the set doesnt have keys, and it does not have indexex either
//and so there is no value that would make sense for the key, so this key here in the parameters has no
//sense at all, it would'nt have to be either, and so the people whi designed this forEach method for sets
//they could have simply omitted the 2nd argument, well if they did that then this forEach would have been
//diff from others, so that would then create confusion in developers, and therefore it was decided to
//keep the same signature, so basically to keep all the parameters and simply set the 2nd to the 1st one
//so we can just write value here as well, but we cannot have the duplicate parameter name, and we can use
//_ which in js is a throw away variable, so the variable that is completely unnecessary, so it's just a
//convention
*/

//-----------------------------------------------------------------------------
//146 PROJECT(BANKIST APP)
//-----------------------------------------------------------------------------
//147 CREATING DOM ELEMENTS:
/*
//display movements from accounts object in the application
//so for ecah movement we want one el like this //2 DEPOSIT 3 DAYS AGO 4 000€
//we will be able to that by forEach method which will allow us to loop through this array, and then in each
//iteration, create a el like the above and display it on the page

//we make this fn receive data with which it should work, this fn should recieve with one array of movements
//and work with that data
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    //we have to find a way to atcually adding this html onto the webpage
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
*/

//-----------------------------------------------------------------------------
//149 DATA TRANSFORMATION:MAP,FILTER,REDUCE
/*
//In js there are 3 important methods to perform data transformation, these are methods that we use to
//to create new arrays based on transforming data from other arrays

//MAP METHOD:(CREATES A BRAND NEW ARRAY)
//this is another method that we can use to loop over arrays, map is actuallt similar to the forEach mmethod
//but the diff is that map creates a brand new array based on the original array, so essentially the map
//method takes an array, loops over that array and in each iteration it applies a callback fn that we specify
//in our code to the current array element
//3 1 4 2(original array)
//map
//current * 2
//6 2 8 4
//in this ex we say that each el should be multiplied by 2, and with this callback in place, the map method
//multiplies every single el by 2 and puts it into new array, we say that it maps the values of the original
//array to a new array

//FILTER METHOD:
//is used to filter for elements in the original array which satisfies a certain condition
//3 1 4 3 2
//filter
//current > 2
//3  4  3
//in this ex we are looking for elements greater than 2, so all the elements that pass the test that we specified
//will make into new filtered array or elements for which the condition is true will be included in the new
//array that the filter method returns, all other elements will get filtered out, so thye will not be included
//n the new array

//REDUCE METHOD:
//which we use to boil down all the elements of the original array into one single value, and an exaple of this
//can be to add all the elements of an array together but we can also do many other things, so for ex of
//adding up all the numbers in the array, we need to specify an operation like acc + current
//where we have accumulator variable then as the reduce method loops over the array it keeps adding the
//current el onto to the accumulator, until at the end of the loop we have to total sum of all the elements
//3 1 4 3 2
//reduce
//acc + current
//13
//there is no new array in this case, but only the reduced value
*/

//-----------------------------------------------------------------------------
//150 MAP METHOD:(ORIGINAL ARRAY NOT MUTATED)
/*
//is yet another way to loop over arrays but unlike forEach, the map method will gives us a brand new array
//and this new array will contain in each poistion, the result of applying the callback fn to the original
//array elements

//CONVERTING MOVEMENTS TO US DOLLARS:
const eurTousd = 1.1;
//multiple each el of the movements array by 1.1
const movementsUsd = movements.map(function (mov) {
  return mov * eurTousd;
});
console.log(movements);
console.log(movementsUsd);
//original movements array not mutated

//WE CAN USE ARROW FN TO MAKE OUR CODE SIMPLER
const movementUsd = movements.map(mov => mov * eurTousd);
//USING FOR OF LOOP
const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(mov * eurTousd);
}
console.log(movementsUsdFor);

//MAP METHOD ACCESS TO 3 PARAMETERS:
const movementsDescription = movements.map(
  (mov, i) =>
    `movements ${i + 1}: you ${mov > 0 ? 'deposit' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescription);
//(8) ['movements 1: you deposited 200', 'movements 2: you deposited 450',
//'movements 3: you withdrew 400', 'movements 4: you deposited 3000', 'movements 5: you withdrew 650',
//'movements 6: you withdrew 130', 'movements 7: you deposited 70', 'movements 8: you deposited 1300']
*/

//-----------------------------------------------------------------------------
//151 COMPUTING USERNAMES:
/*
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
//const user = 'Steven Thomas Williams'; //username stw
createUserNames(accounts);
console.log(accounts);

//loop over the array and take the 1st letter in each iteration
*/

//-----------------------------------------------------------------------------
//152 THE FILTER METHOD:
/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements); //(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits); //(5) [200, 450, 3000, 70, 1300]

const withdrawal = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawal); //(3) [-400, -650, -130]
*/

//-----------------------------------------------------------------------------
//153 THE REDUCE METHOD:
/*
//the accumulator is the 1st paramter, reduce method requires callback as the 1st
//argument and second one is the initail value of the accumulator
// console.log(movements); //(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
// const balance = movements.reduce(function (acc, mov) {
//   return acc + mov;
// }, 0);
// console.log(balance); //3840

// const balance = movements.reduce((acc, mov) => acc + mov, 0);
// console.log(balance); //3840

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;

// console.log(balance2);

//CLACULATING THE BALANCE OF THE MOBVEMNTS ARRAY AND PRINT IT ON THE APP
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

//GETTING THE MAXIMUM VALUE OF THE MOVEMENT ARRAY
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);//3000
*/

//-----------------------------------------------------------------------------
//154 CODING CHALLANGE:

//-----------------------------------------------------------------------------
//155 THE MAGIC OF CHAINING METHODS:
/*
//taking all the deposits from movements and converting them from eur to dollars and finally add them all up
//so we can know that how much is deposited in account in US dollars
const eurTousd = 1.1;
//PIPELINE
const totalDeposit = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr); //(5) [200, 450, 3000, 70, 1300]
    return mov * eurTousd;
  })

  //.map(mov => mov * eurTousd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposit); //5522.000000000001

//WE CANNOT CHAIN METHOD AFTER REDUCE AS IT PRODUCES A VALUE NOT A NEW ARRAY, WE CAN ONLY CHIAN METHOD
//AFTER ONE IF THE 1ST ONE RETURNS AN ARRAY

//3(CALC DISPLAY SUMMARY)
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * 1.2) / 100)
    .filter((mov, i, arr) => {
      return mov >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}`;
};
calcDisplaySummary(account1.movements);
*/

//-----------------------------------------------------------------------------
//156 CODING CHALLANGE 3:

//-----------------------------------------------------------------------------
//157 THE FIND METHOD:
/*
//FIND:
//we can use find method to retrieve one element of an array based on condition, find method also accepts
//condition and also accepts a callback fn, which will then be called as the method loops over the array
//just like a filtyer method the find meyhod also need a callback fn that returns a boolean, unilike the filter
//method the find method will actually not return a new array but it only return the 1st element in the array
//that satisfies the condition, so the 1st el in the array for which this operation is true
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements); //(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(firstWithdrawal); //-400

//DIFFERENCES BETWEEN FILTER AND FIND:
//filter returns all the el's that match the condition while the find only returns the 1st one,
//filter method returns a new array while find only returns the el itself

console.log(accounts);
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account); //{owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}

//the goal of find method is to exactly find one el
*/

//-----------------------------------------------------------------------------
//158 IMPLEMENTING LOGIN

//-----------------------------------------------------------------------------
//159 IMPLEMENTING TRANSFERS

//-----------------------------------------------------------------------------
//160 THE FINDINDEX METHOD:
//this method works almost same as find but as the name says that, findIndex returns the index of the found
//el and not the el itself

//-----------------------------------------------------------------------------
//161 SOME AND EVERY METHOD:
/*
console.log(movements);

//INCLUDES: we use includes to test if an array includes a certain value, however we can only test for a
//equality, includes here returns true if any value in the array equal to -130, this is essentailly for
//testing fro equality, but what if we want to test for a condition instead

//checks for equality
console.log(movements.includes(-130)); //true

//we would like to know if there has been any deposits on this account, so in other words we want to know
//if there is any +ve movement in the array

//CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); //true
//here we can sopecify a cnodition

console.log(movements.some(mov => mov === -130)); //true
//SOME: if there is any value for which the condition is true, then some method will return true

//EVERY METHOD:
//every is similar to some, but the diff b/w them is that every only returns true if all of the elements
//in the array satiffies the condtion, if every el passes the test in our callback fn only then the every
//method returns true
console.log(movements.every(mov => mov > 0)); //false
console.log(account4.movements.every(mov => mov > 0)); //true

//separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); //true
console.log(movements.every(deposit)); //false
console.log(movements.filter(deposit)); //(5) [200, 450, 3000, 70, 1300]
*/

//-----------------------------------------------------------------------------
//162 FLAT AND FLATMAP:
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
//FLAT METHOD:
//removes nested arrays, and falttened the array, flat method only goes one level deep, when falttening the
//array
//what if we want to take all the elements separate and put all of them together in just one big array
//which contains all the numbers from 1-8
console.log(arr.flat()); //(8) [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(1)); //(6) [Array(2), 3, 4, Array(2), 7, 8]
//this still contains the inner arrays flat method only goes one level deep, when falttening the
//array, we can fix that by using the depth argument, right now flatteing is working with one level depth
//and so if we run it with 1, which is the default and we get //(6) [Array(2), 3, 4, Array(2), 7, 8], but
//we can go 2 level deep
console.log(arrDeep.flat(2)); //(8) [1, 2, 3, 4, 5, 6, 7, 8]

//lets say that the bank itself wants to calculate the overall bal of all the movements of all the accounts
//1st we have all these accounts stored in arrays, and these arrays are inside the objects in the accounts
//array, 1st thing is we have to take them and put it all in one array
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements); //(4) [Array(8), Array(8), Array(8), Array(5)]
//we have a nested structure
const allMovements = accountMovements.flat();
console.log(allMovements);
//(29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

// const overallBal = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBal); //17840

//FLAT METHOD:
const overallBal = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBal); //17840

//here we 1st map and the flat that result

//FLATMAP METHOD: essentially combines the map and flat methods into just one method
//FLATMAP:
const overallBal2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBal2); //17840
//flatmap goes only one level deep and we cannot change it
*/

//-----------------------------------------------------------------------------
//163 SORTING ARRAYS:
/*
//SORT METHOD: (MUTATES THE ORIGINAL ARRAY)
//SORTING WITH STRINGS
const owners = ['jonas', 'jack', 'adam', 'martha'];
console.log(owners.sort()); //4) ['adam', 'jack', 'jonas', 'martha']
//now we get an array with nicely sorted alphabatically
console.log(owners); //(4) ['adam', 'jack', 'jonas', 'martha']

//SORTING WITH NUMBERS:
console.log(movements); //(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
//console.log(movements.sort()); //(8) [-130, -400, -650, 1300, 200, 3000, 450, 70]
//numbers are not at all ordered in any way, because sort method does the sorting based on strings, so
//basically it converts everthing into strings and then it does sorting, now if we look the result as they
//are strings then the result actually makes sense, so - here always comes 1st then which starts with 1,4,6

//we can fix this by passing in a compare callback fn into the sort method, and this callback fn is called
//with 2 arguments, and the 2 parameters here are the current value and the next value, if we imagine a
//sort method looping over the array, however inorder to understand how the compare fn works, lets just think
//a and b as consecutive numbers in an array
//SORTING IN ASECNDING ORDER(SMALL TO BIG)
//return < 0 a,b(keep order)
//return > 0 b,a(switch order)
//ASCENDING
movements.sort((a, b) => a - b);
console.log(movements); //(8) [-650, -400, -130, 70, 200, 450, 1300, 3000]
//DESCENDING
movements.sort((a, b) => b - a);
console.log(movements); //(8) [3000, 1300, 450, 200, 70, -130, -400, -650]

//(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
//comparing 450 and -400, in our callback fn if we return < 0 then the value a,will be sorted before value b
//and opposite if we return a +ve value, then a will be put before b

//if we want to sort 450 and -400 in ascending order, then we need to switch them, so we want b and then a
//so therfore we need to return something that is greater than 0
*/

//-----------------------------------------------------------------------------
//164 MORE WAYS OF CREATING AND FILLING ARRAYS:
/*
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
//we created arrays as above, in these case we already have all data, and so then we could then manually create
//these arrays as we have data, however, we can also generate arrays programmatically, so without having
//to define all the items manually, we can do this by array constructor fn and then pass in only one argument
//we think that this gonna create an array with only one el with 7

//empty arrays + fill method
const x = new Array(7);
console.log(x); //(7) [empty × 7]
//it creates a new array with 7 empty elements, and it simply contains nothing
//whenever we only pass in one argument into array fn it creates a new empty argument with that length

//there is one method we can call on this empty array and that is fill
//FILL(MUTATE THE ARRAY)
//we can fill the entire array with one value that is specified
//x.fill(7);
console.log(x); //(7) [7, 7, 7, 7, 7, 7, 7]
//this is similar to slice method, besides the value we want to fill the array with we can also specify
//where we want it to start to fill, let say only with index 3, and so we can specify the begin parameter
//and then it only starts at index 3
// x.fill(1, 3);
// console.log(x); //(7) [empty × 3, 1, 1, 1, 1]
//it will fill untill the end unless we specify the end parameter, just like slice
x.fill(1, 3, 5);
console.log(x); //(7) [empty × 3, 1, 1, empty × 2] it will not include the end parameter

//we can also use the fill method on other arrays, so it does not have to be empty
console.log(arr1); //(7) [1, 2, 3, 4, 5, 6, 7]
arr1.fill(23, 4, 6);
console.log(arr1); //(7) [1, 2, 3, 4, 23, 23, 7]s

//ARRAY.FROM METHOD:
//what if we want to recreate the arr1 programatically, for that we use Array.From()
const y = Array.from({ length: 7 }, () => 1);
console.log(y); //(7) [1, 1, 1, 1, 1, 1, 1]
//array here is a fn and in that fn we call the from(), we can pass in an obj with length prop, and the 2nd
//fn is tha mapping fn, so it is exactly like the callback fn that we pass into the map method

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); //(7) [1, 2, 3, 4, 5, 6, 7]

//we could create an array with 100 random dice rolls

//ARRAY.FROM USES:
//Array.from() is initially introduce in js in order to create arrays from array like structures so-called
//iterables, so things like strings, maps,sets they are all iterables in js, and so they can be converted
//to real arrays using Array.from, we can create arrays from other things

//another ex of array like structure is the result of using querySelectorAll(), querySelectorAll() returns
//something called a nodelist which is somethnig like an array which contains all the selected elements
//but it's not a real array, so it does not have methods like map(), but its not a real array, and so it
//doesnt have most of the array methods like map() or reduce(), so if we actually wanted to use a real
//array method like that on a nodelist we would 1st need to convert the nodelist into an array, and for that
//Array.from() is perfect

//lets say we do not have the movements of our application here stored in an array, lets pretend we only
//have the these values, so all these movements only stored here in the interface but we do not have them
//somewhere in our code, so we dont have an array contains these values, but now we want to calculate
//their sum, and so therfore we need to somehow get them 1st from the user interface and then do the calculation
//based on that, so lets create a var and array.from() then the el we want to convert into AN ARRAY
// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// //we only get 2 elements here
// console.log(movementsUI);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI); //(8) [1300, 70, -130, -650, 3000, -400, 450, 200]
  //8) [div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value]

  //there is another way of converting nodelist into an array
  //const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  //but then we have to do mapping separately
});
*/

//-----------------------------------------------------------------------------
//165:SUMMARY: WHICH ARRAY METHODTO USE?
//1) TO MUTATE THE ORIGINAL ARRAY

//ADDING TO ORIGINAL ARRAY
//.push(add elements at the end)
//.unshift(add elements at the start)

//REMOVING FROM ORIGINAL
//.pop(remove elements at the end of an array)
//.shift(at start)
//.splice(remove any elements)

//OTHERS CHANGIN ORIGINAL ARRAY
//.reverse
//.sort
//.fill

//------------------------------------

//2)DO WE WANT A NEW ARRAY:
//COMPUTING ORIGINAL ARRAY
//.map(cal one array from original)

//FILTERED USING CONDITION
//.filter()

//PORTION OF ORIGINAL:
//.slice(taking slice of original array)

//ADDING ORIGINAL TO OTHER:
//.concat(we can also concatenate 2 arrays and create a new array based on that)

//FLATTENING THE ORIGINAL:
//.flat(you can flatten the original array)
//.flatMap

//------------------------------------
//3)DO I WANT ARRAYINDEX:
//BASED ON VALUE:
//.indexOf

//BASED ON CONDITION:
//.findIndex: can search for el in an array based on the test condition that we provide in the callback

//------------------------------------
//4)DO I WANT TO RETREIVE AN ENTIRE ARRAY ELEMENT
//BASED ON CONDITION:
//.find: if we actually need the array el itself we use find

//------------------------------------
//5)OR DO I WANT TO KNOW IF AN ARRAY INCLUDES A CERTAIN ELEMENT
//BASED ON VALUE:
//.includes: we can simply test if an array contains a single value
//BASED ON CONDITION:
//.some: will return if atleast one of the elements in an array, satisfies the condition
//.every: only return true if all the elements in an array satisfies the condition

//------------------------------------
//6)OR I JUST WANT TO GET A NEW STRING
//BASED ON A SEPARATOR
//.join

//------------------------------------
//7)TO TRANSFORM THE ARRAY TO A NEW VALUE,
//BASED ON ACCUMULATOR
//.reduce

//8)TO LOOP OVER THE ARRAY:
//.forEach: to just loop over an array without producing any value we use forEach

//-----------------------------------------------------------------------------
//166:ARRAY METHODS PRACTICE:
/*
//1)To calculate how much has been deposited in total in the bank, so in all accounts accross the bank?
//whenever we want a new array with the same length as the previous one we use map,
//to get all of the values out of the arrays and into the main arrays, how can we basically remove
//all the values into the parent array, we can use flatmethod
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum); //25180

//2)Want to count how many deposits there have been in the bank with atleast $1,000
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .filter(mov => mov >= 1000).length; //5 deposits
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

//PREFIXED ++ OPERATOR
let a = 10;
console.log(a++); //10

//the ++ operator does actually increment a value, but it still returns the prev value, so we login a again
console.log(a); //11

//we can fix this by using so-called prefixed ++ operator
console.log(++a); //12

//3)Create an ibj which contains the sum of deposits and of the withdrawals, we want to cal these 2 sums
//all in one go

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals); //{deposits: 25180, withdrawals: -7340}

//4)create a simply fn to convert any string to title case, title case means all the words in a sentence
//are capitalized except for some of them
//this is a nice title -> This Is a Nice Title
//then we need to capitalize each word individually, we need an array, NOW WE WANT TO GO THROUGH THIS ARRAY
//and capitalize words that is not in the exception array
const convertTileCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};
console.log(convertTileCase('this is a nice title'));
console.log(convertTileCase('this is a LONG title but not too long'));
console.log(convertTileCase('and here is another title with an EXAMPLE'));
*/

//----------SECTION 12-----------
//-----------------------------------------------------------------------------
//170 CONVERTING AND CHECKING NUMBERS:
/*
//HOW NUMBERS WORK IN JS, HOW TO CONVERT VALUES TO NUMBERS AND ALSO HOW TO CHECK IF CERTAIN VALUES ARE NUMBERS
//OR NOT

//in js all numers are represented internally as a floating point numbers, so basically, always as decimals
//no matter if we actually write them as integers or decimals
console.log(23 === 23.0); //true

//also numers are represented internally in a 64 base 2 format, so that means numbers always stored in a binary
//format so basically they're only composed of 0's and 1's, now in this binary form, it is very hard to represent
//some fractions that are very easy to represent in the base 10 system that we are used to, so base 10
//is basically he numbers from 0 - 9

//base 10 - 0 to 0 - 1/10 = 0.1, but 3/10 = 3.3333
//binary base 2 - 0 and 1
//there are certain numbers that are very difficult to represent in base 2
console.log(0.1 + 0.2); //0.30000000000000004
//but js has simply no better way of representing this number, so in base 10 1 / 10 is simply 0.1, but with
//3/10 = 3.333 same thing happens with binary, so we get basically an infinite fraction, and that end result
//is weired, now in some cases js does some rounding behind the scenes to try its best to hide thi problems
//but some operations such as console.log(0.1 + 0.2); this one simply cannot mask the fact that behind the scenes
//they cannot represent certain fractions

console.log(0.1 + 0.2 === 0.3); //false

//we know how to convert a string to number, but their is also an easier way, which is simply +'23' the string

//STRINGS TO NUMBERS
console.log(Number('23')); //23 number
console.log(+'23', typeof +'23'); //23 number

//this works because when js sees the + operator it will do type coercion, so it will automatically converts
//all the operands to numbers

//PARSING WITH INTEGERS:
//we can also do something called parsing, so we can parse a number from a string
//we can pass a string that even includes some symbols, and js will then automatically try to figure out the
//number that is in the string, inorder to makes this work the string has to starts with the number
console.log(Number.parseInt('30px')); //30 number
console.log(Number.parseInt('e30')); //NaN
//parseInt actually accepts a 2nd argument which is called radix, and the radix is the base of the numeral
//system, so here console.log(Number.parseInt('30px')); we are simply using base 10 numbers so numbers
//from 0-9, and most of the time we are doing that and so we should always pass in the number 10, this can
//avoid some bugs
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e30', 10));

//PARSING WITH FLOAT:(TO READ A VALUE FROM A STRING)
console.log(Number.parseFloat(' 2.5rem ')); //2.5
//it will reads the decimal ppint from the string
console.log(Number.parseInt(' 2.5rem')); //2

//these two fn's parseInt and parseFloat are global functions, so we would not have to call them on numbers
console.log(parseInt(' 2.5rem')); //2
console.log(parseFloat(' 2.5rem ')); //2.5
//this alos works

//Number here provides something called namespace, so a namespace fro all these diff functions like parseInt
//parseFloat

//another fn of number namespace
//ISNAN:(isNaN):(CHECK IF VALUE IS NOT A NUMBER)
//we can use this one to basically check if any value is a number
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20PX')); //true
console.log(Number.isNaN(23 / 0)); //false

//there is a better method called(to check if something is a number or not)
//ISAFINITE(isFinite)(CHECKING IF A VALUE IS A NUMBER)
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20PX')); //false
console.log(Number.isFinite(23 / 0)); //false

//CHECK IF A VALUE IS AN INTEGER
//ISINTEGER(isInteger):
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false
*/

//171 MATH AND ROUNDING:
/*
//like many other fn's square root is a part of the math namespace
console.log(Math.sqrt(25)); //5
//same could be acheived with exponentiation operation
//and 2 here is a square root
//5
console.log(8 ** (1 / 3)); //2

//GETTING A MAX VALUE FROM A COUPLE OF VALUES(does not do type coercion)
console.log(Math.max(23, 8, 19, -2)); //23
//this max fn here does a type coersion
console.log(Math.max(5, 18, '23', 11, 2)); //23
//but it does not parsing
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN

//GETTING A MIN VALUE FROM A COUPLE OF VALUES
console.log(Math.min(5, 18, 23, 11, 2)); //2

//besides a couple fo methods there are also constant on the math object or on the math namespace
//if we want to cal the radius of the circle with 10px
console.log(Math.PI); //3.141592653589793
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793

//anothe fn in math object is random
console.log(Math.trunc(Math.random() * 6) + 1); //this will give numbers from 0 and 1 and multiply it with 6, then we remove the
//decimal part bu doing Math.trunc, then the highest umber could be 5, and so we simply add + 1

//GENERATING RANDOM INTEGERS B/W 2 VALUES
//RANDOMINT(randomInt)
//we can use this to generate random integers between 2 values
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
//Math.trunc(Math.random()) gives b/w 0 and 1 now if we do (max - min) => then we get values b/w
//0 - (max - min), now if win del min on both => min -  (max - min) + min => min to max value

//console.log(randomInt(10, 20));

//
//ROUNDING INTEGERS:(these also do type coercions)
//MATH.TRUNC(Math.trunc()): is to simply remove the decimal part
console.log(Math.trunc(23.3)); //23

//MATH.ROUND(Math.round()):will always round to the nearest integer
console.log(Math.trunc(23.3)); //23
console.log(Math.round(23.5)); //24

//MATH.CEIL(Math.ceil()): this will basically round up
console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.5)); //24
console.log(Math.ceil(23.1)); //24

//MATH.FLOOR(Math.floor()): this will basically round down
console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.5)); //23
console.log(Math.floor('23.9')); //23

//we can think that floor and trunc are very similar, they do same when they are dealing with +ve numbers
//FLOOR AND TRUNC CUT OFF THE DECIMAL PARTS WHEN WE ARE DEALING WITH +VE NUMBERS

//FLOOR AND TRUNC FOR -VE NUMBERS:
console.log(Math.trunc(-23.3)); //-23 it simply truncated as before
console.log(Math.floor(-23.3)); //-24 fllor now round to -24 because wuth -ve numbers rounding work sother way
//round fllor is little bit better than trunc, it works on all situations no matter we're dealing with
//+ve or -ve numbers

//ROUNDING FLOATING POINT NUMBERS OR DECIMALS:
//it is different for decimals in decimals we specify numbers in () and on that number we call a method
//toFixed
console.log((2.7).toFixed(0)); //3
//with 0 it is converted to 3, but this 3 is actually a string, so toFixed() always returns a string and
//not a number
console.log((2.7).toFixed(3)); //2.700  and add 0's until it has exactly 3 decimal point
console.log(+(2.345).toFixed(2)); //2.35 to conert this to number we simply add + sign

//rounding the loan amount in the app
//lets use the fixed fn to make our numbers look nice, by adding 2 decimal point
*/

//-----------------------------------------------------------------------------
//172 THE REMAINDER OPERATOR:
/*
//remainder operator has some special use cases,
//REMAINDER OPERATOR: simply return the remainder of a division
console.log(5 % 2); //1
console.log(5 / 2); //2.5, but if we took only integer part, so only 2 then the result will be 2, so if we
//did the division only until the integer part
//5 = 2 * 2 + 1, so 1 is the remainder
console.log(8 % 3); // 3 * 2 =6 + 2 //2 is remainer
console.log(8 / 3); //2.6666666666666665

//TO CHECK IF A CERTAIN NUMBER IS EVEN OR ODD:
//WHEN IS A NUMBER EVEN? IT IS EVEN IF ITS DIVISIBLE BY 2, MEANS REMAINER IS 0
console.log(6 % 2); //0
console.log(6 / 2); //3(is an integer number)

console.log(7 % 2); //1
console.log(7 / 2); //3.5

const isEven = n => n % 2 === 0;
console.log(isEven(8)); //true
console.log(isEven(23)); //false
console.log(isEven(514)); //true

//we can check if any number is divisible by any other number, whenever the result of remainer is 0, then
//that means the 1st number is completely divisible by 2nd one

//SELECTING ALL ELEMENTS FROM MOVEMENTS ROW
labelBalance.addEventListener('click', function () {
  [
    document.querySelectorAll('.movements__row').forEach(function (row, i) {
      if (i % 2 === 0) row.style.backgroundColor = 'orangered';
      if (i % 3 === 0) row.style.backgroundColor = 'blue';
    }),
  ];
});
*/

//-----------------------------------------------------------------------------
//173 THE NUMERIC SEPARATORS:
/*
//we can use numeric separators to format numbers in a way that is easier for us, or for other developers to
//read

//lets say we want to represent a really large number, for exapmle the diameter of our solar sys
//usually we use a thousand separator like comma 287,460,000,000 now its easy to see and read
const diameter = 287_460_000_000; //here we set to thousands
//at looking this number it is diffcult to read

//same thing we can do in js as well using numeric separators, numeric separators are simply underscores
//that we can place any where that we want in our numbers
console.log(diameter); //287460000000 the engine basically ignores the _
const priceCents = 345_99; //here we set to cents
console.log(priceCents); //34599

const transferFee = 15_00; //here it looks like 15$ and 0 cents
const transferFee1 = 1_500; //it looks like 1,500

//WE CAN ONLY PLACE UNDERCSORES B/W NUMBERS, we cannot place 2 in a row
//const PI = 3._1415;
//console.log(PI); //we get an error, as this is not allowed

//when we try to convert strings that contains _, to a number that will not work as expected
console.log(Number('230_00')); //NaN

//if we need to store a number in a string, or if you get a number as a string from an api, you should not
//use underscores, sam eis true for parseInt fn
console.log(parseInt('2300_00')); //230 only the part that is before _
*/

//-----------------------------------------------------------------------------
//174 WORKING WITH BIGINT:
/*
//BIGINT: is a special type of integer that was introduced in 2020, we know that number are represented
//internally as 64 bits that means there are  64 1's or 0's to represent any given number

//now of these 64 bits, only 53 are used to actually store the digits themselves, the rest are for storing
//the position of the decimal point and the sign

//now if they are only 53 bits to store a number, that means there is limit of how big numbers can be and
//we can calculate that number
console.log(2 ** 53 - 1); //9007199254740991 this is essentailly the biggest number that js can safely represent
//2 because we are working with base 2 which is only 0's and 1's and -1 beacuse ot start from 0

//WE CAN ALSO GET THE MAX SAFE INTEGER VALUE AS IT IS SAVED IN NUMBER NAMESPACE
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

//this might be prblm for us because we might really need, really big numbers than this number here, for ex
//for database id's or when interacting with real 60 bit numbers

//we might for ex from some api, get a number larger than this, then we have no way of storing that in js
//now starting from 2020 a new primitive was added, which is called BigInt,

//BIGINT: big integer, it can be used to store numbers as large as we want, so no matter how big, if we add
//n to the end of the number then it represents bigInt
console.log(3546457567657865785787978978n); //3546457567657865785787978978n
//n here basically transforms a regular number, into a BigInt

//we can also create a BigInt using a fn
console.log(BigInt(3546457567657865785787978978)); //3546457567657865662913576960n gives us the same result
//while not really for some reason, because js will 1st have to still represent this number internally
//before it is transformed to BigInt

//OPERATIONS WITH THESE NUMBERS(MATH OPERATIONS DOES NOT WORKS WITH BIGINT)
console.log(10000n + 10000n); //20000n
//we cant mix BigInt with regular numbers
const huge = 455657567678678797978n;
const num = 23;
console.log(huge * BigInt(num));

//2 EXCPETIONS OF BIGINT
//comparision operator and + operator while working wioth strings
//we can still do
console.log(20n > 15); //true
console.log(23n === 23); //false
console.log(huge + ' a num is very big'); //455657567678678797978 a num is very big

//BIGINT WITH DIVISIONS:(with BigInt it will simply return the closest BigInt)
console.log(10n / 3n); //3n
console.log(10 / 3); //3.3333333333333335
*/
/*
//----------SECTION 19-----------=====


//install git in git-scm
//GIT: VERSION CONTROL: it is a software that runs on our computer and you can basically use GIT to save
snapshots of our code over time, and then if you need you can go back in time, like to older versions of
//your code, if you need to recover some mistake

//go back to our code and start a so-called repository, make sure in your terminal you are in the project folder
ravisankars-mbp:complete-javascript-course-master ravisankaruppu$ git init(enter)
//we will get 
Initialized empty Git repository in /Users/ravisankaruppu/madhuri/my_new_works/complete-javascript-course-master/.git/
REPOSITORY:is the fundamental concept of GIT, right now we created a local repository, which will eventually
//contain all of our code, right now all the code is marked in green, right now none of the files are now
//in our repository, bit for now we will not add them

//GITHUB:we need github or any other service similar to github inorder to store our local repository in
//the cloud, so eventually we will have some code here in the repository, and then we will want to save
//the repository online so for example that we can switch b/w computers or that we can make sure that our
//code never gets lost, and so for that we need an account on some service, like github

//TO CONNECT LOCAL GIT INSTALLATION WITH GIT HUB ACCOUNT
//(connecting local repos with git hub)
//GIT: is basically a command line interface from which we can use the software
//we use global because it will then work in all the reposts you ever create on your computer
ravisankars-mbp:complete-javascript-course-master ravisankaruppu$ git config --global user.name MadhuriMuppana
ravisankars-mbp:complete-javascript-course-master ravisankaruppu$ git config --global user.email muppana.madhuri@gmail.com


//before we can do anythin with git we should have gitignore file, inside of this file we can put all the
//folders and files which we want git to ignore, or in other words, folders and files that we do not want
//to get into our repository and node modules is a perfect example of it, because we can always get this 
//code back from NPM, it is not part of our original source code, and so therefore we dont need it in git
//repository, same is true for dist folder, this folder only contains code that was built from our source
//code,usually in repository we only want like the original source code, and evertything that is necessary
//in order to basically compile our final project, same with , .parcel-cache, if we are using mac then we
//should add .DS_Store

//run a command git status(this shows all of the files here are untracked files), and we can also see that we are
//in branch master, and that are no commits yet, and so now we need to track them which in terms of git
//to add them to the so-called staging area, we can also see them in vs code (u) that files are untracked now

//ADDING FILES TO STAGING AREA
git add -A(which stands for all the files), now we could also add files manually, so these files are now the
//part of repository, now in code it show A(means added), so these files are now being tracked, now do some
chane in one of the file, now we can see that the file is modified, and also immediately here on side bar
//vs code tells us that something has changed, green here means that something is added and when we click that
//we can actually see that change, now if we see get status again, we will see that all the files are
//ready to be comitted, so they are being tracked, and there is the modified file, and so now in order to
//commit all these files to our git repository, i need to run git add -A again
git status
git add -A
//now we can see that it is back to just being added and the green bar is gone, now we are ready to finally
//commit these files
//COMMIT: COMMITTING FILES means that we really save the modifications of all the files to the repository
//so adding the files, like this (git add -A) is basically just a pre step before the commit, so a commit
//is gonna be like a snapshot of your code at a certain point in time, so each time before you make some change
//significant changes to your codebase, you should always commit. and so the, if necessary, you can go
//back to past commits and delete any modifications that you did that were may be wrong, lets now commit
//what we already have here(-m message) and specify a string which is commit msg, usually the 1st commit 
//is always gonna me called initial commit
git commit -m 'Initial commit'
//now they are all committed, and now we can see all files in normal color again, now if we again take a
//look at git status, then we can see there is nothing to commit and working tree is clean

//whenever we initialize a new GIT repository, usually i immediately add all the files, so i do git in it
//then after that immeiately run  git add -A this, so git add all the files, and then immediately after that
i commit every thing as the initial commit

//now lets say we do some modifications here, in multiple files, but we actually introduce some kind of bug

//so we added some bug in 2 files, this is just to say we ontroduce some bugs, so if you wanted to ga back
//on all of these files to the previos commit, then we could simply write
git reset --hard HEAD, now if we see those files the bugs were gone, this is the easiest way to going back in
//time, basically, to the previous commit, but now lets say that you actually had already comitted, let say
we had an alert which says hacked, and this is another bug, now these 2 files are modified and now if you
//want to commit these changes, so you think you had added a great feature, but actually you just introduce
//a bug, which allows users to get hacked, but anyway you dont know that yet, and so you added all the files
//to the staging area(git add -A) and then you do git commit with mesaage of new feature
git commit -m 'new feature', and our code is now commited, now lets say you keep working on the cde, but eventually
you notice that you have these bugs here which allows users to get hacked, and so you want to basically
//now delete the last commit that you did, so you want to go back to the previous commit, so to do that 
you need to take a look at that previous commit and you can do git log for that so here you have basically
a log of all the commits that you did, so the new feature is the last one
//commit 743766a171b21149428ed648e5003112566654d0 (HEAD -> master) and it has basically this id and this
//ahs currently the head,and so that's why previously we could reset using the head keyword, but now you want
//to go back to this commit, now that hacked log is gone from here
git reset --hard e5d0f8ae87aa14165d5d12b80b08cfd6f9938325(HEAD is now at e5d0f8a Initial commit)
//However moving b/w commits like this is a littel bit dangerous, and so instead when we plan on doing lot
//of changes, usually we simply create a new branch 
git branch (this will simply list all the branches that we currently have) right now we currently have 
//master branch and the star here means that we are currently in that branch, and now to close this we write
:q

//LETS CREATE A NEW BRANCH: that new branch is then basically going to the copy of the current master branch
in which we can develop new codes and adding new features, but without effecting the codes that is in the
//master branch, so it's basically a parallel tracking, in which we can develop new code, but without effecting
//the original code that we had before, and which we knew was already working, so this is a great way of
//preventing bugs in our main code base, so we create a new branch, by writnig again git brnach and specify
//new branch name
git branch new-feature
////we created a new branch but we didnt switch to that new branch, to switch to that branch
git checkout new-feature
//now we switched to new branch
//add some modifications in the files, add this change to staging area git add -A
//we always have to add before committing changes now git commit -m 'new welcome fetaure', we just created
//a new feature, but this new feature is now in this new feature branch, so lets check that, now we have 2
//branches master and new-feature and this one is current one, once we are done with this new imaginary 
feature, lets switch nack to the master branch, so that we can then integrate these changes into our main code
//base, so which again, is in the master branch, so 
git checkout master, as we execute this now this code will go away, becuadse that is the way the code looked
like in our master branch, this proves that there are now really like 2 diff tracks with different versions of
code, so in the master branch, we have this code, and in the other branch, we have that modified code, but now
//we can merge these changes together, so when we are in the branch into which we want to add the new code
we can use git merge and name of the code which conatins the new code that we want to merge with current
//branch, so that is the new-feature branch, now we can see that the code is added, 
Fast-forward
 01-Fundamentals-Part-1/starter/script.js | 6 +++++-
 1 file changed, 3 insertions(+)
 //we can see that there are 6 modifications, 5 additions, so 5 lines were added, and one line is deleted
 //and now to just make sure that our working tree is still clean, so that we dont have to commit anything,
 //lets again watch git status, and w can see that there is nothing to commit, the working tree is clean
 and so the code we have in this branch, so in the master branch, is now the same as in the new-feature branch
 this is the great feature to build code, but without effecting our original code, which might break with
 changes that we are introducing, and so usually we never work in master branch, and simply add features 
 in a diff new branch and once we're done we merge these 2 branches, and then if there is some error, or 
 somethng that is not working, we can always go back to what it was before

*/

//---------------------------------------------------------------------------
//PUSHING CODE TO GITHUB:
/*
//(putting all our code in github), we are gonna push our code to a new remote branch
//so that we can then setup the continous integration feature, now here in github, let click on + btn and 
create a new repository, give the repository name, then make it private, then skip initailize repository
step then click on create repository

//https://github.com/MadhuriMuppana/complete-javascipt.git this is the url, basically of our git repository
but what matters here is that now there are 2 scenarios, there is a scenario that we dont have any
repository yet, i mean, a local one, but that's not the case, so we already have the repository that we have
been working, and so what we to do now is to push that existing repository to this online repository, so to
thi remote repository that we just created, so inorder to connect these 2 repositories, we need to copy this 
line of code and execute it in our local repository, 
git remote add origin https://github.com/MadhuriMuppana/complete-javascipt.git add this cmd
so what we did here, was to add the remote branch which is called origin and the url of this remote branch us
is called, so with we basically let our local repository know about this remote repository, and if we 
checkout our branches now then that origin branch might actually be there, we can now push the code to this
remote branch, which remember is called origin, and so the way we do that is by writing 
git push and then the name of the remote branch which is called origin and then the name of the branch 
that we want to push, so we want to push master branch
git push origin, now we get our repository in github, we successfully pushed our local repository into the
remote repository, now if we work on any other computer we could go ahead and take our code out of this
repository, right now w have only master branch, but if we really wanted to keep the other branch as well
in our remote repository then we can simply call this again
git push origin new-feature

//now lets add a read me file, which is common thing that all github repositories should have, so its basically
a file that appears down here with a description of the project

//ADDING README FILE
touch README.md, and now to add a title to any md file (md markdown), markdown is a special typing format
that we can use to write simple documents lets give the name
# Course Material and FAQ for my Complete JavaScript Course then empty line and then we can add some decription
text, and to apply this modification to the repository, we need to start by adding the new file
git add -A 
to the  staging area, then we need to commit it
git commit -m 'added readme'
git push origin master

//no if we wanted to know start working on the other computer, you could simply go to the github, repositories
//code, we can simply copy this url in ssh git@github.com:MadhuriMuppana/complete-javascipt.git, and
//do the opposite do the pull, we start with a new repository on github, then we give it a name, and then we 
actually add a readme here, and also a gitignore, then we create that repository, and then we pull that repo
onto our computer, ans so this then actually, utomatically connects the local repository with the remote one

*/

//-----------------------------------------------------------------------------
//136 IMMEDIATELY INVOKED FUNCTION EXPRESSION:
/*
//sometimes in js we need a fn that is only executed once, and then never again, so basically a fn that
//disappears right after it's called once, and this might not appear to make much sense right now, but we
//actually need this technique later, for ex with async/wait, so how could we do that

//we could simply create a fn and then only execute it once
const runOnce = function () {
  console.log("this will never run again");
};
runOnce();
//however we can actually run this fn again, at some other point in the code, if we want it to right, this
//is not what we want to do, we want to execute a fn immediately, and not even having to save it somewhere
//and so this is how we do that, so we simply right the fn expression itself, so without assigning to any
//variable, now if we try to run this we will get error for now, so it says fn staements require a fn name

(function () {
  console.log("this will never run again");
});
//however we can actually run this fn again, at some other point in the code, if we want it to right, this
//is not what we want to do, we want to execute a fn immediately, and not even having to save it somewhere
//and so this is how we do that, so we simply right the fn expression itself, so without assigning to any
//variable, now if we try to run this we will get error for now, so it says fn staements require a fn name

//IMMEDIATELY INVOKED FN EPRESSION
(function () {
  console.log("this will never run again");
})();
//however we can still trick js into thinking that this is just an expression, we do that by simply wrapping
//all of this into (), and so now we basically transformed the statement that we had before into an expression
//but also this fn did'nt execute yet, we never called it, so we know that this is here is a fn, and so we
//can then immediately call it, and so with this, we will get the text bock, this here is just the fn value
//so it's just a fn expression, and then immediately we call it, and so this is why this pattern here, is called
//the immediately invoked fn expression

//the same would also work for arrow functions
(() => console.log("this will also never run again"))();
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

*/

//
//
//
//-----------------------------------------------------------------------------
//CODING ASSIGNMENTS
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
--------------------------------------------------------------------------------



//
//
//
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



//---------------DATA STRUCTURES, MODERN OPERATORS AND STRINGS---------------
//Coding Challenge #1

We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
  'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored


const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
'Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',
],
[
'Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho',
'Gotze',
],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
'Hummels'],
date: 'Nov 9th, 2037',
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
},
};


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1);
//(11) ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski']
console.log(players2);
//(11) ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const [allPlayers] = [...players1, ...players2];
console.log(allPlayers);

const [players1Final] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');


//Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}

for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i}: ${el}`);
}
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
  console.log(average);
}

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${team}: ${odd}`);
}

Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
//script.js:1044 (4) ['⚽ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card']

gameEvents.delete(64);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'first' : 'second';
  console.log(`[${half} HALF] ${min}: ⚽ ${event}`);
}


Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const outputStr = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${outputStr.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

*/

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
*/

/*


//----------SECTION 11-----------=====
//WORKING WITH ARRAYS
//-----------------------------------------------------------------------------
//CODING CHALLANGE 1:
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets

Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaCorrected = dogsJulia.slice();
  juliaCorrected.splice(0, 1);
  juliaCorrected.splice(-2);
  console.log(juliaCorrected); //(2) [5, 2]

  const dogs = dogsJulia.concat(dogsKate);
  console.log(dogs); //(10) [3, 5, 2, 12, 7, 4, 1, 15, 8, 3]

  //("Dog number 1
  //is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
  dogs.forEach(function (dog, i) {
    if (dog <= 3) {
      console.log(`"Dog number ${i + 1} is an adult, and is ${dog} years old"`);
    } else {
      console.log(`"Dog number ${i + 1} is an still a puppy"`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAge); //(7) [36, 4, 32, 2, 76, 48, 28]
  const adultDogs = humanAge.filter(age => age >= 18);
  console.log(adultDogs); //(5) [36, 32, 76, 48, 28]
  // const calcAverageHumanAge =
  //   adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  const calcAverageHumanAge = adultDogs.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return calcAverageHumanAge;

  //for avg 2,3 (2 + 3) / 2 = 2.5
  //2,3 2/2 + 3/2 = 2.5
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2); //44 47.333333333333336


Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
const age1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(age1);

Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)

Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.

Test data:
const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] },
];

 */

/*
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date">3 days ago</div>
  <div class="movements__value">${mov}€</div>
</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//display balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;
};

//display summary
const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter((mov, i, arr) => {
      return mov >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

//computng username
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
console.log(accounts);

const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //displasy summary
  calcDisplaySummary(acc);
};

//event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and welcome message

    labelWelcome.textContent = `welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //update UI
    updateUI(currentAccount);
  }
});

//TRANSFER LOGIC
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  //the acc which we want to transfer
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  //if trasnfer add -ve mov to current acc and +ve mov for to receipent,
  //update ui
  //check if amount is +ve, check if current user has enough money
  //should not ttransfer it to own account
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
});

//REQUESTING LOAN LOGIC
//Our bank has a rule , which says it will only grants a loan if there is atleast one deposit with atleast
//10 % of the requested loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  //amount should be greater than 0, any deposit > 10% of request loan amount
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add a +ve mov to the current acc, and update ui
    currentAccount.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  //user name and pin should be equal to the current account
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //deleting the account, we are going to use splice method to delete the account
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    //delete account
    accounts.splice(index, 1);

    //hide ui
    containerApp.style.opacity = 0;
  }
  //clear fields
  inputClosePin.value = inputCloseUsername.value = '';
});

let sorting = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorting);
  sorting = !sorting;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
*/

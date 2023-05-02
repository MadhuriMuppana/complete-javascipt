'use strict';
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
/*
//suppose our code just finished compiling, the code now is ready for execution, what happens then is
//that a so-called global execution context is created for the top level code, a top-level code is basically
//code that is not inside any function, so again, in the beginning only the code that is outside of
//the functions will be executed. functions should only be excecuted when they are called

const name = 'jonas'; // the name declarion is clearly top-level code so it will be executed in global
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
*/

//-----------------------------------------------------------------------------
//92 SCOPE AND THE SCOPE CHAIN
/*
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
function first() {
  const b = 'hello';
  second();

  function second() {
    const c = 'hi';
    third();
  }
}

function third() {
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
*/
//-----------------------------------------------------------------------------
//93 SCOPING IN PRACTICE:
/*
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
*/

//-----------------------------------------------------------------------------
//94 VARIBALE ENVIRONMENT: HOISTING AND THE TDZ:
/*
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
*/

//-----------------------------------------------------------------------------
//95 HOISTING AND TDZ IN PRACTICE
/*
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

console.log(addDecl(2, 3)); //5
//we were able to call the function declaration before it was actually defined

//console.log(addExp(2,3)); //cannot access before initialization, becoz this fn here is a const variable too
//and it means it is in a tdz, we are simply assigning fn value to this variable
//console.log(addArrow(2,3));
//console.log(adddArr);
//console.log(adddExp(2,3)); //adddExp is not a function
//any variables declared with var will be hoisted and set to undefined, variabled declared with var
//is undefined, so if we try to call undefined we will get it is not a function

//FUNCTION DECLARATIONS
function addDecl(a, b) {
  return a + b;
}
//FUNCTION EXPRESSION
const addExp = function (a, b) {
  return a + b;
};
//if we declare it with var
var adddExp = function (a, b) {
  return a + b;
};

//ARROW FUNCIONS
var adddArr = (a, b) => a + b;
const addArrow = (a, b) => a + b;

//logic which will delete the shoppingCart  whenever the no of products is 0, we know that 0 is a falsy value
if (!numProducts) deleteShoppingCart();

//declare a var which contains the no of products
var numProducts = 10;

//fictional fn that deleteshpping cart
function deleteShoppingCart() {
  console.log('all products deleted');
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
console.log(x === window.x); //testing if x is actually a prop of the window //true
console.log(y === window.y); //false
console.log(z === window.z); //false

//variables declared with var will create a prop on the global window obj

//in window obj we will get a property of x = 1; and that's exactly the variable that we declared above
//using var however we cannot find y or z because they were declared with let or const, so variables
//decalred that way do not create prop's in the window obj
*/

//-----------------------------------------------------------------------------
//96 THE THIS KEYWORD:
/*
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

//-----------------------------------------------------------------------------
//97 THE THIS KEYWORD IN PRACTICE:
/*
//this keyword in practice:
//THIS KEYWORD OUTSIDE OF ANY FUNCTION:
//outside here is global scope
//console.log(this);//the this keyword in global scope will simply window object

//THIS INSIDE A REGULAR FUNCTION CALL
const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined
};
calAge(1994); //undefined, inside a regular fn call, the this keyword will be undefined, bcoz we are in strict
//mode, regular fn means a without a fn being attached to the obj, without having a owner

//THIS INSIDE AN ARROW FUNCTION:
const arrwThis = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //window
};
arrwThis(1992); //window obj
//the arrow function does not gets it own this keyword. instead it simply uses the lexical this keyword
//it uses the this keyword of its parent function or of its parent scope. in this case the parent scope
//is global scope i.e.., window

//THIS KEYWORD INSIDE THE METHOD:
const jonas = {
  year: 1991,
  calAge: function () {
    console.log(this); //jonas object
    console.log(2037 - this.year); //46
  },
};
jonas.calAge();

//when we have a method call the this keyword inside of a method will be the object that is calling
//the method, jonas here is the owner of the method

//the this keyword will point to the obj that is calling the method, that means the this keyword will not
//simply point at the obj in which we wrote the method, here we wrote a calcAge method inside of the jonas obj
//we might think that is the reason why the this keyword point to jonas, nut this is not true, the reason
//that the this keyword will point to jonas in this case bcoz jonas was the obj calling that method

const matilla = {
  year: 1991,
};

//remember the fn is just a value, so we can do this, we copied from one obj to another, this is called
//method borrowing,
matilla.calAge = jonas.calAge;
matilla.calAge(); //20 gives us the correct result, in this method call here to this keyword does now
//actually point to matilla, so the this keyword always points to the obj that is calling the method, so
//here we are calling the method on matilla, and therefore the this keyword points to matilla, which was
//the obj which called the method, even thought the method is written inside of the jonbas obj the this
//keyword still points to matilla if it is matilla who calls the method

const f = jonas.calAge; //copying the jonas object function into a new variable
console.log(f); //f here is a regular function so the this here is undefined
f(); //this keyword is undefined and we also get the error it cannot read year undefined, bcoz the this keyword
//here is undeined, so undefined.year ofcouirse not exist, this happens bcoz the fn here is just a regular
//fn call, it is not attached to any object, there is no owner of this fn, therfore it is just a regular fn call
*/

//-----------------------------------------------------------------------------
//98 REGULAR FUNCTIONS VS ARROW FUNCTIONS:
/*
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

//---------------------------------------------------------------------------
//99 PRIMITIVES VS OBJECTS(PRIMITIVE VS REFERENCE TYPES)
/*
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

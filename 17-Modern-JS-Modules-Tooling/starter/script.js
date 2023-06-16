//----------SECTION 17-----------=====
//-----------------------------------------------------------------------------
//268: SECTION INTRO

//-----------------------------------------------------------------------------
//269: SECTION ROADMAP

//-----------------------------------------------------------------------------
//270: AN OVERVIEW OF MODERN JAVASCRIPT DEVELOPMENT:
//we use to write all our code into big script or maybe muitiple scripts, bt today we divide our project into
//mulitple modules, and these modules can share data b/w them and make our code more organized and maintainable

//now one great thing abt modules is that we can also include 3rd party modules into our own code, and there are
//thosands of open source modules, which we also called packages, that developers share on the npm repository
//we can then use these pakages are free in our own code, all the packages are available through npm

//NPM: NODE PACKAGE MANAGER, becoz it was originally developed togetheer with node.js and 4node.js, npm has
//established itself as the go to repository for all kinds of packages in modern js development

//now inorder to actually download and use and share packages, we use the npm software installed on our compter
//and this is just a simple comand line interface that allows to do all thta

//so basically npm is both the repository in which the packages live and a program that we use on our computers
//to install and manage these packages

//lets say we are done writing our project code, so we divided into multiple modules, and we included some
//3rd part modules as well, and so now the developement step is complete, however usually that's not the end of
//the stiry, instead our project now needs to go throgh a build process, where one big final js bndle is built
//and that's the final file, which we will deploy to our web server for production, so basically it's the js
//file, that will be sent to browsers in production

//PRODCTION: meansthat the application is being used by real users n the real world

//a build process can be something eally complex bt we gonna keep it simple here and only inclde 2 steps
//STEPS INCLUDE IN BUILDING:

//STEP 1:
//the 1st step, we will bundle all our modules together into one big file, this is a pretty complex process whihc
//can eliminate unused code and compress our code as well, now this step is super imp for 2 big reasons
//1st older browsers dont support modules at all, and so code that's in a module could not be exected by any
//older browser

//2nd it's also better for performance to send less files to the browser, and it's also beneficial that bundling
//the step compresses or code, but anyway as a

//STEP 2:
//as the 2nd step we do somethng called transpiling nd polyfilling
//TRANSPILING AND POLYFILLING:which is to basically to convert all modern js syntax and features back to old ES5
//syntax so that even older browsers can understand or code without breaking, and this is usually done using
//a tool called BABEL

//these are the 2 steps of our bild process, and after these 2 steps we end up with thta final js bundle, ready
//to be deployed on a server for production, now ofcourse we dont perform these steps ourselves, instead we
//use a special tool to implement this build process for us

//the most common build tools available, are probably WEBPACK and PARCEL

//WEBPACK AND PARCEL:these are js bundlers, because well, as the name says that they take our raw code and transform
//it to js bndle

//WEBPACK is the most popular one,bt it can be really hard and confusing set it up, so that's becoz ther's a lot
//of stuff that we need to configure it manually inorder to make it work properly

//PARCEL on the other hand is a 0 configuration bundler, which simply works ot of the box and so in this bundler
// we dont have to write any set up code, which is really amazing

//these development tools are actually also available on NPM, so just like packages that we include in our code
//we will download and manage tools using NPM as well
//these tools inlcude the live-server that we have been using all along, the parcel bundler or babel to transpile
//code back to ES5

//-----------------------------------------------------------------------------
//271: AN OVERVIEW OF MODULES JAVASCRIPT:
//modules are a super important part of software development

//MODULE:
//-> a module is a reusable piece of code that encapsulates implementation details of a certain part of our
//project,

//-> module is usually a standalone file, when we think of a module we think of a separate file
//a modkle always contains some code, but it can also have imports and exports
//EXPORTS:we can export values out of a module, for ex some values or entire fn's
//and what ever we export from a module is called the public API, so this is just like classes where we can also
//expose public API for other codes to consume

//in the case of the modules this public API is actually consumed by importing values into a module, so just like
//we can export values in modules, we can usually also import values from other modules, and these

//other modules from which we import are then called dependencies of the importing module, becoz the code that
//is in the module that is importing cannot work without the code that it is importing from the external module

//we can write code without modules and actally e've been doing that up unitl this point, but that's becoz our
//applications have been very simple

//hiwever when the code base grows bigger and bigger there start to be many advantages of using modules

//ADVANTAGES OF MODULES
//1)COMPOSE SOFTWARE so we can think of modules as small building blks thta we
//can then put together in order to build really complex applications

//ex we can take a digital camera, you can see that this specific camera is basically made up of all these modules
//nd this is exactly how we can compose software using modules as well, another big advantage of these camera
//modules is that each of them can be developed in complete isolation so you can have one engineer working on
//lens, and another one on screen and even another one on the controller module, and the best part of this is that
//each engineer can actually work on their own module without even understanding  what the other engineers are
//doing and alos without understnading how the netire camera works itself, and so isolating componenets is another
//ge advanatage of using modules

//2)ISOLATING COMPONENETS:isoalating componenets means that each module can be developed
//in isolation without the developer having to think about the entire code base, he does'nt even need to
//understand all of it, which makes it really easy to collaborate on a larger team

//3)ABSTRACT CODE: we can use modules to implement low level code, then other
//modules , which dont really care about these low level details an import these abstractions and use them

//the screen module, does not care about the low level implementation details of the controiller module, it can
//simply import the controller, but without knowing how it works, and use it to control other parts of the camera

//4)ORGANIZED CODE BASE, becoz when we break up our code inot separate isolated and
//bstracted modules this will automatically organize our code and make it easier to understand, and so this alone
//is a huge benifit of modules

//5)RESUSE SAME CODE: in a project and even across multiple projects
//for ex if we use the module to implement a couple of mathematical fn's in a certain project and if we then
//need the same fn's in the next project all we nned to do is to copy that module to the new project, in our
//camera ex this company could now use the exact same lens or the exact same screen in diff camera models, all
//becoz they nicely abstracted these components into self contained reususable modules

//MODULES IN JAVASCRIPT:as of ES6 js has a native built-in module system, now we did have modules before ES6
//but we have to implement them ourselves or use external libraries

//ES6 modules are modules that are actually stored in files, and each file is one module, so there is exactly
//one module per file, but now we might be thinking well scripts are usually also files

//DIFFERENCE B/W ES6 MODULE AND SCRIPT:
//1)in modules all top level variables are scoped to the module, so basically variables are private to the modle
//by default, and the only way an outside module can access a value that's inside of a module is by exporting
//that value, if we dont export then no one from the outside can see the variable

//1)in scripts on other hand all top level variables are always global, this leads to problms like global namespace
//where multiple scripts try to declare varibles with the same name and then these variables collide, so private
//variables are the solution to the pblm and that is why ES6 modules implemented it like this

//-------------------
//2)ES6 modules are always executed in strict mode, so with modules there is no more need to manually declare
//strcit mode
//2)scripts on the other hand are executed in sloppy mode by default

//-------------
//the this keyword is always undefined at the top level
//in scripts the this keyword points to the window object

//----------
//3)in modules we can export and import values b/w them using this ES6 import and export syntax
//3) in reglar scripts importing and exporting values is just completely impossible

//IMPORTS AND EXPORTS ONLY CAN HAPPEN AT THE TOP LEVEL, outside of any fn or any if blk

//all imports are hoisted, so no matter where they are in the code, you're importing values, it's like the import
//statement will be moved to the top of the file, so in practice importing values is always the 1st thing happens
//in a module

//4)inorder to link a module to an HTML file,we need to use the script tag with the type attribute set to module
//instead of jst a plain script
//<script type = 'module'>

//5)and finally abt downloading the module files themselves, this always automatically happens in an asynchronous
//way, and this is true for a module loaded from HTML as well as for modules that are loaded by importing one
//module to another using the import syntax

//5)reglar scripts on other hand are downloaded by default in a blocking synchronos way, unless we use the aync
//or differ attributes on the script tag

//HOW MODULES ACTUALLY IMPORT OTHER MODULES
// import { rand } from './math.js';
// import { showDice } from './dom.js';
// const dice = rand(1, 6, 2);
// showDice(dice);

//here we are importing a value called rand from math.js module and showDic from dom.js, now as always, when a
//piece of code is executed, the 1st step is to parse the code, parsing basically means to just read the code,
//bt without executing it and this is the moment in which imports are hoisted and infact the whole process of
//importing modules happens before the code in the main module is actually executed, in this ex the index.js
//module imports the dom and math modules in a synchornos way, what that means is that only after all imported
//modules have been downloaded and executed, the main index.js module will finally be exected, now this is only
//possible becoz of top level imports and exports, thta's becoz if we only export and import values outside
//of any code that needs to be executed then the engine can know all the imports and exports during the parsing
//phase, so while the code is still being read before being executed

//now if we were allowed to import a module inside of a fn, then that fn would 1st have to be executed before
//the import code happened, and so in that case modules could not be imported in a synchronous way, so the
//importing module would have to be executed 1st, bt you might ask why do we actually want modules to be loaded
//in a synchronous way

//this is the easiest way in which we can do things like bundling and dead code elimination, so basically
//deleting code thta's actually not necessary

//but knowing all dependencies b/w modules before execution, bundlers like webpack and parcel can then join
//multiple modules together and eliminate that code, this is the reason why we can only import and export outside
//of any code thta needs to be executed

//so after the PARSING proces,has figured out which modules it needs to import, then these modules are actually
//downloaded from the server, downloading actally happens in an asynchronous way, it is only the importing
//operation itself thta happens synchronously, then after a module arrives , it's also parsed  and the modules
//export are linked to the imports in index.js

//for ex the marh module exports a fn called rand, and this export is then connected to the rand import in the
//index.js module, and this connection is actually a life connection, so exported values are not copied to imports
//instead, the import is basically just a reference to the exported value like a pointer so when the value changes
//in the exporting module then the same value also chnages in the importing module and this is quite important
//to understand, the code in the imported modules is executed, and with the process of importing modules is finished
//now it's time for the imported module to finally executed as well, so index.js in this ex

//-----------------------------------------------------------------------------
//272: EXPORTING AND IMPORTNG IN ES6 MODULES:

//simply import a module bt without mporting any value, lets start by creating a new module, as we careted with
//script.js
//nowe as we created a new module(script.js), we simply have to create a new file(shoppingCart.JS),
//this script.js will be the importing module and shoppingCart.js will be the exporting module

//we can import by using import key word and string with a location of the module so ./ current location
//import './'
//Uncaught SyntaxError: Cannot use import statement outside a module (at script.js:228:1)
//when we want to connect a module to the html file we actually need to specify the type attribute

//
//
//////////IMPORTING MODULE
// import './shoppingCart.js';
// console.log('importing module');
//exporting module
//importing module
//1st log is the exporting module, only then importing module is logged to the console, and this means thta infact
//this code in the shoppingCart.js is executed before an code in the importing module

//the code in this index.js module is parsed and before it is executed all the code in the modules that it imports
//is executed 1st, all the importing statements are hoisted to the top, we will write all the import statements
//at the top

//here we did'nt use the strit mode here, as all modules are executed in strict mode by default

// console.log('importing module');
// import './shoppingCart.js';

// import { addToCart } from './shoppingCart.js';
// console.log('importing module');

//now variables declared inside of a module, are actually scoped to this module, so basically inside a module
//the module itself is like the top-level scope, and so by default this means that all the top level variables
//are private inside of this variable, unlike traditional scripts which would put all of these variables in the
//global scope

//so we cannot do this

//console.log(shippingCost); //script.js:256 Uncaught ReferenceError: shippingCost is not defined

//the shippingCost and cart variable are scoped, to the current module, and so we can only use them there, now if
//we wanted to use them in the script.js module then we would have to use exports

//in ES modules, there are 2 types of exports
//1)NAMED EXPORTS
//2)DEFAULT EXPORTS

//Named imports is actually simplest way of exporting something from a module. because all we have to do is
//to put export infornt of anything that we might want to export

// //lets say we wnt to create a method in shopiingcart, it should be a fn that takes a product and a qantity, and
// //then it pushes a new obj to the cart
// export const addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${product}, ${quantity}`);
// };
// //by now addToCart this variable is private inside of this shoppingCart.js module, but if we wanted to now export
// //it, sp that we can import it, in some other module all we have to do is to write export infront of the fn

//and so then it creates a named export from this module, and so now we can import that variable in script.js
//import addToCart from './shoppingCart.js';

//with named imports we have to give the same name and put it in {}
//and now in script.js we can now call this fn as if is was defined here in the same scope

// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// console.log('imported module');
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

//exports always need to happen in top level code

//we can also export multiple things sing named exports

// //we can also export multiple things, at the same time using named exports again using named exports
// const totalPrice = 237;
// const totalQuantity = 23;

// export { totalPrice, totalQuantity }; //exporting an obj from this shppingCart.js module
//we can also change the name of the inputs as like this totalPrice as price

//we can actually do that here in the exports

//we can also import all the exports of a module at the same time as
//import * (import everthing) as and here we give it some name that we want, lets say ShoppingCart starts with capital
//letter, this is the converntion when we import everthing into an obj, ShoppingCart will create an
//obj containing everything that is exported from the module that we specify here from './shoppingCart.js'
//this will then basically create a namespace, for all of the values, exported from that module

// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';

// console.log('imported module');
// addToCart('bread', 5);
// console.log(price, qt);

//now when ever we want to use somthng that was exported, then we have to take that from this ShoppingCart object

//this module (shoppingCart) here is basically exporting a public Api, jst like a class, ShoppingCart this obj
//is here was an obj created from class which now has addToCart method and also fro ex these props

//how ever we are not replacing classes from modules

//module exports , kind of a public Api, becoz everything else of course stays private inside of the module

//THERE ARE NAMED EXPORTS AND DEFAULT EXPORTS

//DEFAULT EXPORTS:we use default exports when we obly want to export one thing per module
//export default and then here we want to simply export a value, for ex if we want to exprt a same fn, we would simply
//export the value itself, and here we see no variable is involved at all, we are simple exporting the value

// export default function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity}, ${product} added to cart`);
//   };

//and then when we import it we can basically give it any name that we want
//import add from './shoppingCart.js'; this will then import the default export

//here we are importing the same module here twice, usually we wont do that

//we could even mix all of them in the same import statement, so if we wanted we could have default and named
//imports all at the same time
console.log('imported module');
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, qt } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('tomato', 2);

//imports are a life connection to exports, export the cart array in ShppingCart.js
//everyting is added to the cart
console.log(cart); //(3) [{…}, {…}, {…}]
//we do not see that empty object that we exported , but instead we have this array with the objects taht we just
//added to the cart by calling the add fn, this proves that this import(cart) here is not simply a copy of the
//value that we exported here

//-----------------------------------------------------------------------------
//273: TOP-LEVEL AWAIT:
//starting from this new ES2022  we can now use the await keyword outside of async fn at least in modules
//TOP-LEVEL-AWAIT
//we can now basically use the await keyword outside of an async fn which we call Top level await, this only
//works in modules

//in our html file we can still see that we have our type = 'module', so this is what is required in order to
//make top-level await actually work, to show top-level wait

//lets do a simply fetch request, from json placeholder api (fake data)
//now its time to use top-level await, we can await the result and save it in a variable

// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// //then we need another await to parse the data as json
// const data = await res.json();
// console.log(data); //we have an array 100 posts where each of them is 1 obj here
// //this is how we use top-level await, await keyword is now working outside of the async fn

// //this actually blocks the execution of the entire module now
// console.log('something');

//many times we have a situation where we do have an async fn that we want to return some data

//now we want to return something from this fn, and i simply wants to return an object which contains the title
//and also body of the last element by using data.at(-1)

//const lastPost = getLastPost(); this will now return a promise
//calling an async fn will always calls a promise, it will not return the actual data itself, because by the time
//we are running const lastPost = getLastPost(); this line of code the data has not yet arrived, so we still have that
//pending promise, to actually get the returned data so the object insated of the promise was to simply use
//regular promises, so we can take this promise here that is retruned and stored in this lastPost variable
//and then on that we can call the then method then in the then method, we get access to the resolved value,
//which we can just call

//however doing this is we'rent clean, and what we can do now is to use top-level await for this
//lets call lastPost2  which will th eresult of awaiting getLastPost()
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
//lastPost.then(last => console.log(last));
//{title: 'at nam consequatur ea labore ea harum', text: 'cupiditate quo est a modi nesciunt soluta\nipsa vol…nam et distinctio eum\naccusamus ratione error aut'}
const lastPost2 = await getLastPost();
console.log(lastPost2);

//the ituation in these like where the top-level await is useful

//if one module imports a module which has a top-level await, then the imported module will wait for the imported
//module to finish the blocking code

//lets go back to the shoppingCart module, which is a module that we import right here in script.js, lets now
//add some blocking code in the shoppingCart module

// //EXPORTING MODULE:
// console.log('exporting module');

// //BLOCKING CODE:
// console.log('START FETCHING USERS');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finish fetching users');

//we start immdeaitely start fetching users then only after the fetch is complete, we get this 2nd log
//finish fetching users, and only after all that the code in the importing module so in script.js is actually
//executed

//using top-level await, so await outside of any async fn will block the entire module in a way that we really
//could/nt block code execution before

//-----------------------------------------------------------------------------
//274: MODULE PATTERN:
/*
//jst like a regular modules that we just learned abt,
//the main goal of the module pattern is to encapsulate functionality, to have private data, and to expose a
//public API

//and the best of acheieving all that is by simply using a fn, becoz fn's gives us private data by default
//and allow us return values, which can become our public API

//so let's see hoe the module pattern is implemented, we start by writing a fn, and usually we write an IIFE
//IIFE:  and the reason for that is becoz of this way we dont have to call it
//separately and we can also ensure that it's only called once and so for that we warp it and create an IIFE

//this fn is only created once becase the goal of this fn is not to reuse code by running it multiple times,
//th eonly purpose of this fn is to create a new scope and return data just once

//and then here in the fn, lets simply add the same varaibels that we had before in the other module, in that
//other shoppingCart we have a bunch of private variables, so the data that was not exported, and so we simply
//defined them as variables there and here we do the same thing in the fn, we can also use our addToCart, and this
//we add another simply fn, which will simple log something to the console orderStock

//right now all of this data is private becoz it is inside of the scope of the fn, and so now all we have to do
//is to return some of this stuff inorder to basically return a pubic API, and so to do that we simply return
//an obj which contains these stuff that we want to make public here

//hiowever we are not actually storing this returned obj anywhere here, so if we run this right now then this obj
//kind of disappears into nothing, however that's easy to fix, we can simply assign the result of running this
//iife here to a new variable
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 37;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart shipping cost is ${shippingCost}`
    );
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} orderes from supplier`);
  };
  return { addToCart, cart, totalPrice, totalQuantity };
})();
shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 4);
//console.log(shoppingCart2);
console.log(shoppingCart2); //undefined

//this fn is already returned long ago, so this fn ofcourse was only executed once in the beginning, and then all
//it did was return this obj and assigned it to the variable, but then we are able to use all of this and to
//also manipulate the data that is inside of the fn which is the fn that retruned this obj

//HOW ALL THIS WORKS?
//this is one more time closures, so closures, remember allow a fn to have access to all the variables that were
//present at its birthplace basically, so the addToCart Ffn was created here (shoppingCart2) and this fn is the
//birthplace of   return { addToCart, cart, totalPrice, totalQuantity };
//and therfore this addToCart fn never loses connection to its birthplace, which was this shoppingCart2 here
//and so that bithplace, so to say, is all of this scope, which conatins ofcourse the cart, and so therfore
//the addToCart fn out here shoppingCart2.addToCart('apple', 4); can still access hat cart variable that was in the
//fn

//so the reason why this works is not becoz the cart variable is also in this obj, becase here  cart.push({ product, quantity });
//we are not using this.cart, we are simply using cart, so here we could alos log something that is indeed private
// console.log(`${quantity} ${product} added to cart`); to this addToCart module

//if we want one module per file, like we have in ES6 modules then we have to create different scripts and link
//all of them in the html file, and that then creates a couple of pblms, like we have to be carefl with the order
//in which we declare them and we would have all of the variables living in the global scope, and finally, we also
//could'nt bundle them together using a module bundler
*/

//-----------------------------------------------------------------------------
//275: COMMON JS MODULES:
//besides native ES modules and module pattern there are alos other module systems that have been used by js
//in the past, but gain they were not native js so they relied on some external implementations, and 2 example are
//AMD modules and COMMON JS modules

//COMMON JS MODULES: these are imp for us becoz they are used in node.js for almost all of its existence, so only
//very recently, ES modules have been implemented in node.js

//node.js is a way of running js on a web server, outside of a browser, now th ebig consequence of this, is that
//almost all the modles in the npm repository(all these modules that we can use in our own code), still use the
//commonjs module system, and the reason for that is that npm was originally only intended for node, which as
//they said , uses commonjs

//only later npm became the standared repository, for the whole js world and so now we are basically stuck, with
//commonjs, and so therfore you will see probably a lot of commonjs still around

//lets jst pretend that we want to export something from this module say addToCart fn,
//jst like ES6 modules, in commonjs one file is one module, and we export something from a module,
//using export.(name of the export), now this is not going to work on the browser, but it would work in the
//node.js

//this export keyword here basically an obj that again is not defined here in our code, and also not in the browser
//but in node.js it is an important object, that is used, and now then to import omething

//EXPORT USING NODE.JS
// export.addToCart =  function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart shipping cost is ${shippingCost}`
//     );
//   }

//IMPORT USING NODE.JS
//if we then want to import this, it is similat to ES6 MODULES, but then from here we will call a require fn
//require('./shoppingCart.js), again require is not defined here in our browser environment but it is defined in
//node.js, becoz this is part of the commonjs specification
//const {addToCart} = require('./shoppingCart.js')

//in the long run ES6 modules will hopefully  nd probably replace all of these diff module system, but its still
//gonna be a long way

//-----------------------------------------------------------------------------
//276: A BREIF INTRODUCTION TO THE COMMAN LINE:
//before we use parcel we need to no abt command line, all of these tools that are available in npm only work in
//command line,

//we can use comman line in different ways
//we can use a separate window, we will use a separate window like this, but as we use vs code, vscode does have
//an integrated terminal, we can simply use that

//the 1st thing we need to know abt any command line is that you are always in a folder, right now we are in this
//Ravisankars-MBP:complete-javascript-course-master ravisankaruppu$  folder, and so that's the beauty of vscode
//so whenever we open a terminal in vscode, we are always in this project folder itself, and then from
//this location in the file system we can move up and down using commands

//Ravisankars-MBP:complete-javascript-course-master ravisankaruppu$  folder
//1st command is LS, which on windows is called DIR, this will show you the contents of the current folder

//2nd command is CD: which stands for change directory, and with this we can go up and down the file tree
//for now lets go up for that we use (cd ..) we use ..
//now we are in Ravisankars-MBP:my_new_works ravisankaruppu$
//now when we see up in the previous command we have all the content, so if we now want to move to one of the folder
//, if we want to to move to folder 13, 13.advan(there is no need to type all of it, so instead we can
//just hit tab key it will then auto complete its path)
//cd 13-Ad, then ls we will get all the files in that folder and

//if we want to move up to 2 levels cd ../..

//we can also clear the console (clear) and everything disappears ctrl + c to cle
//now lets go back to our project folder, to clear again we use clear bt in vs code we can even use command key

//now lets create a folder (mkdir) and we call this test, and now if we check this current folder now with ls
//then we will have a new folder, and lets now move there by cd test

//lets now create some files, so for that we are using touch on mac and in windows it is edit
//touch index.html
//touch script.js
//these are empty files now but we can still check them
//we can also call our liver server here now

//Ravisankars-MBP:test ravisankaruppu$ live-server

//we can also add multiple files at once
//touch jonas.js

//to delete the created files we can use rm on the mac and del on windows
//rm script.js jonas.js

//to move one of them to parents folder for that we se mv mapty.js(name of the file) and then location into
//which that file should moved in this case the parent folder

//we now dont need the test folder any more so lets delete taht as well for that we can use RMDIR(REMOVE DIRECTORY)
//(MKDIR) MAKE A DIRECTORY

//RMDIR only works for empty directory, we can use another trick to remove directory on mac we can use again rm
//(RM) to remove files and then we can specify a flag(-) that is basically an option, which we write with a dash
//and then a specific symbol or letter, so this case it is (R) which stands for recursive and then the name of the
//directory rm -R TEST -> it delete all the files in the directory and also the directory itself

//TO GET CONTENT IN THE CURRENT FOILDER
//Ravisankars-MBP:complete-javascript-course-master ravisankaruppu$ ls

//TO CHANGE THE DIRECTORY
//Ravisankars-MBP:complete-javascript-course-master ravisankaruppu$ cd ..

//TO GO TO THE CERTAIN FOLDER cd 13-A + TAB KEY
//Ravisankars-MBP:complete-javascript-course-master ravisankaruppu$ cd complete-javascript-course-master/13-Advanced-DOM-Bankist/

//TO MOVE UPTO 2
//Ravisankars-MBP:starter ravisankaruppu$ cd ../..

//TO CLEAR CONSOLE:
//Ravisankars-MBP:starter ravisankaruppu$ clear

//TO CREATE A FOLDER
//Ravisankars-MBP:complete-javascript-course-master ravisankaruppu$ mkdir TEST

//TO CREATE A FILE IN THAT FOLDER
//Ravisankars-MBP:17-Modern-JS-Modules-Tooling ravisankaruppu$ cd TEST1
//Ravisankars-MBP:TEST1 ravisankaruppu$ touch script.js

//TO ADD MULTIPLE FILES
//Ravisankars-MBP:TEST1 ravisankaruppu$ touch mapty.js bankist.js

//TO DELETE CREATED FILES
//Ravisankars-MBP:TEST1 ravisankaruppu$ rm bankist.js

//to delete created directory (files)
//Ravisankars-MBP:complete-javascript-course-master ravisankaruppu$ rm -R TEST

//-----------------------------------------------------------------------------
//278:BUNDLING WITH PARCEL AND NPM SCRIPTS:
//the module bundler that we are going to use is the parcel:
//PRACEL:is is super fast and very easy to use and even more importantly  it works out of the box without any
//configuration

//no we might heard about webpack which is most popular bundler and specially in react world, its way too complex
//to use in a course so lest use parcel

//PARCEL: is another build tool which is also in NPM, so we will use NPM to install it, but this is now a
//different dependency, and so here we have to write --save-dev like this and enter
//a dev dependency is basically like a tool that we need to build our application, but its not the dependecy
//that we actually include in our code, its simply a tool that is why its called devdependency

//--->npm i parcel --save-dev

//it appears in package.json in a new field, parcel is a dev dependency, so lets create a console and actually use
//parcel

//we do it here in the terminal becoz parcel is basically just another comman line interface, however we cannot
//simply run pracel like this ->  parcel index.html this is not going to work becoz the command is not found
//Ravisankars-MBP:17-Modern-JS-Modules-Tooling ravisankaruppu$ parcel index.html
//bash: parcel: command not found
//and the reason for that is that this doesnt work with locally installed packages, and parcel was indeed installed
//locally, so basically only on this project and thta is why it showed up in the package.json file of this
//exact project, so there are also global installations, now inorder to still be able to use Parcel here in the console
//we have to options we can use something called
//NPX OR NPM scripts
//lets use NPX: which is basically an application built into a NPM
//Ravisankars-MBP:17-Modern-JS-Modules-Tooling ravisankaruppu$ npx parcel index.html

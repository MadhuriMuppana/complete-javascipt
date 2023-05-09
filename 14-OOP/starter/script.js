'use strict';
//----------SECTION 13-----------
//-----------------------------------------------------------------------------
//206: WHAT IS OBJECT ORIENTED PROGRAMMING
//OBJECT ORIENTED PROGRAMMING: is a programming paradigm based on the concept of objects
//PARADIGM: simply means the style of the code, so how e write and organize code

//we use objects to model, to describe aspects of real world, like a user to-do list item, or even more
//abstract features like an html component or some kind of data structure,

//objects can contain data, which we call props and also code, (methods), we can say that by using obj's
//we pack all the data and the corresponding behaviour all into one big block

//in oop obj's are self contained pieces of code or blocks of code like small applications on their own
//we can use these obj's as building blocks of our applications and make obj's interact with other obj's

//these interactions happen through a so-called public interface, which we also called API, this interface
//is basically a bunch of methods that a code outside of the obj's can access and that we use to communicate
//with the obj

//WHY OOP EXIST:this was developed with the goal of organizing code, so to make it flexible and easier to
//maintain, so before oop we might have a bunch of codes gathered across mutilple fn's are even in the
//global scope without any structure, in this particular crazy style of code, kit makes it very hard to maintain
//large code bases and let alone, add new functionalities to it, so the idea of oop was basically created
//as a sol to this pblm

//OOP is not the only way of wrting organized and maintainable code, there are many other paradigms and one
//of them is functional programming

//FUNCTIONAL PROGRAMMING: allows us to acheive the exact same goal of avoiding the crazy code

//in OOP we need a way to generateso to create new obj's from our code, and to that in traditional oop
//we use classes

//CLASSES:is a blueprint which can then be used to create new obj's, it is just like an architecture where
//the architect develops a blueprint to exactly plan and describe a house, but the blueprint is really just
//an abstracted plan, like a set of rules but nothing tangable that you can actually touch, however from that
//blueprint, many real houses can then built in the real world

// user {
//     user
//     password
//     email
//     login(password){
//         //login logic
//     }
//     sendMesg(str){
//         //sending logic
//     }
// }

//js doesn not actually support real classes, we can see it describes a user who has username,pswrd etc..,
//it is description of data abt a user, but it is not the data, we then have a behaviour assosciated with
//data, this class has everything related to user so data and behaviour all packed into one nice self
//contained blocks

//using this class and create a new obj
// user {
//     user = ''
//     password = ''
//     email = ''
//     login(password){
//         //login logic
//     }
//     sendMesg(str){
//         //sending logic
//     }
// }
//now we have the real data abt user but not just the description

//we call all objs created through a class instances of a class,
//INSTANCE: is a real obj that we can use in our code, which was created from a class

//HOW DO WE DESIGN A CLASS?
//we can create a class by 4 fundamental principles
//ABSTRACTION, ENCAPSULATION, INHERITANCE, POLYMORPHISM

//ABSTRACTION: is to ignore or to hide details that dont matter, this allows us to get an overview perspective
///of whatever it is that were implementing instead of messing with details that dont really matter, we create
//and use abstractions all the time

//when we observe addEventListener fn, do we actually know how does actually works behnd the scenes
//the low-level details of how exactly it works has been abstracted away from us, we are simply the user,
//and we can simply use that fn without completely understanding it

//ENCAPSULATION: to keep some props and methods private inside a class, they are not accessable outside of
//a class, however some methods can be exposed as a public interface, which we called a api, we prevent
//external code from accidentally manipulating this internal state, state refers to an object data

//INHERITANCE
//when we have 2 classes and that are closely related, we can have one class inherit from other class, so we
//will have one parent and one child class, child class then extends the parent class
//a child class inherit all the methods and props from its parent class, inheritance makes all props and
//methods of a certain class availabel to a child class, a child class then also have its own methods and props

//POLYMORPHISM: a child class can overwrite a method that it inherited from a parent class

//-----------------------------------------------------------------------------
//207: OOP IN JAVASCRIPT
//the process od creating an instance is called instantiation

//HOW OOP WORKS IN JS: in js we have something called prototypes and all objects in js are linked to a certain
//prototype obj, ecah obj has a prototype

//PROTOTYPE: obj contains methods and props that all the objs thta are linked to that prototype can access
//and use, this behaviour is called prototypal inheritance

//PROTOTYPAL INHERITANCE:all objs that are linked to a certain prototype obj can use the methods and props
//that are defined in that prototype, obj inherits methods and props from the prototype

//an instance is inherting a class

//objects delegate behaviour to the linked prototype, a behaviour is just another term for methods
//ex const num = [1,2,3]
//num.map(v => v * 2)

//ecah time we use an array method like map, we are able to use thta method because of prototypal inheritance
//for every array method there is array.prototype.map
//array.prototype is the prototype obj of all the array methods that we create in js, this prototype obj
//contains all the array methods including map, so this is actually where they are defined, so since
//array.prototype is the prototype of the num array, it means that num is linked to that prototype, so
//it has access to all methods that are defined in that prototype obj,

//our array inherits the map method, we can also say that the array delegated the behavior of mapping to its
//prototype, map method is actually not defined on the num array itself but on its prototype

//HOW DO WE CREATE PROTOTYPES?HOW DO WE LINK OBJECTS TO PROTOTYPES? HOW CAN WE CREATE NEW OBJECTS
//in js there are actually 3 diff ways of doing all this
//CONSTRUCTION FN, ES6 CLASSES, AND OBJECT.CREATE

//CONSTRUCTION FN: are a way of creating obj's programatically using a fn
//which will also sets the new objects prototype, this is how built-in objects like arrays, maps or sets
//are implemeted

//ES6 CLASSES:more modern way of doing oop in js, they are instead a so-called synthetic sugar over constructor
//fn's, es6 classes are basically just a layer of abstraction over constrcutor fn's, es6 classes are actually
//implemented with constructor fn's, they also use prototypal inheritance

//OBJECT.CREATE():easiest and most straight forward way of linking an obj to a prototype obj

//-----------------------------------------------------------------------------
//208: CONSTRUCTION FUNCTIONS AN DTHE NEW OPERATOR:
/*
//CONSTRUCTOR FN'S: we can use these fn's to build an obj using the function, a constructor fn is actually
//a completely a normal fn, the only diff b/w regular and constructor fn is that we call a constructor fn
//with a new operator, in oop there is a convention that constructor fn always starts with a capital letter
//an arrow fn will not work as a fn constructor, because it doesn not have own this keyword, this fn basically
//produces an obj i this case for a Person, so we want a person to have a firstname, and a birthyear
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
const jonas = new Person('jonas', 1991);
console.log(jonas); //Person {firstName: 'jonas', birthYear: 1991}
//we call the constructor with the new keyword, this new opertaor is a very special operator, wjat it does
//here is to call the fn, but it does lot more

//WHEN WE CALL A FN WITH NEW OPERATOR:
//behind the scenes, there are 4 steps

//1)A new empty object is created {}
//console.log(this); //Person {}, so what ever we add to that empty obj will then be returned from the
//fn, and that returned obj is going to be the obj that we are trying to build

//2) the fn is called and in this fn call the this keyword is always set to the newly object created
//this =  {}, in the execution context of the Person fn the this keyword will point to this new obj that
//was created in step1

//so taking that 1st parameter, so the value we recieved and then create a prop on the this keyword with the
//same name and then set it to that value
//3)this newly created obj is linked to a prototype
//4)the obj that was created in the beginning is then automatically returned from the constructor fn
// this.firstName = firstName;
//   this.birthYear = birthYear;
//console.log(jonas);//Person {firstName: 'jonas', birthYear: 1991}

//we can use this constructor fn to create as many different objects as we want
const Matilda = new Person('matilda', '1994');
const jack = new Person('jack', 1975);
console.log(Matilda, jack);
//Person {firstName: 'matilda', birthYear: '1994'} Person {firstName: 'jack', birthYear: 1975}

//we did create an obj from a constructor fn, constructor fn's have been used since the beginning of js
//to kind of simulate classes, therefore we can still say thta jonas here is an instance of Person

//THERE IS AN OPERATOR TEST IF THE OBJECT IS AN INSTANCE OF CONSTRUCTOR FN
console.log(jonas instanceof Person); //true

//we can also say these props that are inside of a constructor fn as instance properties, because the props
//in the Person fn will be available on all the instances that are created through this constructor fn
//what if we want to add methods to our objects, just as we added props we can also add methods
// this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
//this works fine but a really a bad practice, we should never create a method inside of a constructor fn
//because imagine we were gonna create a 100 or 1000 objects using this constructor fn, then  each of
//these obj's would carry arround this fn here so if we had a 1000 obj's we would essentailly create 1000
//copies of this fn, to solve this pblm we are gonna use prototypes and prototypal inheritance
*/

//-----------------------------------------------------------------------------
//209: PROTOTYPES:
/*
const Person = function (firstName, birthyear) {
  //instance properties
  this.firstName = firstName;
  this.birthyear = birthyear;
  // this.calcAge = function(){
  //     console.log(2037 - this.birthyear)
  // }
};
const jonas = new Person('jonas', 1991);
console.log(jonas); //Person {firstName: 'jonas', birthyear: 1991}
const matilda = new Person('matilda', 1994);
const jack = new Person('jack', 1991);
console.log(matilda, jack);
//Person {firstName: 'matilda', birthyear: 1994} Person {firstName: 'jack', birthyear: 1994}
console.log(jonas instanceof Person); //true

//Prototypes: each and every fn in js automatically has aproperty called prototype, and that includes construcor
//fn's
//every obj thta is created by a certain constructor fn will get access to all methods and props that we
//define on the constructors prototype property

//prototype property of the constructor fn, all the obj's taht are created through this constructor fn
//will inherit, so they will get access to all the methods and prop's that are defined on this prototype
//property, so lets add method to this prototype property

console.log(Person.prototype); //{constructor: ƒ} we already have calcAge prop in their, before it was a lind
//of empty obj but now there is a calcAge method
//this is now obj Person.prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

//ecah obj created by this constructor fn will now get access to all the methods of this prototype property
jonas.calcAge(); //46
matilda.calcAge(); //43
jack.calcAge(); //43
//we can use this method here on the jonas obj even though it is not really on the jonas obj itself, and
//this keyword in ecah of them is always set to the obj that is calling the method

//the this keyword is set to the object that is calling the method

//matilda and jonas are somehow connected to the Person, thta is why they can have access to these methods
//that is loacred inside of the proptotype property of person

//HOW AND WHY DOES THIS WORKS?
//it works because any obj always has access to the methods and properties from its prototype, and the prototype
//of jonas and matilda is Person.prototype we can confirm that because each obj has special prop called
//__proto__
console.log(jonas.__proto__); //{calcAge: ƒ, constructor: ƒ} this is the prototype of jonas it is not the
//prototype property, here again we see calcAge fn and that is why jonas is able to use this
//the prototype of the jonas obj is essentailly the prototype property of the constructor fn
console.log(jonas.__proto__ === Person.prototype); //true

//Person.prototype is not the prototype of Person, it is gonna be used as the prototype of all the objects
//that are created with the person constructor fn

//so on any obj we can test if this is a prototype of another obj
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//where does this __proto__ property on the jonas obj come from?, the new operator in 3rd step will links
//the empty new obj to the prototype, it creates this __proto__ property and it sets its value to the
//prototype property of the fn that is being called, it sets the prototype property on the obj to the
//prototype property of the constructor fn, this is how js know internally that jonas obj is connected

//WE CAN ALSO SET PROPERTIES ON PROTOTYPE NOT JUST METHODS:
Person.prototype.species = 'homo sapeins';
console.log(jonas); //not directly here but on the prototype property
console.log(jonas.species, matilda.species);
//this property is not directly on the obj, this is not its own property, own properties are the only ones
//that are declared directly on the obj itself, not including the inherited properties
console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false
*/

//-----------------------------------------------------------------------------
//210: PROTOTYPAL INHERITANCE AND THE PROTOTYPE:
/*
//evewrthing starts with the construction fn that we created
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

//now this constructor fn has a prototype property which is an obj and inside that object, we defined the
//calcAge method and Person.prototype itself also has a reference back to the person which is the constructor
//property, so essentially Person.prototype.constructor is going to point back to the Person itself
//[Person.prototype](calcAge fn)
//Person.prototype is actually not the prototype of the Person but of all the obj's that are created through
//the person fn

const jonas = new Person('jonas', 1991);
//when we call a fn with new operator the 1st thing that is gonna happen is that a new empty obj is created
//then the this keyword in the fn call is set to the newly created obj, so inside the n's execution context
//this is now new empty obj, now the new obj is linked to the constructors prototype property, in this case
//Person.prototype this happens internally by adding the __proto__ to the new obj, so Person.prototype is
//now the new objects prototype, __proto__ always points to an obj prototype, and finally the new obj is
//automatically returned from the fn
jonas.calcAge();

//here we are attempting to call the calcAge fnon the jonas obj however js cannot find the calcAge method
//on the jonas obj, it is simply not there, if a property or a method is not found in a certan method
//js will look into its prototype and there it is, so there is a calcAge fn that we are looking for, and
//js will use that one, this is called prototypal inheritance

//PROTOTYPAL INHERITANCE: jonas obj inherited the calcAge method from its prototype, or it delegated the
//calcAge functionality to its prototype, now we can create as many person objs as we like and all of them will
//inherit his method

//the fact that jonas obj is connected to a prototype and the ability of looking up methods and properties
//in a prototype is called prototypal chain, so the jonas obj and its prototype  basically form a prototype
//chain

//we hav the person fn and its prototype property, and the jonas obj linked to its prototype via the__proto__
//Person.prototype itself is also an obj and all obj in js have a prototype, so this Person.prototype also
//have a prototype and the prototype of Person.prototype is Object.prototype
//Person.prototype is just a simple obj, it has been built in object constructor fn and this is actually the
//fn taht is called behind the scenes when ever we create an obj literal

//Object.prototype is usually the top of the prototype chain which means its prototypr is null which is the end
//of the prototype chain

//in scope chain when ever the js cant find a certain variable in a certain scope, it looks up in the next
//scope in the scope chain and tries to find out the var on the othe hand in the prototype chain whenever js
//cant find a certain property or method in a certain obj its gonna look up into the next prototype in the
//prototype chain and see if it can finfd there

//another ex of method lookup, to do taht we have a hasOwnProperty method  on the jonas object
*/

//-----------------------------------------------------------------------------
//211: PROTOTYPAL INHERITANCE ON BUILT IN OBJECTS:
/*
const Person = function (firstName, birthyear) {
  //instance properties
  this.firstName = firstName;
  this.birthyear = birthyear;
};
const jonas = new Person('jonas', 1991);
const matilda = new Person('matilda', 1994);
console.log(jonas); //Person {firstName: 'jonas', birthyear: 1991}
console.log(matilda);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

console.log(jonas, matilda);
matilda.calcAge(); //43
jonas.calcAge(); //46

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //flase

Person.prototype.species = 'homo sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); //true

console.log(jonas.hasOwnProperty('species')); //true

console.log(jonas.__proto__); //{species: 'homo sapiens', calcAge: ƒ, constructor: ƒ}
console.log(jonas.__proto__.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(jonas.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor); //fn itself ƒ Person(firstName, birthyear)

//PROTOTYPE OF ARRAY:
const arr = [3, 6, 4, 5, 6, 9, 3]; // this is same as new Array === []
console.log(arr.__proto__); //[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
//all the arrays get access to all of these methods, each array does not contain all of these methods, but
//instead each array will inherit these methods from its prototype, Array is the constructor fn
console.log(arr.__proto__ === Array.prototype); //true
//the prototype property of the constructor fn is gonna be the prototype of all the obj taht are created
//by that constructor

//whenever we create an array, it is indeed created by the array constructor
console.log(arr.__proto__.__proto__);
//any array inherits all the methods frmo its prototype

//here we can add any method to this prototype and all the array methods will inherit it, lets say we want
//to create a method that returns all the unique el's of an array, and to get the unique el's we create a set

Array.prototype.unique = function () {
  return [...new Set(this)];
};

//this is the keyword on which this method is called and now we put this into an array and spread it
console.log(arr.unique()); //(5) [3, 6, 4, 5, 9]

//extending the prototype of a built-in obj is not a good idea

const h1 = document.querySelector('h1');
//all the dom el's behind the scens are objects, the prototype is
//[[Prototype]]:HTMLHeadingElement,HTMLElement,Element, Node,EventTarget,object
*/

//-----------------------------------------------------------------------------
//212: CODING CHALLENGE 1:

//-----------------------------------------------------------------------------
//213: ES6 CLASSES:
//classes in js do not work like traditional classes, instead classes in js are just syntactic sugar over
//constructor fn's, they still implement prototypal inheritance behind the scens but with a syntax that is more
//sense

//Implementing Person using a class, this is a class declaration just like fn's classes also expressions
//this is beacuse classes are just like a fn's, classes behind the scenes works as fn's
//class expression:
//const PersonCls = class {};

//class declaration: the 1st thing we have to do inside the class is to add the constructor method just like
//constructor() and this constructor actually works in a pretty similar way as a constructor fn, but this
//one is actually a method of this class, just like in construyctor fn's we pass arguments for the properties
//that we want the obj to have, now the act of creating a new obj actually also works the exact same as before
//so using the new operator, so whenever we create a new obj, so like a new instance using the new operator
//this constructor will automatically be called, it just looks like a regular fn call, and we also use the
//new keyword, the this keyword here in this constructor will also be set to the newly created empty obj
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
const jessica = new PersonCl('Jessica', 1991);

//when we create a new instance , then it is this constructor that is gonna be called and that will return a
//new obj and that will be stored in the jessica
console.log(jessica); //PersonCl {firstName: 'Jessica', birthYear: 1991}

//an for methods we simply write them in the class, all we have do is write their name just like a regular
//fn

//all of the methods that we write inside a class, so outside of a constructor will be on the prototype of
//the obj's and not on the obj's themselves
//-----------------------------------------------------------------------------
//212: CODING CHALLENGE 1:
/*
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀

const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw, mercedes);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};
bmw.accelerate(); ////130
bmw.brake();
mercedes.accelerate();
mercedes.brake();
*/

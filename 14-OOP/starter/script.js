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
/*
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

  //methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.firstName}`);
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
jessica.calcAge(); //46
console.log(jessica.__proto__ === PersonCl.prototype); //true

//we can also add a method manually to the prototype
// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };
jessica.greet(); //hey Jessica

//1)classes are not hoisted and so even if they are class declarations, fn declarations are hoisted it means we
//can use them before they are declared in the code

//2)like fn's classes are also first class citizens, it means we can apss them into fn's and also return
//them from fn's, becoz classes are special type of fn's

//3)the body of the class is always executed in the strict mode, even if we did'nt activate if for our entire
//script, all the code taht is in the class will be executed in the strict mode
*/

//-----------------------------------------------------------------------------
//214: SETTERS AND GETTERS:
/*
//every obj in js can have setter and getter properties, and we call these special properties assessor
//properties, while the more normal props are called data props, getters and setters are basically fn's
//that get and set a value, so just as a name says that, but  on th eoutside they still look like regular
//props
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],
  //we want a method to get the latest movement and to transform this to a getter we simply prepend get
  get latest() {
    return this.movements.slice(-1).pop();
  },
  //set latest again, we can basiaclly add a new movement here, any setter method needs to have exactly
  //one parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};
//we can use this getter like this but latest just as a property, we dont call the method but instead we
//write it as if it is a property
console.log(account.latest); //300
//this can be v);

//but now this is actually like a property, so we can simply set it by
account.latest = 50;
console.log(account.movements); //(5) [200, 530, 120, 300, 50]

//Classes do alos have getters and setters

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Instance methods
  //methods that would be added to the prototype prop, so that all intances have access to them
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.fullName}`);
  }
  //getter for the age property
  get age() {
    return 2037 - this.birthYear;
  }
  //we are creating a setter for a property name that does already exist, now each time the above code is executed
  //so whenever we set a fullname on this keyword, then this method here (set) so this setter is gonna be
  //executed and so that name we pass in as fullName will then become this name,
  //set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a fullname`);
  }

  get fullName() {
    return this._fullName;
  }
  //static method
  static hey() {
    console.log('hey there');
    console.log(this);
  }
}
const jessica = new PersonCl('jessica davis', 1991);
console.log(jessica); //PersonCl {firstName: 'jessica', birthYear: 1991}
jessica.calcAge(); //46
console.log(jessica.age); //46
console.log(jessica.__proto__ === PersonCl.prototype); //true
jessica.greet(); //hey jessica
console.log(jessica); //PersonCl {_fullName: 'jessica davis', birthYear: 1991}
console.log(jessica); //PersonCl {_fullName: 'jessica davis', birthYear: 1991}
//right now the prop that exist is _fullName now if we try to get.fullName we get undefined
//to fix this we also need to create a getter for the fullName property, that simply return _property
//now if we try
console.log(jessica.fullName); //jessica davis
PersonCl.hey(); //hey there and a Personcl class
//these static methods are not available on the instances

//const walter = new PersonCl('walter', 1961);

//GETTER: is just like another regular method that we set on the prototype,
//getters and setters are used for data validation
//lets try some validation with name, we change the name to full name and now we can create a setter for
//the fullname property which will check if this is actually a fullname

//we are creating a setter for a property name that does already exist, now each time the above code is executed
//so whenever we set a fullname on this keyword, then this method here (set) so this setter is gonna be
//executed and so that name we pass in as fullName will then become this name,
//there will be a conflict
//both the setter and constructor fn are trying set the exact same prop name instead in setter we create a
//new prop name, so when we have a setter which is trying to set a prop that does already exist, then here
//in set method as a convention we add _ when we are doing this we are actually creating a new variable

//-----------------------------------------------------------------------------
//215: STATIC METHODS:
//We have Array.from() method, we can convert any array like structure to a real array
console.log(Array.from(document.querySelectorAll('h1'))); //[h1]
//this from method is really a method that is attached to the array constructor, so we could not use the
//from on an array, from is not a fn, this from method here is arelly attached to the entire constructor
//and not to the prototype property of the constructor, so therfore all the arrays do not inherit this method
//because it is not on their prototype, it is simply attached to constructor itself, so Array.from here
//is basically just a simply fn, but its a fn that's attached to the array constructor, we also say that
//the from method is in the array name space
//Number.parseFloat(12)
//This is another static method and its static on the number constructor so its not avialable on numbers
//but only on the very constructor
//we use static methods as helpers, that should be related to a certain constructor

const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthYear = birthyear;
};
const jonas = new Person('jonas', 1991);

//to add a static method all we have to do is
Person.hey = function () {
  console.log('hey there'); //hey there
  console.log(this); //is the constructor fn, as that is th eobj calling the method
};
//to call this
Person.hey();
//this one is not inherited
//jonas.hey(); //error

//adding a static method on classes is simply we can add just by adding static heyery useful when we want to read something as a prop, but still need to do some calculations
//we can do same also setter

//if it is a regular method we would do this
//account.latest(50)
*/

//-----------------------------------------------------------------------------
//217: CODING CHALLENGE 2:

//-----------------------------------------------------------------------------
//218: INHERITANCE BETWEEN CLASSES AND CONSTRUCTOR FUNCTIONS:
/*
//INHERIT B/W CLASSES USING CONSTRUCTOR FN'S
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

//building a constructor fn for a student, usually , we want a child class to have the same functionality
//as the parent class, but with some additonal functionality, so usually we pass in the same arguments, but
//then also some addtional ones
const Student = function (firstName, birthyear, course) {
  //   this.firstName = firstName;
  //   this.birthyear = birthyear;
  Person.call(this, firstName, birthyear);
  this.course = course;
  //this student class have the same data as the person class, but with addtional prop
};

//Student.prototype is now an obj that inherits from person.prototype, we have to create this connetcion here
//before add any more methods to the prototpe obj of student, because object.create will return an empty obj
//at this point student.prototype is empty, and so then on this emepty obj we can add methods

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

//if we do Student.prototype = person.prototype, then we will not end up with a prototype chain that we
//need, instead we would end up, we are actually saying the students prototype property and person prototype
//property should be the exact same obj,  what we want is the person prototype obj to be the prototype
//of student prototype , so we want to inherit from it, but it should not be the exact same obj, that is
//why we need object.create

Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and i study ${this.course}`);
};
const mike = new Student('mike', 2020, 'computer science');
console.log(mike); //Student {firstName: 'mike', birthyear: 2020, course: 'computer science'}
mike.introduce(); //my name is mike and i study computer science

//right now some part of code in student fn is basically a copy of the person fn, we can simply call person fn
//Person(firstName,birthyear), we are now calling this person constructor fn as a regular fn, so we are not
//using the new operator to call this person fn, therfore this fn call here in student fn is simply a regular
//fn in a regular fn, the this keyword is set to undefined, so we get error, instead of simply calling the
//person fn here we need to manually set the this keyword, we can call the fn and set the this keyword inside
//that fn, by using the call method

//call method will indeed call this person fn, but we will be able to splecify this keyword here as the 1st
//argument in the fn, in this case we want the this keyword inside the person fn to simply be the this keyword
//inside this fn here

//it is simply the student constructor fn and its prototype property, and then the mike obj is linked to
//its prototype, and that prototype is of course the constrctor fn's prototype property, now this link b/w
//instance and prototype has been made automatically by creating the mike obj with new operator, now a student
//is also a person, and so we want student and person to be connected, so we really want the student class
//to be the child class and inherit from the person class, which will then fn as the parent class so this way
//all the instances of studentcould also get access to methods from the persons prototype property, its the
//chilkd class share the behaviour from their parent class, we have to make person.prototype, the prototype
//of student.prototype, or we want to set the __proto__ property of student prototype to person.prototype

//we have to create this connection manually, so to link these 2 prototypes objects, we will use Object.creat
//because defining prototypes manually is exactly what object.create does
mike.calcAge(); //17
//in this case we know the calcage method is not directly on mike obj, its alos not in mike prototype, that is
//where we defined the intorduce mthod, but not calcage  whenever we try to access ,method thta is not in the
//obj's protoype then js will even look further in the prototype chain and see if it can find a method in
//the parent prototype that is exactly where  happens, so js will find calcage in person.prototype, which
//is exactly where we defined it, we are now able call a method that is on the person's prototype on a stucent
//obj
console.log(mike.__proto__); //Person {introduce: ƒ}
console.log(mike.__proto__.__proto__); //{calcAge: ƒ, constructor: ƒ}
console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true

console.dir(Student.prototype.constructor); //this should point back to student, but here it points back to
//the person //ƒ Person(firstName, birthyear), js now thinks that student.prototype is person here
//the reason for that we set the prototype property of student using objcte.create, and so this makes it so
//that the constructor of student.prototype is still person, so we need to fix it, we can do thta by
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); //ƒ Student(firstName, birthyear, course)
*/
//-----------------------------------------------------------------------------
//219: CODING CHALLENGE 3:

//-----------------------------------------------------------------------------
//220: INHERITANCE BETWEEN CLASSES: ES6 CLASSES:
/*
class PersonCl {
  constructor(fullName, birthyear) {
    this.fullName = fullName;
    this.birthyear = birthyear;
  }

  calcAge() {
    console.log(2037 - this.birthyear);
  }

  greet() {
    console.log(`hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthyear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`hey there`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthyear, course) {
    //PersonCl.call();
    //always needs to happen 1st
    super(fullName, birthyear);
    this.course = course;
  }

  introduce() {
    console.log(`my name is ${this.fullName} and i study ${this.course}`);
  }

  calcAge() {
    console.log(`i'am ${
      2037 - this.birthyear
    } years old, but as student i feel more like 
    ${2037 - this.birthyear} + 10`);
  }
}
//const martha = new StudentCl('martha', 2012);
const martha = new StudentCl('martha jonas', 2012, 'computer science');
martha.introduce(); //my name is martha jonas and i study computer science
martha.calcAge(); //25

//to implement inheritance b/w classes we only need 2 ingredients, we need the extend keyword and super fn
//so to make student class inherit from person class all we need to do is say extends and the parent class
//we still need a constructor fn, we no need to call PersonCl like constructor fn, instead we call super fn

//SUPER: is basicall a constructor fn of the parent class, in child class this always need to happen 1st
// super(fullName, birthyear); this call the suoper fn is responsible for creating the this keyword in the
//sub class
*/

//-----------------------------------------------------------------------------
//221: INHERITANCE BETWEEN CLASSES: OBJECT.CREATE:
/*
const Personproto = {
  calcAge() {
    console.log(2037 - this.birthyear);
  },
  init(firstName, birthyear) {
    this.firstName = firstName;
    this.birthyear = birthyear;
  },
};
//this will serve as a prototype to create a new person object using Object.create(), so this will basically
//be our parent class
const steven = Object.create(Personproto);
//this obj up here used to be the prototype of all the new person objs, but now we basically want to add
//another prototype in the middle of the chain, so  b/w personproto and the obj, what we do is to make
//student inherit directly from the person, now we gonna create an obj that will be the prototype of students

const Studentproto = Object.create(Personproto);
//this will be for now an empty obj, and prototype will be, Personproto
//we can use this studentproto to create new students
// const jay = Object.create(Studentproto);
//studentprototype obj is now prototype of jay and personproto obj is in turn the prototype of studentproto
//and so personproto is a parent prototype of jay

//Personproto obj is the prototype of all peson objects, but now using object.create, we make it so that
//personproto will actually become the prototype of studentproto and what it does is that now basically
//student inherit from person, now to finish all we have to do is to use object.create but this time to
//create a new actual student obj and ofcourse we make the student, jay in this case inherit from studentproto
//which is now jay prototype, jay inherits from studentproto which in turn inherits personproto and therfore
//jay obj will be able to use all the methods that are contained in studentproto and personproto
Studentproto.init = function (firstName, birthyear, course) {
  Personproto.init.call(this, firstName, birthyear);
  this.course = course;
};

Studentproto.introduce = function () {
  console.log(`my name is ${this.fullName} and i study ${this.course}`);
};
const jay = Object.create(Studentproto);
jay.init('jay', 2010, 'computer science');
console.log(jay); //{firstName: 'jay', birthyear: 2010, course: 'computer science'}
jay.introduce(); //my name is undefined and i study computer science
jay.calcAge(); //27;
*/
//-----------------------------------------------------------------------------
//222: ANOTHER CLASS EXAMPLE:
/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    //we can even excute any code here in this constructor that e want
    console.log(`thanks for opening an account, ${owner}`);
  }

  //public interface of our obj's
  deposit(val) {
    this.movements.push(val);
  }
  withdrawal(val) {
    //we can actually call other method inside of a certain method
    this.deposit(-val);
  }
  approvalLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approvalLoan(val)) {
      this.deposit(val);
      console.log(`loan approved`);
    }
  }
}

const ac1 = new Account('jonas', 'EUR', 1111);
console.log(ac1);
//Account {owner: 'jonas', currency: 'EUR', pin: 1111, movements: Array(0), locale: 'en-US'}

//we want to start always with an empty array as the movements and the locale we want to get from the
//navigator.language, it doesnt make sense to pass in an empty array into all the new accounts that we want
//to create, we dont need this instaed we can simply do this by adding this.movements = [] as an property
//we can create even more properties on any instance and properties that are not based on inputs, same
//we can do for locale

//if we want a deposit
//instead of interacting a property like this, its a lot better to create a methods that interact with these
//properties
// ac1.movements.push(250);
// //if we want a withdrawal
// ac1.movements.push(-140);
ac1.deposit(250);
ac1.withdrawal(140);

console.log(ac1); //Account {owner: 'jonas', currency: 'EUR', pin: 1111, movements: Array(2), locale: 'en-US'}

//we are actuall using public interface, the deposit and withdrawal methods are the interface to our objects
//and we also call this api,and this withdrawal here actually abstracts the fact that a withdrawal is basically
//a -ve movement

console.log(ac1.pin); //1111
//probably it should be accessable from outside of a class, same goes for methods lets say we have a request
//loan method fro some val, we could make the apporval of the loan based on some condition and that condition
//would come from some other method say approvalLoan, in public interface we only want requestloan method
//so we want to be able to do acc1.requestLoan()
ac1.requestLoan(1000); //loan approved and pushed into our array, but ofcourse we also able to do
ac1.approvalLoan(1000); //this ofcourse doesnt do anything but in real world we should'nt even be allowed
//to access this kind of methods, so this is kind iof an internal method that only requestLoan method
//should be able to use, we really need data encapsulation and data privacy
*/

//-----------------------------------------------------------------------------
//223: ENCAPSULATION:PROTECTED PROPERTIES ND METHODS:
class Account {
  //1)public fields(instances)
  locale = navigator.language;
  //2)private fields(instances)
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected property
    //this._movements = [];
    //this.locale = navigator.language;
    console.log(`thank you for opening an account ${owner}`);
  }
  //public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approvalLoan(val)) {
      this.deposit(val);
      console.log('loan approved');
      return this;
    }
  }
  //STATIC
  static helper() {
    console.log('helper');
  }
  //4)PRIVATE METHODS
  _approvalLoan(val) {
    return true;
  }
}
const ac1 = new Account('jonas', 'EUR', 1111);
ac1.deposit(250);
ac1.withdrawal(140);
ac1.requestLoan(1000); //loan approved
//Account {owner: 'jonas', currency: 'EUR', pin: 1111, movements: Array(3), locale: 'en-US'}
console.log(ac1);
//console.log(ac1.pin); //1111
//Account {owner: 'jonas', currency: 'EUR', pin: 1111, movements: Array(2), locale: 'en-US'}

//ENCAPSULATION: means basically to keep some properties and methods private inside the class so that they
//are not accessible from outside of the class, then the rest of the methods are basically exposed as a
//public interface, which we also called api so this is essentail to do in anything more than a toy application
// now they are 2 big reasons why we need encapsulation and data privacy

//1)to prevent code from outside of a class to accidentally manipulate  or data inside a class
//2) when we expose only a small interface so a small api consisting only a few public methods then we can
//change all other internal methods with more confidence, because in this case we can be sure that external
//code does not rely on these private methods and so therfore our code will not break when we do internal
//chnages, so that what encapsulation and adat privacy are, however js classes actually do not yet support
//real data privacy and encapsulation

//there is a proposal to dd truly private class fields and methods to the language, the 1st to be protected
//is movements, so the movements are ission critical data and so here we will protect this data so that
//no one can accidentally manipulate it, and for now all we do is to add _ infront of the property name
//now we need to go ahead and change it everywhere, this does not actually make the property truly private
//because this is just a convention, so its something that developers agree to use, but since this is not
//truely private we call this protected, and so now if we wanted to get movements outside, we could ofcourse
//still do this
//ac1._movements.push(250);
console.log(ac1); //the data here is still accessible if we use this underscore outside as well, but you
//will know that it is wrong

//now if we still wnated to give access to the movements array from outside then we would have to implement
//a public method for that
console.log(ac1.getMovements()); //(3) [250, -140, 1000]
//this is the correct way to get movemets, everyone still can access the movements but that cannot ovveride
//them, so they cannot set the movements, we can also protect the pin

//-----------------------------------------------------------------------------
//224: ENCAPSULATION:PRIVATE CLASS FIELDS AND METHODS:
//Truly private class and methods are actually part of a bigger proposal for improving and changing js
//classes which is simply called class fields:

//Class field proposal is currently at stage 3, and so right now it is not yet part of the js language, howver
//being at stage 3 means its vey likely that at some point it will move forward to stage 4 and then it will
//actually become part of js

//WHY IS THIS PROPOSAL CATUALLY CALLED CLASS FIELDS?
//in traditional oop like java,c++ properties are usually called fields, so with this means is that with
//this new proposal . js is moving away from the idea that classes are just syntactic sugar of constructor fn
//because with this new class features classes actually start to have abilities that we did'nt previoulsy
//have wioth constructor fn's

//in this proposal there 4 different kinds of fields and methods
//1)PUBLIC FIELDS:
//we can think of a field as a property that will be on all instances, so that why we can
//also call this a public instance field, in our case it should be locale and movements, bacuase these are
//basically 2 props that are gonna be on all obj's that we create with this class, because we do not
//pass any values here, so into the construtor and so this array and this lang they will always be set
//for all thge instances, and so lets now add them as public fields, we have to wrire
//locale = navigator.language;,
//this looks like a var here, but we dont have to declare it using let or
//const, so this how we simple define a public field, and for movements we still called _movements and setting
//it to empty array, these public fields here are gionna be present on all the instances that we are creating
//through this class, so they are not on the prototype, all the methods that we add they will be always
//added to the prototype, but gain the feilds here, thye are on the instances, they are also refrencable
//with this keyword

//2)PRIBATE FEILDS: with private fields now we can make it so that properties are truly not accessible
//from the outside, now making movemetns array private we remove the _ and add # this is the syntax that
//makes a field private, now if we access the account we get an error, the reason for that is the prop
//is now really called #movements, so we need to change it everywhere, now it works, now if we want to try
//to read ac1.movements we will get an error
//console.log(ac1.#movements); so private feild mpvements must be declared in an enclosing class, so basically
//js thinks thta im trying to implement this private class feild here, infact we caanot access this var
//outside, and ofcourse the movement prop from before does not, no longer exsit

//only google chrome supports this private class feilds, the movements are now truly private, the next to
//be private is pin, but this time it is diff, because now we are actually setting the pin based on the i/p
//value to the constructor, however we cannot define a feild in the constructor, so the feilds really have to
//be out here, outside of any method, so what we have to do is to create the feild out private feild with
//#pin and dont set it to anything, this is essentailly creating like empty var, so in the beginning this
//will be set to undefined and then in constructor we can redefine the value, these clss feilds are like
//any other prop later down we can then access it on the this keyword and set it to the value that we received
//now the pin is now private field and when we try to access it we will no longer be able to do that
//console.log(ac1.#pin); these are available on all instances but not on prototypes

//3)PUBLIC METHODS: so all the methods that we are using are indeed public methods
//4)PRIVATE METHODS:these are very useful to hide the implementation details from the outside, lets make
//approvalLoan private but right no browser full supports this, it no longer works on a prototype, but now
//its instaed on the instance

//besides these 4 we also have static feild methods, these static methods will not be available on all the
//instances but only on the class
Account.helper(); //helper

//-----------------------------------------------------------------------------
//225: CHAINING METHODS:
/*we can implement bsame ability of chaining methods in the  methods of the class
//all we have to do is to return the obj itself at the end opf the method that we want to be chainable
//Chaining
ac1.deposit(300).deposit(20).withdrawal(60).requestLoan(25000).withdrawal(4000); //right now this dont work
//ac1.deposit(300) will work but it will return nothing, we actually want to call deposit on account so
//the reasult of this ac1.deposit(300) should be an account so in the method return this because return is
//the current obj, returning this will essentially make tyhe method chainable
console.log(ac1.getMovements()); //(8) [250, -140, 1000, 300, 20, -60, 25000, -4000]
*/

//-----------------------------------------------------------------------------
//226: ES6 CLASSES SUMMARY:
//EXTENDS: will automatically set up the prototype chain for us
//PUBLIC FEILD:is very similar to just a prop that we define in a constructor, so it is available on all
//very obj, so on any instance craeted by this class
//PRIVATE FEILDS:almost same a public feilds, but they are not accessible outside if the class, this is
//perfect from implementing data privacy and encapsulation
//STATIC PUBLIC FEILDS: thses are feilds or like props that rea available only on the class, just like
//static methods we use the static keyword to make any feild static
//CONSTRUCTOR:it is automatically called by the new operator whenever we create a new instance of the class
//so basically a new obj, this constrctor method is mandatory in any regular class, bit it might be omitted
//in a child class if we want it to have the exact same number and the exact same name of parameters
//then insdide of a constructor there is the call to the parent class, and so that is super class, this is
//necessary where we are using the extends keyword, this needs to happen before the this keyword in the
//constructor

//INSTANCE PROPERTY:just like public fields the prop is also available on ecah obj created but the diff b/w
//this one public field is that we set thses instance prop's based on the i/p data of the constructor
//thse prop are personalized and unique for each of the obj while the fields are usually for something
//that is common o all the obj's

//GETTER METHOD: we canb get a value out of an obj by simply writing a prop instead of  writing a method

//-----------------------------------------------------------------------------
//227: CODING CHALLENGE 4:
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

/*
//-----------------------------------------------------------------------------
//217 CODING CHALLANGE 2:
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h

class Carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  break() {
    this.speed -= 5;
    console.log(this.speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new Carcl('Ford', 120);
console.log(ford);
//Carcl {make: 'Ford', speed: 120}
ford.accelerate(); //130
ford.accelerate(); //140
ford.break(); //135
ford.speedUS = 50;
console.log(ford); //Carcl {make: 'Ford', speed: 80}


//-----------------------------------------------------------------------------
//219: CODING CHALLENGE 3:
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('TESLA', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
tesla.accelerate();
console.log(tesla);

*/

//-----------------------------------------------------------------------------
//227: CODING CHALLENGE 4:
/*
Coding Challenge #4
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  break() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
//console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .break()
  .chargeBattery(50)
  .accelerate();

*/

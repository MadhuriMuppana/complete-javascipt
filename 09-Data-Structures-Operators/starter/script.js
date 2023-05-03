'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicios pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  openingHours,
};
restaurant.orderDelivery({
  time: '22:30',
  address: '14698 brair forest drive',
  mainIndex: 2,
  starterIndex: 2,
});
//----------SECTION 9-----------=====

//-----------------------------------------------------------------------------
//103 DESTRUCTUTING ARRAYS:
/*
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

///-----------------------------------------------------------------------------
//104 DESTRUCTUTING OBJECTS:
/*
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
console.log(o, c); //{open: 11, close: 23}, actually we want 2 variables one called open and other called close
//11, 23
*/

///-----------------------------------------------------------------------------
// 105 SPREAD OPERATOR:
/*
//we can use spread operator to basically expand an array into all its elements so basically unpacking all the
//array elements at one

const arr = [7, 8, 9];
//creating new array based on the above array but with some el's at the beginning
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray); //(5) [1, 2, 7, 8, 9]

//1)CREATING A NEW ARRAY BASED ON INITAL ARRAY USING SPREAD OPERATOR
const newArray = [1, 2, ...arr];
console.log(newArray); //(5) [1, 2, 7, 8, 9]

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
*/
/*
const ingredients = [
  prompt('lets make pasta ingrdient 1?'),
  prompt('lets make pasta ingrdient 2?'),
  prompt('lets make pasta ingrdient 3?'),
];
console.log(ingredients); //(3) ['a', 'b', 'c']
//calling order pasta function
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);
*/
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
console.log(arr1);

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
restaurant.orderPizza('mushrooms', 'olives', 'spinach', 'onion');
restaurant.orderPizza('mushrooms');

//-----------------------------------------------------------------------------
//107 SHORT CIRCUITING(&& AND ||)
/*
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
//jonas;

//when the 1st value is truthy, it means the evaluation continues and then simply the last value is returned
console.log('hello' && 23 && null && 'jonas'); //o/p null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach', 'onion');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach', 'onion');
//OR operator will return 1st truthy value of all the operands, or simply the last value if all of them are falsy
//AND operator will return 1st falsy value or the last value if all of them are truthy

//we can use OR operator to set default values, and AND operator to execute code in the 2nd operand if the
//1st one is true

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
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
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
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

//110 CODING CHALLANGE 1
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

//112 OBJECT LITERALS
//-----------------------------------------------------------------------------
//113 OPTIONAL CHAINING:

//Lets say we want to get the opening hours of our restuarant for monday
//if a certain property does not exist then undefined is returned immediately

if (restaurant.hours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with optional chain
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
//only if the property that is before the ? here, so only if mon exist then this open property will be read
//from there, but if not then immediately undefined will be returned, and exist here actually means the nullish
//concept, so a property exists it it's not null and not undefined

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//looping over this array and log to the console whether the restaurant is opened or closed on each of the days
for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
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

//-----------------------------------------------------------------------------
//114 LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES
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

//115 CODING CHALLENGE
//-----------------------------------------------------------------------------
//116 SETS:
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
const answer = 3;
//const answer = Number(prompt('your answer'));
//console.log(answer);

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

//120 CODING CHALLANGE 3
//-----------------------------------------------------------------------------
//121 WORKING WITH STRINGS PART1:
/*
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

//-----------------------------------------------------------------------------
//122 WORKING WITH STRINGS PART2:
/*
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

//---------------DATA STRUCTURES, MODERN OPERATORS AND STRINGS---------------
//Coding Challenge #1
/*
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

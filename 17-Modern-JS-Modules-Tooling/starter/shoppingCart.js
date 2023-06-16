//EXPORTING MODULE:
console.log('exporting module');

//BLOCKING CODE:
// console.log('START FETCHING USERS');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finish fetching users');

//we start immdeaitely start fetching users then only after the fetch is complete, we get this 2nd log
//finish fetching users, and only after all that the code in the importing module so in script.js is actually
//executed

//the code in script.js will has to wait fro the code in shoppingCart.js to finish, this top level code her
//is infact blocking the exection, not only in this module, but also in the module that is importing it

const shippingCost = 10;
export const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity}, ${product} added to cart`);
};

//lets say we wnt to create a method in shopiingcart, it should be a fn that takes a product and a qantity, and
//then it pushes a new obj to the cart

//by now addToCart this variable is private inside of this shoppingCart.js module, but if we wanted to now export
//it, sp that we can import it, in some other module all we have to do is to write export infront of the fn

//and so then it creates a named export from this module, and so now we can import that variable in script.js
//import {addToCart} from './shoppingCart.js';

//with named imports we have to give the same name and put it in {}
//and now in script.js we can now call this fn as if is was defined here in the same scope
//exports always need to happen in top level code

//we can also export multiple things sing named exports

//we can also export multiple things, at the same time using named exports again using named exports
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt }; //exporting an obj from this shppingCart.js module

//THERE ARE NAMED EXPORTS AND DEFAULT EXPORTS

//DEFAULT EXPORTS:we use default exports when we obly want to export one thing per module
//export default and then here we want to simply export a value, for ex if we want to exprt a same fn, we would simply
//export the value itself, and here we see no variable is involved at all

// export default function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity}, ${product} added to cart`);
//   };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity}, ${product} added to cart`);
}

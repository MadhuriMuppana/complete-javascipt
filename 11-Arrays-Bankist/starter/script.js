'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
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

/////////////////////////////////////////////////

//----------SECTION 11-----------=====
//WORKING WITH ARRAYS
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
//FOREACH WITH ARRAYS
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

//1(DISPLAY MOVEMENTS)
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
//148 CODING CHALLANGE:

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

//2(CLACULATING DISPLAY BALANCE)
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
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
console.log(max); //3000
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
  .filter(mov => mov > 0)
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
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * 1.2) / 100)
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
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements); //(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(firstWithdrawal); //-400

//DIFFERENCES BETWEEN FILTER AND FIND:
//filter returns all the el's that match the condition while the find only returns the 1st one,
//filter method returns a new array while find only returns the el itself

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account); //{owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}

//the goal of find method is to exactly find one el
*/

//-----------------------------------------------------------------------------
//158 IMPLEMENTING LOGIN
/*
//EVENT LISTENERS
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  //console.log('login');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and welcome message
    labelWelcome.textContent = `wlecome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //display movements
    //display balance
    //display summary
  }
});
//when we click the login the page is reloaded, because this is the btn in a form element, and so in html
//the default behaviour, when we click the submit but, is for the page to reload, so we need to stop that
//from happening, and for that we need to give this fn the event parameter, and let's just call event, on
//that event we can call a method called prevent default, this will then prevent this form from submitting

//in form whenever we have one of these form inputted, and then if we hit enter, then that will actually
//automatically trigger a click event on this button, hitting enter on any of these fields is exactly same
//as the user clicking, so boith of these things willl trigger a click event

//so actually we need to find an account from the accounts array with the username that the user inputted
//and after getting the account array, now all we need to do is inorder to actually login, is to check if
//the pin is correct

//if current pin is correct and account exist then we have to display ui
*/

//-----------------------------------------------------------------------------
//159 IMPLEMENTING TRANSFERS

//-----------------------------------------------------------------------------
//160 THE FINDINDEX METHOD:
//this method works almost same as find but as the name says that, findIndex returns the index of the found
//el and not the el itself

//-----------------------------------------------------------------------------
//161 SOME AND EVERY METHOD:
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

//-----------------------------------------------------------------------------
//162 FLAT AND FLATMAP:
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

//-----------------------------------------------------------------------------
//163 SORTING ARRAYS:
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

//-----------------------------------------------------------------------------
//164 MORE WAYS OF CREATING AND FILLING ARRAYS:
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

//----------SECTION 11-----------=====
//WORKING WITH ARRAYS
/*
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

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));
console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
//{weight: 13, curFood: 275, owners: Array(2), recFood: 191.69710117664528}

console.log(
  `"Sarah dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? 'too much' : 'too little'
  }`
);
//"Sarah dog is eating too much

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch); //(3) ['Matilda', 'Sarah', 'John']

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle); //(3) ['Alice', 'Bob', 'Michael']
console.log(`${ownersEatTooMuch.join('and')}'s dogs eat too much! `);
console.log(`${ownersEatTooLittle.join('and')}'s dogs eat too little! `);

console.log(`${dogs.some(dog => dog.curFood === dog.recFood)}`); //false
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(`${dogs.some(checkEatingOkay)}`); //true

console.log(dogs.filter(checkEatingOkay));

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

*/

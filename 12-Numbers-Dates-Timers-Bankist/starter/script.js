'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2022-12-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2023-04-02T10:17:24.185Z',
    '2023-05-03T14:11:59.604Z',
    '2023-05-04T17:01:17.194Z',
    '2023-05-03T23:36:17.929Z',
    '2023-05-06T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-12-01T13:15:33.035Z',
    '2022-12-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2023-05-01T18:49:59.371Z',
    '2023-05-02T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return 'today';
  if (daysPassed === 1) return 'yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
  //display movements with 2 decimals using toFixed()
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //in each call print the remaining time to UI
    labelTimer.textContent = `${min}: ${sec}`;

    //when 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `login to get started`;
      containerApp.style.opacity = 0;
    }

    //decrease 1 second
    time--;
  };

  //set the timer to 5min
  let time = 10;
  //when we login both the users then the 2 timer will run at the same time, whenever we log a user in, we check
  //if there is already a timer running and if so, then we stop the timer

  //call the timer every second

  //this fn hear executes after 1 second, so this fn is not called immediately, it will only get called
  //the 1st time after 1 second but infact we want to call this fn immediately, so we have to export this
  //into a separate fn then call it immediately and then also start calling it every second using setInterval
  //fn
  tick(); ///right away this fn is called and after that every one second
  const timer = setInterval(tick, 1000);

  return timer; //this is important because to clear the timer, so to use clearinterval fn, we need the timer
  //variable
};

let currentAccount, timer;

//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//const now = new Date();
//setting this to formatted state, Intl name space for internationalizing api and for times and dates we use
//.DateTimeFormat, now all that we need to pass into this fn is a so-called locale string, and this locale
//is usually the lang and then lang- country, so all of this will create a formatter for this lang in this
//country and then on that formatter, we can call .format and in that we can pass in the date, that we want
//to perform, right now it only display date but not time, so we can change that by providing an options obj
//to DateTimeformat fn, so define options obj outside, for month we can have numeric,long and 2-digit,short
//narrow
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
// };

// //to get the locale from the user interface lets define the var outside
// const locale = navigator.language;
// console.log(locale);
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date and time
    const now = new Date();
    const options = {
      hours: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      //weekday: 'long',
    };
    //const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hours = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);
    // //before As of 05/03/2037
    // labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`;
    //As of Fri May 05 2023 17:42:34 GMT-0500 (Central Daylight Time), we really want the day,month,year and
    //want to display it in this format
    //day/month/year

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //reset the timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  //rounding the loan amount using Math.floor
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      //Add transfer Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //reset the timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//----------SECTION 12-----------
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

//-----------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------
//175 CREATING DATES:
/*
//when we built real worl applications one type of data that comes up all the time is dates and time
//FUNDAMENTALS OF DATES AND TIMES:

//DATES:
//1st we have to create a date
//Create a Date: 4 ways of creating a date, they all use the new Date constructor fn, but they can accept
//diff parameters

//1)simply to add new Date constructor, and assign it to variable:

const now = new Date();
console.log(now); //Fri May 05 2023 17:02:47 GMT-0500 (Central Daylight Time)
//we get the current date and time at very moment

//2)is to parse the date from a date string
console.log(new Date('May 05 2023 17:02:47')); //Fri May 05 2023 17:02:47 GMT-0500 (Central Daylight Time)
//it will parse the time based on the given string

console.log(new Date('December 27 2020')); //Sun Dec 27 2020 00:00:00 GMT-0600 (Central Standard Time)
//js is pretty smart in parsing out the string, however it is generally not a good idea to do this, because
//it can be quite unreliable

//however if the string was actually created by js itself, then it is pretty safe

//in our application we have movement dates so lets parse these dates
console.log(new Date(account1.movementsDates[0])); //Mon Nov 18 2019 15:31:17 GMT-0600 (Central Standard Time)
//2019-11-18T21:31:17.178Z Z here means the UTC, coordinated universal time, which is basically the time
//without any timezone in London and also without any day light saving, this is based on a string

//3)we can also pass in a year, month, day, hour,minute even second into this constructor

console.log(new Date(2037, 10, 19, 15, 23, 5));
//Thu Nov 19 2037 15:23:05 GMT-0600 (Central Standard Time), here we have 10 but november is actually the
//month 11, that means that the month here in js is 0 based, js actually autocorrects the day

console.log(new Date(2037, 10, 31)); //we know that november has 30 days but we specify 31
//Tue Dec 01 2037 00:00:00 GMT-0600 (Central Standard Time)
//js will autocorrect it to the next day

//4)we can also pass the amount of ms passed since the beginning of the UNIX time, which is jan1 1970
console.log(new Date(0));
//Wed Dec 31 1969 18:00:00 GMT-0600 (Central Standard Time)
//0 ms after initial unix time

//3 days after this
console.log(new Date(3 * 24 * 60 * 60) * 1000);
//3 days 24 hours * 60 minutes * 60 seconds * 1000milliseconds
//converting days to ms //259200000

//this number we calculated here is a timestamp, we call timestamp of day number 3
//these dates we created here are just another type of sepcial objects, therfore they have their own methods
//we can use these methods to get or set components of the dates

//WORKING WITH DATES:
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //Thu Nov 19 2037 15:23:00 GMT-0600 (Central Standard Time)
//to get full year
console.log(future.getFullYear()); //2037
//to get a month(month is 0 based)
console.log(future.getMonth()); //10
//to get date(this is actually a day)
console.log(future.getDate()); //19
//to get day(day is actually the day of the week)
console.log(future.getDay()); //4
//hours,minutes,seconds
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
//we can get a nicely formatted string
console.log(future.toISOString()); //2037-11-19T21:23:00.000Z, this is the iso string, which follows some
//kind of international standard

//TOISOSTRING: converts date obj to string
//when we want to comnvert date obj into a string we use toISOString

//we can also get the time stamp for the date
console.log(future.getTime()); //2142278580000

//when we want to create a new date based on milli seconds
console.log(new Date(2142278580000)); //Thu Nov 19 2037 15:23:00 GMT-0600 (Central Standard Time)

//DATE.NOW: will gives us the current time stamp
//to get a time stamp right now, if we want simply the current time stamp, for this exact movement
console.log(Date.now()); //1683326019133

//SET METHODS FOR ALL OF THESE VERSIONS
future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040 15:23:00 GMT-0600 (Central Standard Time)
*/

//-----------------------------------------------------------------------------
//176 ADDING DATES TO BANKIST APP
//we have date near current balance and in all movements
//1st we have to do is to fake it that we always login
/*
currentAcccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

//lets start by displaying the current bal, lets now create this date 
*/

//-----------------------------------------------------------------------------
//177 OPERATIONS WITH DATES
/*
//one thing we can do with dates is to do calculations with them, we can subtract one date from another date
//inorder to calculate how many days have passed b/w the 2 dates, this works because whenever we attempt
//to convert a date to a number, then the result is going to be the timestamp in ms, and with these ms, we
//can then perform calculations

const future = new Date(2037, 10, 19, 15, 23);
//converting date to a number
console.log(Number(future)); //2142278580000 we will gte a timestamp

//creating a fn that takes in 2 dates and going to return the number of days thta pass b/w these 1 dates
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = calcDaysPassed(
  new Date(2037, 3, 14),
  new Date(2037, 3, 24) //10.4222
);
console.log(days1); //864000000 i.e 10 days

//now converting this 864000000 to days so divide it to 1000 * 60min * 60 hors * 60 days
*/

//-----------------------------------------------------------------------------
//178 INTERNATIONALIZING DATES(INTL):
//js has a new internationalzing api, all it us is to easily format numbers and strings according to diff
//languages, so with this new api, we can make our application support diff languages fro users around the
//world

//in our application we have dates in 2 places, 1st near current balance and in movements

//-----------------------------------------------------------------------------
//179: INTERNATIONALIZING NUMBERS (INTL):
/*
const num = 3884764.23;
const options = {
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'EUR',
  //useGrouping: false,
};
//there are 3 diff options for style they are unit,percent,currency, if we have curreny then unit is ignored
//but we do have to define currency, we should set currency manually, we can also turn off or on the grouping
//useGrouping 3884764.23 the number is just printed without separators
console.log('US:', new Intl.NumberFormat('en-US', options).format(num)); //US: 3,884,764.23
console.log('GERMANY:', new Intl.NumberFormat('de-DE', options).format(num)); //GERMANY: 3.884.764,23
console.log('SYRIA:', new Intl.NumberFormat('ar-SY', options).format(num)); ///SYRIA: ٣٬٨٨٤٬٧٦٤٫٢٣
console.log(
  'Browser:',
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

//-----------------------------------------------------------------------------
//180: TIMERS: setTimeout AND setInterval:
/*
//we have to kinds of timers:
//SET TIMEOUT TIMER (setTimeout): runs just once, after a defined time
//SET INTERVAL TIMER(setInterval): keeps running forever until we stop

//we can use setTimeout to execute some code at some point in the future, so lets use this to simulate
//ordering pizza, so when we order pizza it does'nt arrive right away instead it takes some time, and we can
//simulate that, let's write setTimeout and this fn receives a callback fn, so just like some array methods,
//or dom handler fn's, this callback fn is the 1st argument of setTimeout fn, we do nmot call this fn, we
//simply pass in this fn as an argument to setTimeout, and it is this fn, who will then call our callback fn
//in the future, and when that future arrive? that is what we specify the 2nd argument, so here we will pass
//in the amount of milli seconds, that will pass until this fn is called, lets say we will call this fn after
//3 sec

//setTimout: simply schedules a fn to run after a certain amount of time, but the callback fn is only executed
//once
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
//here is your pizza with olives and spinach

//we really delayed calling this fn, we can also say that we schedule this fn call for 3seconds later
//the code execution does not stop here at this point, so when execution of our code reaches this point, it
//will simply call the setTimeout fn, it will then essentially register this callback fn here to be called
//later, and then the code execution simply continues
console.log('waiting');

//as soon as js hits this line of code, it will basically keep counting the time in the bg and register
//this callback fn to be called after that time has elapsed and then immediately js will move on to the next
//line, this mechanism is called asynchronous js,

//what if we want to pass some arguments into this fn, it is not that simple as we not calling this fn, and so
//we cannot pass in the arguments while calling, setTimeout has a solution for that, so basically all the
//arguments that we pass after the delay will be arguments to the fn, indeed the 3rd argument thta we passed
//in will now become the 1st argument, or 1st parameter of this fn

//we can actually cancel the timer, atleast until the delay has actually passed, so before these 3 sec have
//passed, we can cancel the timeout, so 1st keeping ingredients into an array

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//improving our app by implemeting the timer to simulate the approval loan, when we click the btn to request
//a loan then we get the value immediately right now but typically a bank takes some time like some days,
//or some weeks to approve that loan

//WHAT IF WE WANT TO RUN A FN OVER AND OVER AGAIN like every 5sec, for that we have setInterval fn

//SETINTERVAL(setInterval):
//Creating a setInterval fn to basically create a clock that will disply in our console, every second a new
//date is created
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
*/
//-----------------------------------------------------------------------------
//181: IMPLEMENTING A COUNTDOWN TIMER
//for security reasons, real bank applications will logout users after some inactive time, like after 5 min
//without doing anything

//whenever the user logs in the logout timer will start or restart, then as soon as the logout timer expires
//which will be like after 5 or 10 min then we want to log the user out, the place where we want to logout
//timer is in login fn
//lets create alogout fn and this fn does not requires any arguments, all it does is to basically export
//some functionality into an external fn,
//1)we will start by setting the time,
//2)then we want to call the timer every second,
//3)then in each call, print the remaining time to the user interface
//when the time is at 0,, so after timer is basically expired stop timer and logout the user

//another functionality that we want our timers to have is to reset once we do something in the account because
//the goal fo this timer here is to track the inactivity of the user, so the time where the user does'nt do
//anything but if i do something, lets sat  transfer money, then we should be not get logged out it should be reset
//it, what we ned to do is to also reset the timer whenever the user does a transfer or loan, all we need to
//do is to clear interval using the timer that we already and then start it again

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//----------SECTION 16 AYSYNCHRONOUS JS: PROMISES, ASYNC,/AWAIT AND AJAX-----------
//246: ASYNCHRONOUS JS, AJAX, APIS:
//now to understand  what asynchronous js code actually is , we 1st need to understand what synchronous
//code is, so most of the code that we've been writing so far n the course has been synchronous code

//SYNCRONOUS:simply means that the code is executed line by line, in the exact order of execution that we
//define in our code, just like in this small ex
// const p = document.querySelector('.p');
// p.textContent = 'my name is jonas';
// alert('text set');
// p.style.color = 'red';

//so as the 1st line of code is reached in the execution, it is simply executed in the execution of thread
//execution thread is a part of execution context, which does actually execute the code in the computers
//processor, the next line of code is executed and the next one, all in sequence, so each line of code
//always waits for the previous line to finish execution

//now this can create problems when one line of code takes a long time to run, for ex n this current line
//of code we have an alert statement, which created this alert window now as we've experienced in the past
//this alert window will block the code execution, so nothing will happen on the page until we click that
//ok button and only then the code can continue executing, and so the alert statement is a perfect ex
//of a long running operation, which blicks execution of the code, so again only after we click ok, the
//window disappears and the next line can run, this is the problrm with the syncroinous code, now most of
//the time synchronous code is fine and makes perfect sense,

//but imagine that execution would have to wait for ex 5sec timer to finish, that wejust be terrible, bcoz
//meanwhile nothing on the page would work during these 5 sec, that is where asynchronous code comes into
//play, so this ex conatins the 5sec timer
// const p = document.querySelector('.p');
// setTimeout(function () {
//   p.textContent = 'my name is jonas';
// }, 5000);
// p.style.color = 'red';

//1st line of code is still synchronous here, and we alsp moved to the 2nd line in a synchronous way, but
//here we encountered the setTimeout() fn, which will basically start a timer in an asynchronous way, so this
//means thta the timer will essentailly run in the bg withuot preventing the main code from executing, we
//also register a callback fn, which will not be executed now, but only after the timer has finished running
//and we have actually done this many times, now this callback fn is asynchronous js, and it is asynchronous
//becoz it's only going to be executed after a task that is running in the bg finishes execution, in this
//case it is the timer, so this callback that just talked about is registered, and then we immediately move
//on to the next line, so the main code is not being blocked, and execution does not wait for the asynchronous
//timer to finish its work, that is the big diff b/w synchronous and asynchronous

//sp previoulsy we had to wait for the user to click on the alert window to continue execution and again
//that is becoz alert is blocking synchronous code, but now with this timer, the callback is actually
//asynchrnous, so it's only gonna be executed after the timer has finished, and so therefore we say, that
//it's non-blocking because in the mean time the rest of the code can keep running normally

//now when the timer finally finishes after 5 sec, the callback fn will finally be executed as well,we can
//see that this callback runs after all the other code, even though in the code, it does/nt appear at the end
//and so basically an action was deferred into the future in order to make the code non-blocking

//ASYNCHRONOUS:
//asynchronous programming is all abt coordinating the behaviour of our prgm over a certain period of time
//asynchornous literally means not occurring at the same time

//as we saw in this ex we need a callback to implement this asynchronous behaviour, however that does not
//mean that callback fn's automatically make code asynchronous

//for ex the array map method accepts a callback fn as well, but that does not make the code asynchronous
//only certain fn's such as setTimeout() work in an asynchronous way, we just have to know which ones do
//and which ones dont

// const img = document.querySelector('.dog');
// img.src = 'dog.jpg';
// img.addEventListener('load', function () {
//   img.classList.add('fadeIn');
// });
// p.style.width = '300px';

//1st 2 lines run in a synchronous way one after the other, now in this 2nd line we set the src attribute
//of the img that we selecting in line 1, and this operation is actually synchronous, so setting the src
//attribute of any img is essentially loading an img in the bg while the rest of the code can keep running
//imagine that is a huge img, we would'nt want our entire code to wait for the img to load, and that is why
//setting the src attribute was implemented in js in an asynchronous way, now once the img has finished
//loading, a load event will automatically be emitted by js, and so we can then listen for that event in
//order to act on it, listening for the load event is exactly what we do here in the next line

//here we use addEvent and register a callback fn fro the load event, we provide a callback fn that will be
//executed once the img has been loaded and not right away, becoz again, all this code is non-blocking
//so instead of blocking, execution moves on right to the next line immediately, then once the img is
//completely loaded, it;s displayed on the webpage and the load event is emitted, since we are lsitening
//for the event our callback fn is executed

//we deferred an action into the future making the code asynchronous and non-blocking

//event listeners alone do not make code asynchronous, just like callback fn's alone

//an event listener listening for a click on a btn is not doing any work in the bg, its simply waiting
//for a click to happen, but it is not doing anything, so there is no asynchronous behaviour involved at all

//what makes this img code asynchronous is simply the fact that the img is loading asynchronously in the
//bg but not the fact that we are listening for the load event to happen

//asynchronous behvaiour of a task like running a timer or loading an img and there are more ex of asynchronous
//behvaiour in js like the geolocation api or ajax calls

//AJAX:calls are probably the most imp usecase of js asynchronous behaviour

////AJAX
//WHAT ARE AJAX CALLS:so AJAX stands for asynchronous javascipt and XML, basically it allows us to
//communicate with remote web servers in an asynchronous way, in practice we make AJAX calls in our code
//inorder to request some data from a web server dynamically, so without reloading the page, so that we can
//use that data in our application dynamically,

//HOW AJAX WORKS?
//so lets say we have our js application running in the browser, which is also called the client, and we want
//the application to get some data from a web server. and lets say the data about countries, so with AJAX
//we can do an HTTP request to the server, which has this data, and the server will then set back response
//containing that data that we requested, this back and forth b/w client and server all happens aysnchronously
//in the bg, and there can even be diff types of requests,
//TYPES OF REQUEST:
//1)GET: get request to receive data
//2)POST: to send data to a server

//when we are asking a server to send us some data, this server usually conatins a web API.this API is the
//one that has the data that we are asking for, so an API is something important

//API (APPLICATION PROGRAMMING INTERFACE): is a peice of software that can be used by another software
//in order to basically allow applications to talk to each other and exchange information

//in js and web development there are countless API'S
//DOM API, Geolocation API,
//these are called API because they are self-contained peice of software that allow other peices of software
//to interact with them, we can always implement a small and simply API in a class where we make some methods
//available as a public interface, so again objects made from a class can be seened as self-contained
//encapusulated pieces of software that other peices of software can interact with them

//THE MOST IMPORANT API  WHEN USING AJAX:
//the most important api that we are interested in when we use AJAX, and that are APIS that are like to
//call Online APIS

//ONLINE APIS: an online api is essentially an application running on a web server, which receives requests
//for data, then retrieves this data from some database and then sends it back to the client, now when
//building applications in practice, we simply call these online API'S, API , and many people will also
//call these API'S, Web API's

//we can build our own online api's, but that requires backend dvelopment, so developemnt with servers and
//databases, now we are interested in using 3rd party API's, so API's that other developers make available
//for us

//lets now imagine that you are building a travelling app and you have a database with diff destinations
//and tours that you are offering, so on your own server, you can build your own api that can receive requests
//from your front end application in js and send back the results, so that would be your own API hosted on
//your own server, but that alone would probably not enough to build a complete application, and so you
//could also use 3rd part API's, and there are really API's for everything, so in our ex, travel application
//you could use an API to get whether data in your destinations, data abt the destination countries themselves
//data abt flights, abt curreny consversions and you could even use API's to send Emails or text msgs or
//embed google maps into your applications

//we can even say that API's is what made the modern world web as you know it

//API DATA FORMATS:
//so AJAX stands for asynchronous javascript and XML, so the X there for XML, XML is a data format, which
//used to be widely used to transmit data on web, however these days basically no API's uses XML data
//anymore the term AJAX is just an old name that got very popular back in the day, and so its still used
//today even thoght we dont use XML anymore,

//so instead most API's these days use the JSON data format, so JSON is the most popular data format today
//because it is basically just a js obj but converted into a string, and therfore it is very easy to
//send across the web and also to use in js once the data arrives

//-----------------------------------------------------------------------------
//247: IMPORTANT: API URL CHANGE
/*
The base URL of the API used throughout this section has changed

It's not a big deal, it's really just one small change. Instead of:

https://restcountries.eu/rest/v2/

It's now:

https://restcountries.com/v2/

So whenever we use the Countries API in this section, please just change the URL you see in the videos to this new one.

Happy learning ✌️
*/

//-----------------------------------------------------------------------------
//248: OUR FIRST AJAX CALL: XMLHTTP REQUEST:
//in this lecture we gonna build a nice ui component, which contains data about a certain country, and this
//data abt countries is gonna come from a 3rd part online api

//in js there are multiple ways of doing AJAX calls, lets starts with XML http request fn, we can do
//const request = new XMLHttpRequest(); we call this fn then all we need to do for now is to store the result in a new var
//this is the old school way of doing AJAX in js, next we need a url to which we make the AJAX call
//we can now say,request.open(), in here we need to pass in the type of request, the type of HTTP request
//to get data is simple GET and 2nd we need a string containing the url to which the AJAX call should actually
//be made,

//on github there is a huge repository, public API's, there will tons of public api's that we can use, in
//that we can use rest countries api it does need any authentication and it uses HTTPS, and when we click
//it there will be an API end point,

//ENDPOINT: is essentially just another name for the url that we need, we had for all countires and if we want
//api for certain country we use search by name we are going to use
//https://restcountries.com/v3.1/name/{name}

//with this we basically opened a request and now we also need to send it by using request.send(), this
//will now send now send off the request to this url

//now inorder to get the result, we could'nt simply do somthing like this, set some variable to the result
//data = request.send(), the reason why we cannot do this is because the result is simply not yet there, so
//this ajax call that we just send off here is being done in the bg, while the rest of the code keeps running
//and so this is the asynchronous, non-blocking behavior, instead we need to register a callback on the
//request obj for the load event, we basically sendoff the request, that request then fetches the data in
//the bg and then once that is done, it will emit the load event, and so using this event listener, we are
//waiting for that event, and as soon as the data arrives, this callback fn is called then we can log the
//result, the this keyword inside of this fn is the request, and the response in the property response text
//this prop is gonna only set once the data has arrived

//now we just need to convert to an actual js object, because what we have right now is JSON
//JSON is basically just a big string of text by JSON.parse(this.responseText), so indeed we have here an
//obj with all data about portugal, this is an array containing one object, so we can destructure

//we call this fn and store it into a new variable
// const request = new XMLHttpRequest();
//we need a url to which we make the ajax call
// //with this we opened a request
// request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
// //to send request
// request.send();

// request.addEventListener('load', function () {
//   console.log(this.responseText);// The data is in json
//   //converting JSON
// });

// const request = new XMLHttpRequest();
// //we need a url to which we make the ajax call
// //with this we opened a request
// request.open('GET', 'https://restcountries.com/v3.1/name/india');
// //to send request
// request.send();

// request.addEventListener('load', function () {
//   console.log(this.responseText); // The data is in json
//   const [data] = JSON.parse(this.responseText);
//   //so indeed we have here an obj with all data about portugal, so we can destructure, it gives an obj
//   console.log(data);
//   //now we can actually build the car component, get from html file replace the data with obj
//   const html = ` <article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span></p>
//     <p class="country__row"><span>💰</span>CUR</p>
//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// });
//for population it is 10 million, so we dont want to display the entire number so lets round it to 10.3
//something, we can do that by converting this to number, then divide by a million and round that value
//finally

//for languages it is basically an array, what we want is the 1st el of languages and then the name, and the
//same with the currencies an insert this into our html page

// //we call this fn and store it into a new variable
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  // //we need a url to which we make the ajax call
  // //with this we opened a request
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  // //to send request
  request.send();

  request.addEventListener('load', function () {
    console.log(this.responseText); // The data is in json
    //converting JSON(json is realyy a big string of text)
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //{name: {…}, tld: Array(1), cca2: 'PT', ccn3: '620', cca3: 'PRT', …}
    //we have an obj with all the data about the portugal, this is an array containing one obj, so we can destructure

    //we can built the card component, lets copy html from index, we can create a template literal and
    //replace the data
    const html = ` <article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${+(
      data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('portugal');
getCountryData('usa');
getCountryData('india');
*/
//for languages it is basically an array, we want the 1st el of the languages and the name

//we can reuse the same code to create an el like this for multiple countries, so we put all of this into
//a fn, this one will take string as an i/p of a country, so instead of hardcording portugal we can use
//country that we get as an i/p

//now we can call this fn

//now we have data about 2 countries, now by calling these 2 fn's twice, we will basically have 2 ajax calls
//happening at the same time, so if we reaload the page here couple of times now then they might appear in
//diff order, the reason for that is basically that the data arrives at slightly diff time, ecah time that
//we are loading the page, so infact this realyy shows the non-blocking behaviour in action, so as we call
//getCountryData('portugal'); with potugal, for the very 1st time , it sends of this request and then js
//will moves on in the code right away, so it goes right here in the next line getCountryData('usa');, and
//this ofcourse fires off another ajax call immediately way before the data of the portugal has actually
//arrived, so gain we will have 2 ajax calls happening at the same time, and so whatever one arrives 1st
//will then fire the load event 1st, and so the 1st one is to ajax call for the usa, well then the 1st
//el thta is gonna be printed here will of course, be the one from usa, and only after that the data
//for portugal arrives, and then this call bcak fn here is called with the data of portugal

//now if we actually wanted these requests to be made in a specific, like predefined order,, then we would
//basically have to chain the requests, which means to make the 2nd request, only after the 1sr request
//has finished

//-----------------------------------------------------------------------------
//249: [OPTIONAL]: HOW WEB WORKS: REQUESTS AND RESPONSES:

//client     ----------------->(request)   web server
//           <-------------------(response)

//whenever we try to access a web server, the browser which is client, sends a request to the server and the
//server will then send back a resonse and that response contains the data or the web page that we requested

//REQUEST RESONSE MODEL or CLIENT-SERVER ARCHITECTURE
//this process works exact same way no matter if we are accessing an entire web page or just some data from
//a web api, this whole process actually has a name and it is called request response model or client-server
//architecture

//lets use the ex of the url that we used in last lecture to get our countyr data

//https://restcountries.com/v2/name/${country}
//now every url gets an HTTP or HTTPS which is for the protocol that we used on this connection, then we have
//a domain name, which is the restcountries.com and also after slash, we have a so-called (v2) resource that
//we want to access, now this domain name restcountries.com is actually not the real address of the server
//that we are trying to access, it is really just a nice name that is easy for us to remember, but what is
//thta means is that we need a way of kind of converting the domain name to the real address of the server

//and that happens through a so-called D-N-S
//DNS(DOMAIN NAME SERVER): These are a special kind of servers, so they are basically like the phone books
//of the internet, so the 1st step that happens when we access any web server is that the browser makes
//a request to a DNS and this special server will then simply match the web address of the url to the
//servers real IP address, this all happens through your internet service provider

//the domain is not the real address and that a DNS will convert the domain to the real IP address, and then
//after the real IP address has been sent back to the browser, we can finally call it

//once we have the real ip address, a tcp socket is established b/w the browser and the server, and so they
//are now finally connected, and this connection is typically kept alive fro th entire time that it takes
//to transfer all the files of the website or all data

//WHAT ARE TCP AND IP?
//TCP: transmission control protocol
//IP: internet protocol

//they are communication protocols that define exactly how data travels across the web, they are basically
//the internet's fundamental control systems, because again they are the ones who set the rules about how
//data moves on the internet

//now its time to finally make our request, and the request that we make is an HTTP request, where HTTP
//stands for hypertext transfer protocol

//after TCP/IP, HTTP is another communication protocol, a communication protocol is simply a sysytem of rules
//thta allows us 2 or more parties to communicate

//now in the case of HTTP, it's just a protocol that allows client and webserver to communicate, and thta
//works by sending requests and resonse messages from client to the server and back, now a request msg
//looks somthing like this

// GET /rest/v2/alpha/PT HTTP/1.1  -----> start line ->  this contains the HTTP method that is used in
//the request, and then the request target and then the HTTP version
//HTTP method + request target + http version
//so about the http methods there are many available, but the most important ones are GET, for simply
//requesting data,  POST for sending data and PUT and PATCH, to basically modify data, so you will see that

//HTTP request: to a server is not only for getting data, but we can also send data
//Request data: This is where the server is told that we want to access the rest/v2/alpha resource, so we had
//this in the url before and now it is simply sent as the target in the HTTP request, and so then the server
//can figure out what to do with it, now if the target was empty, so of it was just a slash then we would
//be accessing the website's route, which is just restcountries.eu in this example

//then the next part of the requests or the request headers: which is just some info that we sent about the
//equest itself, there are tons of standared different headers, like what browser is used to make the request
//at what time, the user's language and many more
// Host: www.google.com
// user-agent: Mozilla/5.0
// Accept-Language: en-US
//<body>

//now finally in the case where we are sending the data to the server, there will also be the request body,
//and that body will contain the data that we're sending, for ex coming from an HTML FORM,
//that is the HTTP request

//it is not our developers who manually write these HTTP requests, there is also HTTPS

//DIFFERENCE BETWEEN HTTP AND HTTPS:
//HTTPS: is encrypted using TLS OR SSL, which are yet some other protocols, but besides that the behind
//the HTTP requests and responses still applies to HTTPS

//so our request is formed and now it hits the server, which will then be working on it until it has our
//data or web page eady to send back, and once it is ready, it will send it back using, an HTTP response
//and the HTTP response message actually looks quite similar to the request, so also with a start line
//headers nd a body

//now in this case the start line has besides the version also a status code and a message
//HTTP/1.1 200 ok
//HTTP VERSION + status code + status message
//these are used to let the client know whether the request has been successful or failed, for example 200
//means ok and the status code thta everyone knows is 404, which menas page not found, so that is where this
//404 code, that everyone already know, comes from, then the respnose headers  are info about the esponse
//itself, so just like before, and there are ton available and we can also make up our own actually
//and finally the last part of the reosnse is again the body, which is present in most repsonses, and this
//body usually contains the JSON data coming back from an API or HTML of the web page that we are requested
//

//we only just did one request to restcoutires.au and got one response back, thta is how it is going to work
//when all we do is to access an API, however, if it's a web page that we are acceswsing, then there will be
//many more requests and responses, and that is because when we do the 1st request, all we get back is just
//the initial HTML file, that HTML file will then get scanned by the browser for all the assets that it needs
//in order to build the entire web page like js, css, image files etc.., and then for ecah diff file, there
//will be a new HTTP request made to the server, so basically this entire back and forth b/w client and server
//happens for every single file that is included n the web page, however there can be mutilple requests
//and responses happening at the same time, but the maount is still limited bcoz otherwise the connection
//would start to slow down, but anyway, when all the files have finaaly arrived, then the web page can be
//rendered in the browser, according to the HTML, css and js specifications

//now as the final piece of the puzzle, let's talk about tcp/ip

//TCP AND IP are the communication protocols that define how data travels across the web
//the job of TCP is to break the requests and responses into 1000's of small chunks, called packets before
//they are sent, once the small packets arrive at their final destination, tcp will reassemble all the
//packets into the original request or repsonse, this is necessary so that each packet can take a diff
//route through the internet, because this way the message arrives at the destination as quick as possible
//which would not be possible if we sent the entire data simply as a big chunk, as a second part

//th job of IP protocol is to actually send and route these packets through the internet, so it ensures
//that they arrive at the destination they should go, using IP address on each packet

//-----------------------------------------------------------------------------
//250: WELCOME TO CALLBACK HELL:
//in last lecture we  did a simple ajax call to fetch data from a country's api, so we created a fn for that
//and we call the fn mulitple times , multiple ajax calls were made at the same time, so they were basically
//running in parallel, and we could not control which one finished 1st, in this lecture lets create a
//sequence of ajax calls, so that the 2nd one runs only after the 1st one has finished, so in the countries
//property here there is some prop called bordering countries this one has the code ESP which stands for spain
//, what we will do now is after the 1st ajax call is completed we will get this border, and then based on
//this code, we will also render the neighbouring country right here besides the original country, and so
//in this case the 2nd ajax call really depends on the 1st one, because the data abt the neighbouring
//counties,is ofcourse a result of the 1st call so without the 1st call, we would'nt even know which data
//to fetch in the 2nd call, and so what we need to implement is a sequence of ajax call
/*
const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${+(
      data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country 1
    renderCountry(data);

    //lets get the neoghbour country(2)
    //take the 1st el, there also countries which has no neighbours at all
    //so islands basically so for these cases, lets simply make sure we dont run any mistakes, so return
    //immediately

    const neighbour = data.borders;
    if (!neighbour) return;

    //ajax call country (2), in 2nd call we want neighbours, but there is one particularity because in the
    //border, the country doesnt come with the name of the country, but with this code, by using the api
    //we can also search by code, so all we have to change here is name to alpha

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    //we have a callback inside another one
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      //console.log(data2);
      //the response of this api call is no longer an array, when we serach for a code, and so countyr codes
      //are unique, so therefore they can always just be one result
      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour('portugal');

//we created a special class, for the neighbouring country so that it appears littel smaller, so when it is
//a neighbour we need to attach some class to the country and by defualt we set it to nothing

//here we have nested callbacks

//CALLBACK HELL: is when we have a lot of nested callbacks inorder to execute asynchornous tasks in sequence
//this happens for all asynchronous tasks, which are handled by callbacks and just ajax calls

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//     }),
//       1000;
//   }),
//     1000;
// }),
//   1000;
*/
//-----------------------------------------------------------------------------
//251: PROMISES AND THE FETCH API:
//We can escape callback hell from promises

//we can now replace the old XMLHTTP request fn with the modern way of making ajax calls and that is by using
//the fetch API

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//now all we need to do is to call fetch and then with our url all that we need to do now is to store it
//in the variable
//const request = fetch('https://restcountries.com/v2/name/portugal');
//now there actually one more options that we can specify here in the fetch fn, but to make a simple get
//request like this one all we really need to pass in the url
//console.log(request); //Promise {<pending>}
//fetch fn immediately returned a promise here, so as soon as we started request, we stored the result of
//that into a request variable, and then as we logged it , we immediately got the promise

//PROMISE: it is an obj that is used basically as a place holder for the future result of an asunchronous
//operation

//we can also say that a promise is like a container for an asynchronous delivered value

//or promise is a container for a future value
//a conatiner a plcaholder for a future value, and the perfect ex of a future value is the response coming
//from an ajax call, so when we start an ajax call, there is no value yet, but we know that there will be
//some value in the future, and so we can use a promise to handle this future value

//ADVANTAGES OF PROMISES:
//1)by using promises  we no longer need to rely on events and callback fn's to handle synchronous results
//events and callback fn's can sometimes cause unpredectable results
//2)with promises we can chain promises for a sequence of asynchronous operations instead of nesting, with this
//we can finally escape the callback hell, promises are es6 feature

//THE PROMISES LIFE CYCLE:
//now since promises work with asynchronous operations, they are time sensitive, so they change over time
//nd so promises can be in diff states, and this is what we call the life cycle of a promise

//so in the very beginning, we say that the promise is pending, and this is before any value resulting
//from the asynchronous task is available, now duting this time, the asynchronous task is still doing its
//work in the bg, then when the task finally finishes, we say that the promise is settled and there are 2
//diff types of settled promises and that is fulfilled promise and rejected promises

//FULLFILLED PROMISE:is a promise that has successfully resulted in a value just as we expect, for ex when
//we use the promise to fetch data from an api, a fulfilled promise successfully gets thta data and its now
//available to being used

//REJECTED PROMISE: there has been an error during the asynchronous task, in the ex of fetching data from
//an api, an error would be for ex, when the user is offline and cant connect to the api server

//a promise is only a settled one and so from there the state will remain unchanged forever so the promise
//as either fulfilled  or rejected, but it's impossible to change the state

//these diff states are relavant and useful when we use a promise to get a result, which is called to consume
//a promise, so we consume a promise when we have already a promise, for ex the promise that was returned
//from the fetch fn, but inorder for a promise to exist in the 1st place it must 1st be built, so it must
//be created in the case of fetch api its the fetch fn that build the promise and returns it for us to consume
//so this case we dont have to build the promise ourselves in order to consume it now most of the time we
//will actually just consumen promises, which is also easier and more useful part

//-----------------------------------------------------------------------------
//252: CONSMING PROMISES:
/*
//in this case we will consume a promise that was returned by the fetch fn, so lets
//now implement the get country data fn by using the promise

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   //fetch(`https://restcountries.com/v2/name/${country}`);
//   //calling the fetch fn like this will immediately returns a promise so as soon as we start the request
//   //in the beginning this promise is ofcourse still pending because the asynchronous task of getting the data
//   //is still running in the bg, now ofcourse at a certain point the promise will then be settled and either
//   //in a fulfilled or in a rejected state, but for now lets assume success, so assme that promise will be
//   //fulfilled and that we have a value available to work with, and so to handle this flfilled state,we can
//   //use the then method thta is available on all promises, so again, this here will return a promise, and
//   //on all promises we can call the then method, now into the then method we need to pass a callback fn
//   //that we want to be excuted  as soon as the promise is fulfilled, so as soon as the result is available
//   //so a fn and then this fn will actually receive one argument once its called by the js and that argument
//   //is the resulting value of the fullfilled promise lets call it a response here bcoz this is the reponse
//   //of an ajax call in this case, this is how we actually handle a fulfilled promise
//   fetch(`https://restcountries.com/v2/name/${country}`).then();
// };

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
getCountryData('portugal');
//Response {type: 'cors', url: 'https://restcountries.com/v2/name/portugal', redirected: false, status: 200, ok: true, …}
//now what we are really interested is the data itself so the data will be there in the body, now as we see
//the body is basically this readable stream, now actually we cannot yet really look at the data here, so
//in order tobe able to actually read  this data from the body, we need to call the JSON method on the repsonse
//so JSON is a method that is available on all repsonses of the fetch method //response.json();
//so again this json method here is a method that is available on all the responses obj's that is coming
//from the fetch fn, so all of the resolved values, and indeed this reponse here is infact a resolved value
//therefore thye json method is attached to it, now the pblm here is thta json fn itself , is actually
//also n asynchronous fn, and so what that means is that it will also return a new promise, what we actually
//need to do is to return the promise and we will need to handle that promise as well, and so the way to do
//that is to then call another then right here

//fetch fn here will return a promise and then we handled that promise using the then method, but then to
//actually read the data from the response, we need to call the json method on that response obj, now this 
//itself ill also return a promise, and so if we then turn that promise from this method then basically
//all of this becomes a new promise itself, and so since this is a promise  we can then agai, call the then
//method on that, and so then again we have a callback fn and this time we get access to the data, because the
//resolved value of this promise here is going to be the data itself, so basically the data that we are looking
//for, 
*/
/*
const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${+(
        data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
    console.log(data);
    const [neighbour] = data.borders;
    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};
//getCountryAndNeighbour('portugal');
//getCountryAndNeighbour('usa');

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData('portugal');

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData('portugal');
*/
//now all we have to do is to render country
//this fetches something and then we get a response which will be transformed to json, and then we take thta
//data and render the country to the DOM

//-----------------------------------------------------------------------------
//253: CHAINING PROMISES:
//how to chain promises in order to also render the neighbouring country of the initial country, we already
//have a small chain of promises becoz of json fn, and here these 2 then's called in sequence and are basically
//already a small chain,

//we 1st get data about the country, but then we also want to get the data about the neighbouring country
//and so again the 2nd ajax call depends on the data from the 1st call, and so they need to be done in
//sequence, the 2nd ajax needs to be happed in the then handler, so as soon as we get the data, then we need
//to get the neighbour country and do the ajax call for thta one as well
/*
const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);

const getCountryData = function (country) {
  //country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      //country2
      return fetch(`https://restcountries.com/v2/aplha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};
getCountryData('portugal');
*/

//what we need to do now is return this new promise for country 2 fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//because then whwn we do that, we will be able to chain a new then method on the result of this then method
//the then method always returns a promise, no matter if we are actually return anything or not, bt if we
//do return a value, then that value will become the fulfillment value of the return promise, by retrning
//this promise here, then the fulfilled value of the next then method will be the fulfilled value of the
//previous promise, basically this then method will returns a new promise and here we can then one more time
//handle the sucess value of that promise, so one more time we are calling it as a response, because here
//we are dealing with the fulfilled value of a fetch, and so that is the response, and here we need one more
//time call a json method and here again the fulfilled value of the promise will become that body so the data
//that is stored in the body and then we can again handle that
/*
const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};
getCountryData('portugal');
*/
//promises really allow us to handle these complex aynchronous operations with as many steps as we want
//right now we have 4 steps, here instead of the callback hell we have what we call a flat chain of
//promises

//a pretty common mistake that many beginners make, which is to basically chain this then method directly
//onto a new nested promise
const renderCountry = function (data) {
  const html = ` <article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${+(
      data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    //console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);
    const neighbour = data.border;
    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2);
    });
  });
};
getCountryData('portugal');
getCountryData('usa');

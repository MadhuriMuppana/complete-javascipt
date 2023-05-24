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

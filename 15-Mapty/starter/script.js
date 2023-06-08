'use strict';

// prettier-ignore

////231: HOW TO PLAN A WEB PROJECT:
//there are many diff ways of planning a project, in that i usually to start ot with a concept called user
//stories, and many companies and team use this idea of user stories

//USER STORY: is a description of the applications functionality from the user's perspective, and then all the
//user stories put up together will clear;y describe the functionality of the entire application, so user
//stories are basically a high level overview of the whole app,

//FEATURE: which will allow us developers to determine
//the exact features that we need to implement in order to make the user stories actually work as intended
//then to visualize the diff actions that a user can take, and how the program react to these actions, we

//FLOWCHART: usually put all these features into a flow chart, once we know xactly what we want to build, it's
//time to think how we 're gonna build, and this brings s to the

//PROJECT ARCHIECTURE, it simply means how will organize code, and what js features we will use, it holds
//all the code together, it gives us a structure in which we can then develop the app's functionalty
//

//1.User stories => 2.Features => 3.flow chart => 4.architecture    =====> development
//now we are done with the planning step, now we ready to finally move on to the development step, this
//is wher we are gonna implement the plan that we created using js code

//USER STORY: description of applications functionality from the users perspective, and all user stories
//put together, provide a clear picture of the application's whole functionality

//most common user story format
//as[type of a user], i want [an action], so that a [benifit]
//who(user or admin etc.., ),  what?

//1)as a user i want to log my running workouts with location, distance, time, pace and steps per minute, so
//that i can keep my log of all my running

//2) as a user i want to log my cycling workouts with location, distance, time, speed and elevation gain
//that i can keep my log of all my cycling

//3)as a user i want to see all my workouts at a glance, so i can easily track my progress over time

//4)as a user i also want to see all my workouts on a map so i can easily check where i work ot the most

//5)as a user i want to see all my workouts when i leave the app, and come back later, so that i can keep
//using the app over time

//we can use user stories to describe exactly what the app shold do

//features that is based on the user stories
//1) based on the 1st user story we can already imagine a couple of features that our app is gonna need,
//1st we gonna need a map where the user can click in order to create a new workout, that's becoz the user
//wants to log the workout with the location, and so therefore the best way to get the location coordinates
//is gonna be jsut clicking on a map,

//since we are working with maps, we should probably use geolocation in order to display the map at the
//current location of the user

//we also need a form to i.p the rest of the data, so the distance,time,pace and steps per minute,

//from the 1st user story we need these 3 features

//2) for the 2nd user story, we need a form that is similar to 1st story

//3)display all workouts in a list

//4)display all workouts on the mpa

//5)store workot data in the browser sing local storage api, on page load read saved data from the local storeage
//and display

//FEATRES:
//1)geolocation to display map at current location
//2)map where user clicks to add a new workout
//3)form for i/p of cycling
//3)form for i/p of running

//page loads => get current location   => render map on current --------> render workot form
//               coordinates(async)1)         2)location      (ser clicks on map)

//-----------------------------------------------------------------------------
////232: USING THE GEOLOCATION:
//Geolocation api is called an api becoz it is infact, a browser api jst like for ex, internaltionaliozation
//or timers or really anything that the browser goves

//geolocation is very easy to use, this fn here takes as an i/p 2 callback fn's, 1st is to callback fn that
//will be called on success so whenever the browser successflly got the coordinates of the current position
//of the user and the 2nd call back is the error callback which is the one that is gonna be called whne
//there happened an error while getting the coordinates

//trhe success callback fn here is actually called with a parameter, whihc we call the position parameter
//

// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       console.log(position);
//     },
//     function () {
//       alert('could not get your coordinates');
//     }
//   );

//GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1686157756394}
// coords:
// GeolocationCoordinates {latitude: 29.7576046, longitude: -95.6421364, altitude: null, accuracy: 13.452, altitudeAccuracy: null, …}
// timestamp: 1686157756394
// [[Prototype]]: GeolocationPosition

//the thing we atre intereted is with coordinates, lets now get lat and lon from this obj
//;at and lon there are inside the coords obj, so this is the child obj of the boigger obj
/*
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //getting cooridnates ot of the obj
      //const latitude = position.coords.latitude;
      const { latitude } = position.coords;
      //this will then create a var called latitde based out of the latitde prop of this obj
      const { longitude } = position.coords;
      //console.log(latitude, longitude); //29.7575731 -95.6420913
      console.log(
        `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
      );
    },
    function () {
      alert('could not get your coordinates');
    }
  );
  */

//now with this coordinates i will be ofcourse to load the map and then center that map on this position
//lets create a link on the google maps
//https://www.google.com/maps/@29.7560631,-95.6104704,14z?entry=ttu here we have lat and lon
//it is very simple to bild a rl like this

//-----------------------------------------------------------------------------
////233: DISPLAYING A MAP USING LEAFLET LIBRARY:
//How to display a map using a 3rd party library called Leaflet
//leaflet is a open source leaflet library for mobile friendly interactive maps, whenever we use a 3rd party
//library we have to include it in our site
// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude } = position.coords;

//       const { longitude } = position.coords;

//       console.log(
//         `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
//       );
//       const coords = [latitude, longitude];
//       const map = L.map('map').setView(coords, 13);

//       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       L.marker(coords)
//         .addTo(map)
//         .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//         .openPopup();
//     },
//     function () {
//       alert('could not get your coordinates');
//     }
//   );

//const map = L.map('map').setView([51.505, -0.09], 13); whatever string that we pass here into this map
//fn must be the id name of an el in our html, and it is in that el where the map will be displayed

//L is the main fn that leaflet gives us as an entry point, l is the namespace and l has couple of methods
//we can use

//any variable that is global in any script will be available to all other scripts while as long as they appear
//after that script, we can use our own lat and long in L.map('map').setView([51.505, -0.09], 13);
//the other nmber is the zoom level view

//the map that we see on the page is basically madeup of small tiles and these tiles they come frm this
//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { url
//to change the style of the map we change the url to https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png

//-----------------------------------------------------------------------------
////234: DISPLAYING A MAP MARKER:
/*
//we display a marker where ever we click on a map, we have to add the event handler to the map so that
//we can then handle any incoming clicks, attaching the event to the whole map does not works, we can add
//eventlistener on the map

//map.on() is not coming from the js it is instead coming from the leaflet library, this map obj in here is the
//obj that was generted by a leaflet, instaed of addEventListener we use on method, when leaflet calls this fn
//it will do so with a special mapEvent which is created by a leaflet
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;

      const { longitude } = position.coords;

      console.log(
        `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
      );
      const coords = [latitude, longitude];
      const map = L.map('map').setView(coords, 13);
      console.log(map);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapEvent) {
        console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 200,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('workout')
          .openPopup();
      });
    },
    function () {
      alert('could not get your coordinates');
    }
  );

//whenever i added a marker the popup closes
//L.marker([lat, lng]).addTo(map).bindPopup('Workout').openPopup();
//L.markers this creates the marker and, .addTo add it to the map, .bindPopup this will create a popup and
//bind it to the marker and wee simply pass in the string, instead of specifying a string we can also
//create a brand new popup obj, which will then contain a couple of options, instead of bindPopup('Workout')
//this we will do L.popup({maxWidth: 250, minWidth: 100, autoClose: false, closeOnClick: false}) and
//there we can pass in a couple of options
*/
// //-----------------------------------------------------------------------------
// ////235: RENDERING WORKOUT INPUT FORM:
// /*
// let map, mapEvent;
// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       console.log(position);
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(
//         `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
//       );
//       const coords = [latitude, longitude];
//       map = L.map('map').setView(coords, 13);

//       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       //handling clicks on map
//       map.on('click', function (mapE) {
//         mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();

//         console.log(mapEvent);
//         const { lat, lng } = mapEvent.latlng;
//         L.marker(coords)
//           .addTo(map)
//           .bindPopup(
//             L.popup({
//               maxWidth: 250,
//               minWidth: 200,
//               autoClose: false,
//               closeOnClick: false,
//               className: 'running-popup',
//             })
//           )
//           .setPopupContent('workout')
//           .openPopup();
//       });
//     },
//     function () {
//       alert('could not get your coordinates');
//     }
//   );
//   */
// //right now when the map is clicked then the marker appears on the map. bt right now what we actually want is
// //in that event handler that was set up is to render the form so that a new workot can be added, and then
// //on that form, we will add an event listener so that whenever the form is sbmitted only then the marker
// //is rendered on the map

// //when click on the map happens then we want to show the form so form.classList.remove('hidden), now one
// //cool thing that we can do is to immediately focus on the field here, so allwe need is for this i/.p el
// //of the distance  we can call focus method on inputDistance.focus(),

// //now lets add an event listener to this form for submitting it, if we submit the marker then appers on this
// //page, we dont have any submit btn here, bt whenever we hit the enter key on any of this feilds in a
// //form then that will actually also triggers the submit event on that form, we will do that outside

// // form.addEventListener('submit', function (e) {
// //   e.preventDefault();
// //   console.log(mapEvent);
// //   const { lat, lng } = mapEvent.latlng;
// //   L.marker([lat, lng])
// //     .addTo(map)
// //     .bindPopup(
// //       L.popup({
// //         maxWidth: 250,
// //         minWidth: 200,
// //         autoClose: false,
// //         closeOnClick: false,
// //         className: 'running-popup',
// //       })
// //     )
// //     .setPopupContent('workout')
// //     .openPopup();
// // }); //we gonna listen for submit, and then the fn here will then display
// //the marker, right now we are trying to access var that are not inside of this fn, so we are trying to access
// //map and also mapEvent, this map is easy to fix,map is defined inside of a callback fn of the geolocation
// //api, we can do by creatin a global var like let map; at the top and we can reassign that map

// //and for the mapEevnt we have to eaxctly same as the map
// let map, mapEvent;
// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude } = position.coords;

//       const { longitude } = position.coords;

//       console.log(
//         `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
//       );
//       const coords = [latitude, longitude];
//       map = L.map('map').setView(coords, 13);
//       console.log(map);

//       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       //handling clicks on map
//       map.on('click', function (mapE) {
//         mapEvent = mapE;
//         console.log(mapEvent);
//         form.classList.remove('hidden');
//         inputDistance.focus();
//         // const { lat, lng } = mapEvent.latlng;
//         // L.marker([lat, lng])
//         //   .addTo(map)
//         //   .bindPopup(
//         //     L.popup({
//         //       maxWidth: 250,
//         //       minWidth: 200,
//         //       autoClose: false,
//         //       closeOnClick: false,
//         //       className: 'running-popup',
//         //     })
//         //   )
//         //   .setPopupContent('workout')
//         //   .openPopup();
//       });
//     },
//     function () {
//       alert('could not get your coordinates');
//     }
//   );

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   //clear i/p fields
//   inputDistance.value =
//     inputDuration.value =
//     inputCadence.value =
//     inputElevation.value =
//       '';
//   //display marker
//   const { lat, lng } = mapEvent.latlng;
//   L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup(
//       L.popup({
//         maxWidth: 250,
//         minWidth: 200,
//         autoClose: false,
//         closeOnClick: false,
//         className: 'running-popup',
//       })
//     )
//     .setPopupContent('workout')
//     .openPopup();
// });

// //marker here appera in 2 steps , 1st the form is displayed and then we submit the form, finally the marker is rendered
// //on the map

// //clearinf i/p fields of the form once we submitted the form

// //whenever we click on cycling here then this cadence should change to elevation
// //there is an event which is trigerred whenever we change the value of the seleted el
// inputType.addEventListener('change', function () {
//   inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//   inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// });

//-----------------------------------------------------------------------------
//236: PROJECT ARCHITECTURE:
/*
let map, mapEvent;
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(
        `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
      );
      const coords = [latitude, longitude];
      map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
        console.log(mapEvent);
      });
    },
    function () {
      alert('could not get your coordinates');
    }
  );

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(mapEvent);
  //clearing input fields
  inputDistance.value =
    inputCadence.value =
    inputDuration.value =
    inputElevation.value =
      '';
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 200,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('workout')
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});

//ARCHITECTURE: is all about giving the project a structure
//in this the main structure will come from classes and objects, the most impoertant aspects of architecture is
//where and how to store data, because data is probably the most fndamental part of any application

//in this case the data that we need to store and to manage comes directly from the user stories
//so right in the 1st user story, we can already see that we will somehow need to store the location,distance
//time,pace nd steps per minute

//USER STORY 1: log my rnning workouts with location,distance time,pace nd steps per minute

//and the 2nd user story we will have to implement basically same data so again location,distance time, speed and
//elevation data

//USER STORY 1: log my rnning workouts with location,distance time,speed and elevation data

//we will design our classes, so that they create objects that will hold this data

//we gonna have a big paraent class, which will be called the workout, as we have 3 prop in common they will be in the
//parent class and the same will also be true for some methods

//for ecah type of activities we have one child class, so that each child class can hold the data and methods
//that are specific to that type of activity

//the events that we already have are the
//loading of the page
//receiving geo location api
//click on the map
//chaing the i/p from cycling to running
//event of submitting the form, all we have to now is to create diff fn's taht will handle thses diff events

//we will create a big class called app that will basically hold all these fn's as methods
*/

//-----------------------------------------------------------------------------
//237: REFACTORING FOR PROJECT ARCHITECTURE:
/*
// let map, mapEvent;
//creating class for all of the methods
//the callback of current position is gonna be the loadMap
class App {
  #map;
  #mapEvent;
  constructor() {
    //this refers to the crrent obj
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggelElevationField);
  }

  //now here for the 1st callback fn which one is for the success, we need to call loadMap, since we are now in
  //a class we need to say this._loadMap, and then js will then call this loadMap fn here and passin the position
  //argment as soon as the current position of the user is determined, we need to create an actal obj out of this
  //class
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('could not get your coordinates');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
    );
    const coords = [latitude, longitude];
    console.log(this); //ndefined
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
    console.log(this.#mapEvent);
  }

  _toggelElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();
    console.log(this.#mapEvent);
    //clearing input fields
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';
    const { lat, lng } = this.#mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 200,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('workout')
      .openPopup();
  }
}

//creating an object, this dont need any arguments as the constrctor has no parameters, inorder to actually trigger
//the geolocation api, this method _getPsotion need to be called, we can do that by app1._getPosition(); then this
//code will be executed, right at a point where the app loads,
const app1 = new App();
//app1._getPosition();
//why shold we do this out here, if we could simple do it inside of a class, inside of a class we also have a
//method that atomatically gets called as the page loads, so inside of the App class, we also have a method that
//gets executed as soon as this app1 here is created, that is the constrctir method, this constrctor method is
//called immediately when a new obj is created from this class, and this obj that is created, so this app1 obj
//is created right in the beginning when the page loads, so that means the constrctor is also exected immediately
//as the page loads, we can simply do that by getting the position in the constrcutor

//in the load map fn we have a global varibale called map, we actally wanted everthing that is related to our
//app and that includes the map in the App class, so we gonna define the map and mapEevnt as properties of the
//obj and for that lets actually use private class field and we will not set it to aything
//#map;
//#mapEvent;
//both of them will now become the private instnaces props, so props that rea going to be present on all the
//instances created throgh this class, in _loadMap we actually have to use this.#map becase agin this is now
// //like a prop that is defined on the obj itself, we will get
// script.js:550 Uncaught TypeError: Cannot set properties of undefined (setting '#map')
//     at _loadMap (script.js:550:15)

//if the error msg says that we cannot set map on the this keyword, it means that something must be wrong with
//the this keyword  console.log(this);//undefined

//because this _loadMap( is called by) navigator.geolocation.getCurrentPosition(this._loadMap, function () {
//this fn here, and this is treated a a reglar fn call, since this is a callback fn we are not calling it
//by ourselves, it is the getCurrentPosition fn that will call this callback fn, once that it gets the crrent
//position of the user and when it calls this fn here then it does so as a reglar fn call, in reglar fn call the
//this keyword is set to ndefined, there is sol to manally bind the this keyword and in this case thgat is simply
//navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function (), right here in bind(this) this
//points to the crrent obj, binds will simply returns a new fn this._loadMap.bind(this all this is still a fn
//that js can then call whenever it needs to

//we want these event listeners to be set right at the beginning, so when ascript 1st loads, bt again ofcourse
//that shold be inside of our class, so the method that is called as soon as the script loads is the constrctor
//method, and so w are gonna attcah our event handlers to the dom el's right in the constrctoe fn

//sbmitting form for the newworkout will ofcourse create a new workot,  _newWorkout(e) { and here we also need
//the event so we can prevent deafult and for mapEevnt and map we need this keyword

// form.addEventListener('submit', this._newWorkout); this._newWorkout this method here is an event handler fn
//so its a fn that is going to be called by an event listener, and the this keyword in the event listener,
//in the evnt handler fn the this keyword always have the dom elment on to which it is attcahed and in this the
//the form is the eklemnts, so again inside of this method this._newWorkout the this keyword gonna point to form
//and no longer to the app obj, so we need to fix with the bind

// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(
//         `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
//       );
//       const coords = [latitude, longitude];
//       map = L.map('map').setView(coords, 13);

//       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       map.on('click', function (mapE) {
//         mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//         console.log(mapEvent);
//       });
//     },
//     function () {
//       alert('could not get your coordinates');
//     }
//   );
*/

//-----------------------------------------------------------------------------
//238: MANAGING WORKOUT DATA: CREATING CLASSES
/*
//in this video we are going to implement the classes to manage the data about our cycling and rnning workouts
//that are coming from the user interface, with both the workouts have in common, so both running and cycling
//they have a distance and a duration, both of them also have a type of course, the other thign taht is also
//common in both of them is the coordinates that are absiaclly coming  from the click on the map,

//lets now implement the workout class for both these workout types
//so creating workout class and this class will take in the data that is common to both the workouts and make
//them pricate fields

//we also want the data in both the workout obj's and besides that we also need a id, we usually use some kind of
//library in order to create good and unique id numbers, so usually we should never create id's on our own bt
//always let some library take care of that, right now we use a crrent date to create an id and convert into
//string and take last 10 nmbers, and so that should be the unique id

//so this is the workout class, bt we will never directly create a workot, instead we will always either create
//a running  or a cycling obj, these are child class, and here we alos need a constrctoir, and this one should
//take in the same data asthe parent class and then pls additional props and we need to call the super class
//with the common props and this will then initialize the this keyword

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10); //instaed of date we use current date
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance; //in km
    this.duration = duration; //in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  //method for calculating the pace and pace ie defined in min per kilometer
  calcPace() {
    //min/km
    //adding new prop
    this.pace = this.duration / this.distance;
    return this.pace; //instaed of relying on this method we can call this constructor
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration, elevationGain);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    //km/hr
    this.speed = this.distance / (this.duration / 60); //hr/min
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycle1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycle1);

////////////////////////////////////////////
//Application architecture
class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField.bind(this));
  }
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('could not get your coordinates');
        }
      );
  }
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
    );

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    console.log(this.#mapEvent);
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    e.preventDefault();
    //clearing input fields
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';
    const { lat, lng } = this.#mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 200,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('workout')

      .openPopup();
  }
}
const app1 = new App();
*/

//-----------------------------------------------------------------------------
//239: CREATING A NEW WORKOUT:
/*
//Implementing a feature of creating a new workout from our user interface

//when we reaload we get a map and if we click on the map, the form opens then we can i/p some data and then our
//application needs to get this data, it needs to check if this data actually makes sense, and then we need to
//create a new obj fro this workout and render it right on the map and also below th eform, and then finally
//after all that the form is also hidden

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10); //instaed of date we use current date
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance; //in km
    this.duration = duration; //in min
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  //method for calculating the pace and pace ie defined in min per kilometer
  calcPace() {
    //min/km
    //adding new prop
    this.pace = this.duration / this.distance;
    return this.pace; //instaed of relying on this method we can call this constructor
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration, elevationGain);
    this.elevationGain = elevationGain;
    //this.type = 'cycling';
    this.calcSpeed();
  }

  calcSpeed() {
    //km/hr
    this.speed = this.distance / (this.duration / 60); //hr/min
    return this.speed;
  }
}

////////////////////////////////////////////
//Application architecture
class App {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField.bind(this));
  }
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('could not get your coordinates');
        }
      );
  }
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
    );

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    console.log(this.#mapEvent);
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();
    //get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //check if data is valid

    //if workout is running, then create running obj
    if (type === 'running') {
      //check if data is valid
      //for data to be valid
      const cadence = +inputCadence.value;
      //check if data is valid
      //for data to be valid ecah of them should be a number
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs has to be +ve numbers');
      //if the distance here is not a number, then we wamt to return immediately
      //and also other code here, this return should be happen whenever one of these 3 here are not a number

      //creating new workout obj
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    //if workout is cycling, then create cycling obj
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs has to be +ve numbers');

      //creating new workout obj
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //add the new obj to the workout array
    this.#workouts.push(workout);
    console.log(workout);

    //render workout on map as a marker
    this.renderWorkoutMarker(workout);

    //render workout on list

    //hide the form + clearing input fields
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';
  }

  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 200,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent('workout')

      .openPopup();
  }
}
const app1 = new App();
*/

//-----------------------------------------------------------------------------
//240: RENDERING WORKOUTS:
/*
//we have to render workouts in the sidebar of user interface, creating a list item fro each workout
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance; //in km
    this.duration = duration; //in min
  }
  _setDescription() {
    //prettier-ignore
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration, elevationGain);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    //km/hr
    this.speed = this.distance / (this.duration / 60); //hr/min
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycle1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycle1);

class App {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggelElevationField);
  }
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('could not get your coordinates');
        }
      );
  }
  _loadMap(position) {
    console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
    );
    const coords = [latitude, longitude];
    console.log(this);
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    console.log(this.#mapEvent);
    form.classList.remove('hidden');
    inputType.focus();
  }

  _hideForm() {
    //empty i/p's
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }
  _toggelElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number(isFinite(inp)));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    //get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //if workout is running, then create running obj
    //check if data is valid
    const cadence = +inputCadence.value;
    if (type === 'running') {
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs has to be +ve numbers');
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    //if workout is cycling, then create cycling obj
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs has to be +ve numbers');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //add the new obj to the workout array
    this.#workouts.push(workout);
    console.log(workout);

    //render workout on map as a marker
    this._renderWorkoutMarker(workout);

    //render workout on list
    this._renderWorkout(workout);

    //hide the form + clearing input fields
    this._hideForm();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 200,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    //we gonna create some html and we will insert that into dom whenever there is a new workout
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;

    if (workout.type === 'running')
      html += ` 
      <div class="workout__details">
    <span class="workout__icon">⚡️</span>
    <span class="workout__value">${workout.pace.toFixed(1)}</span>
    <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
    </div>
</li>`;

    if (workout.type === 'cycling')
      html += ` <div class="workout__details">
<span class="workout__icon">⚡️</span>
<span class="workout__value">${workout.speed.toFixed(1)}</span>
<span class="workout__unit">km/h</span>
</div>
<div class="workout__details">
<span class="workout__icon">⛰</span>
<span class="workout__value">${workout.elevationGain}</span>
<span class="workout__unit">m</span>
</div>
</li>`;
    form.insertAdjacentHTML('afterend', html);
  }
}

const app1 = new App();
*/

//-----------------------------------------------------------------------------
//241: MOVE TO MARKER ON CLICK:
/*
//at initial stage we are starting with a blank page, so right now there are no workouts on which we could click
//nd so in this case, where should we actually attach a event handler

//the situation in which we dont have the el on which we actualy want to attach the evnt handler becaoz it is
//not created yet, and so what we have to do is one more time, basically event delegation

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance; //in km
    this.duration = duration; //in min
  }
  _setDescription() {
    //prettier-ignore
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration, elevationGain);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    //km/hr
    this.speed = this.distance / (this.duration / 60); //hr/min
    return this.speed;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycle1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1, cycle1);

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggelElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('could not get your coordinates');
        }
      );
  }
  _loadMap(position) {
    console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
    );
    const coords = [latitude, longitude];
    console.log(this);
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    console.log(this.#mapEvent);
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    //empty i/p's
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }
  _toggelElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number(isFinite(inp)));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    //get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //if workout is running, then create running obj
    //check if data is valid
    const cadence = +inputCadence.value;
    if (type === 'running') {
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs has to be +ve numbers');
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    //if workout is cycling, then create cycling obj
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs has to be +ve numbers');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //add the new obj to the workout array
    this.#workouts.push(workout);
    console.log(workout);

    //render workout on map as a marker
    this._renderWorkoutMarker(workout);

    //render workout on list
    this._renderWorkout(workout);

    //hide the form + clearing input fields
    this._hideForm();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 200,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    //we gonna create some html and we will insert that into dom whenever there is a new workout
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>`;

    if (workout.type === 'running')
      html += ` 
        <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
      </div>
  </li>`;

    if (workout.type === 'cycling')
      html += ` <div class="workout__details">
  <span class="workout__icon">⚡️</span>
  <span class="workout__value">${workout.speed.toFixed(1)}</span>
  <span class="workout__unit">km/h</span>
  </div>
  <div class="workout__details">
  <span class="workout__icon">⛰</span>
  <span class="workout__value">${workout.elevationGain}</span>
  <span class="workout__unit">m</span>
  </div>
  </li>`;
    form.insertAdjacentHTML('afterend', html);
  }
  _moveToPopup(e) {
    console.log(e.target);
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);
    if (!workoutEl) return;

    //to find the workout data from the array using id to which workout it shold move
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    console.log(workout);

    //now we can basically take the coordinates from this el and then move the map to that position
    //in leaflet we have something like setView(), it needs the 1st argument as the coordinates and the 2nd is
    //the zoom level
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pad: {
        duration: 1,
      },
    });

    workout.click();
  }
}

const app1 = new App();
//so what we gonna do is to add the event handler to the parent el, and so in our html it is
//<ul class="workouts"> it is called containerWorkouts and so lets add event listener yo that, we do that in a
//constructor so the event lsitener is added right in the beginning and we will create a method called moveto
//Popup here we are going to need a event because now we will have to match the obj that we are looking for

//create a workout element and look at e.target and that is the el that we clicked and then closest workout
//parent

//another functionality is to simply count the clicks that happen on each workout
*/

//-----------------------------------------------------------------------------
//242: WORKING WITH LOCAL STORAGE:

//Whenever a new workout is added then all the workouts will be added to local storage, and so local storage
//is basically a place in the browser, where we can store data that will stay there even after we close the page
//so basically the data is basically linked to the url on which we are using this application

//so again whenever there is a new workout, we will take the entire workouts array and store it in the local
//storage, and then whjenever the page loads, then we will load all the workouts from the local storage, and
//render them on the map and also in the list

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance; //in km
    this.duration = duration; //in min
  }
  _setDescription() {
    //prettier-ignore
    const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration, elevationGain);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    //km/hr
    this.speed = this.distance / (this.duration / 60); //hr/min
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycle1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycle1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  constructor() {
    //get user's position
    this._getPosition();

    //get data from local storage
    this._getLocalStorage();

    //attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggelElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('could not get your coordinates');
        }
      );
  }
  _loadMap(position) {
    console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(
    //   `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
    // );
    const coords = [latitude, longitude];
    // console.log(this);
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    this.#map.on('click', this._showForm.bind(this));
    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
      this.#workouts.forEach(work => {
        this._renderWorkoutMarker(work);
      });
    });
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    console.log(this.#mapEvent);
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    //empty i/p's
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }
  _toggelElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number(isFinite(inp)));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    //get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //if workout is running, then create running obj
    //check if data is valid
    const cadence = +inputCadence.value;
    if (type === 'running') {
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs has to be +ve numbers');
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    //if workout is cycling, then create cycling obj
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs has to be +ve numbers');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //add the new obj to the workout array
    this.#workouts.push(workout);
    // console.log(workout);

    //render workout on map as a marker
    this._renderWorkoutMarker(workout);

    //render workout on list
    this._renderWorkout(workout);

    //hide the form + clearing input fields
    this._hideForm();

    //set local storage to all the workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 200,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    //we gonna create some html and we will insert that into dom whenever there is a new workout
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>`;

    if (workout.type === 'running')
      html += ` 
          <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
        </div>
    </li>`;

    if (workout.type === 'cycling')
      html += ` <div class="workout__details">
    <span class="workout__icon">⚡️</span>
    <span class="workout__value">${workout.speed.toFixed(1)}</span>
    <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
    <span class="workout__icon">⛰</span>
    <span class="workout__value">${workout.elevationGain}</span>
    <span class="workout__unit">m</span>
    </div>
    </li>`;
    form.insertAdjacentHTML('afterend', html);
  }
  _moveToPopup(e) {
    console.log(e.target);
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);
    if (!workoutEl) return;

    //to find the workout data from the array using id to which workout it shold move
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    // console.log(workout);

    //now we can basically take the coordinates from this el and then move the map to that position
    //in leaflet we have something like setView(), it needs the 1st argument as the coordinates and the 2nd is
    //the zoom level
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pad: {
        duration: 1,
      },
    });

    //workout.click();
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    //converting from string to obj
    const data = JSON.parse(localStorage.getItem('workouts'));
    console.log(data);

    //this._renderWorkoutMarker(work); //error cannot read prop of 'addLayer
    //this method is executed right at the beginning when the page loads, we trying to add the marker
    //right at the beginning, however at this point the map has actually not be loaded, so essentailly we are trying
    //to add a marker to the map which is'nt yet defined at this point, instead of trying to render the markers
    //right at the very beginning, we shold only do that once the map has been loaded and so we can put that
    //logic in the load map
    if (!data) return;
    this.#workouts = data;
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }
  reset() {
    //removing workouts from the local storage
    localStorage.removeItem('workouts');

    //we can now reload the page, and then the app will look completely empty we can do this by loaction.reload
    //location is basically a big object that contains a lot of methods
    location.reload();
  }
}

const app1 = new App();
//local storage is an api because local storage is, once again an api that a browser provides for us and that we
//can use

//localStorage.setItem(), then we have to give it a name and then the 2nd argument needs to be string that we
//want to store and which will be associated with this key here, so basically the local storage is a simple key
//value store, and so we need a key which is 'workout' and we need a simply value, which must also be a string
//bt we can convert an obj to a string by doing JSON.stringify, we can convert this method to convert any obj
//in js a string

//with this we setting all the workouts o local storage, now all we have to do is to show the data back in the
//list and the map once we reload the page, we have to do this in the constructor

//now with this data which is basically our array of workouts is to restore our workouts array
//now lets take all of the workoutrs and render them in the list, now we also need them to add it on the map

//when we converted our obj's to strings and back to strings to objects we lost the prototype chain, and so these
//new obj's here that we recovered from the local storage are now jsut reglar obj's, they are now no longer objects
//that were created by the rnning or by the cycling class, and they will not be inherited any of their methods

//to fix this in our getLocalStorage we could now loop over this data and then restore the obj's by creating a
//new obj using the class, based on the data that is coming from local storage

//TO CREATE A QUCIK AND EASY WAY TO DELETE ALL OF THESE WORKOUTS AT ONCE, AT LEAST FROM LOCAL STORAGE
//create a reset(pblic method) which we can use out there and in this we remove workouts item from the local
//storage, besides setting and getting items we can remove item

//-----------------------------------------------------------------------------
//243: FINAL CONSIDERATION:

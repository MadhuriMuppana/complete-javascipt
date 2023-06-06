'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

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

//page loads => get current location   => render map on current -->
//               coordinates(async)1)         2)location

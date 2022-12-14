//creating my own module to get the day of today. Ill require the local module - date.js in mu app.js file.
// I do this to avoid all this code in the app.js- becouse it will have all of the requests and response I get and send for
// each page route.


module.exports.getDate=getDate; //setting a new method: "getDate" to the module object.- I will require the local module-date.js in app.js 

function getDate(){
let today = new Date();
let dateOptions={weekday:'long',
 day:'numeric',
 month:'long'}; // setting the option object with the details I want to display and how.
let todayIs=today.toLocaleDateString('en-US',dateOptions);//using the toLocalString() method to calculate the date in the location of the user.
console.log(todayIs);
}

module.exports.getDay=getDay; //setting a new method: "getDate" to the module object.- I will require the local module-date.js in app.js
function getDay(){
let today = new Date();
let dateOptions={weekday:'long'}
  // setting the option object with the details I want to display and how.
let todayIs=today.toLocaleDateString('en-US',dateOptions);//using the toLocalString() method to calculate the date in the location of the user.
console.log(todayIs);
}
// getting express
const express=require('express');
// getting body-parser
const bodyParser= require('body-parser');
//intiate the items array
let items =['Buy the food','Cook the food','Eat the food'];
// setting express as constant function
const app= express();
//getting ejs module using express set method
app.set('view engine', 'ejs');
 // using the body-parser so I can get the data that passed from a form or http request.
app.use(bodyParser.urlencoded({extended:true}));
// getting the response for user access to the root of the project(homepage)
app.get('/', function(req,res){
    // set today as the day of the week with number 0-6 (sunday=0)
    let today = new Date();
    let dateOptions={weekday:'long',
     day:'numeric',
     month:'long'}; // setting the option object with the details I want to display and how.
    let todayIs=today.toLocaleDateString('en-US',dateOptions);//using the toLocalString() method to calculate the date in the location of the user.
    console.log(todayIs);
    //intiate the variable that will be the key value of the variable I wat to pass to the ejs file
    
    // check if the day is on weekend(sunday=0).
  /*   if(today.getDay()===6 || today.getDay()===0){ 
        //setting day value as the logic say
        day='weekend!';
    }else{
                //setting day value as the logic say

       day='weekday!';
    } */

    //using the "render" method to render the "list.ejs" file and pass the key name "kindOfDay" with the value of the variable day.
    //on list.ejs the "variable" name must be the same as the key name (kindOfDay).   
    res.render("list", {kindOfDay: todayIs, itemsToAdd:items});
    
});

//express method to manage post requests that their action is for the home route.
app.post('/', function(req,res){
    //targeting the name property of the input inside of the request body.- I can do this
    items.push(req.body.newItem);
    //My response is to redirect the post to the home route to let it render the template agian.
    res.redirect('/');
    
});




// setting the server to listen to 
app.listen(3000, function(){
    console.log('Server started on port 3000');
});
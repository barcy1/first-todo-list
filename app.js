// getting express
const express =require('express');
// getting body-parser
const bodyParser= require('body-parser');
//requiring the date.js module I made. Becouse its local I need to pass the route to the file!
const date=require(__dirname + '/date.js');// requiring the the module- "__diename" tells js the file is this folder.
//intiate the items array
let items =['Buy the food','Cook the food','Eat the food'];
let workItems=[];
// setting express as constant function
const app= express();
//getting ejs module using express set method
app.set('view engine', 'ejs');
// telling express to serve a static folder that contain the CSS files (can also contain js files and images folder)- if I want tell it, it wont do it
app.use(express.static('public'))
 // using the body-parser so I can get the data that passed from a form or http request.
app.use(bodyParser.urlencoded({extended:true}));
// getting the response for user access to the root of the project(homepage)
app.get('/', function(req,res){
    // set today as the day of the week with number 0-6 (sunday=0)
    
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
    res.render("list", {listTitle: todayIs, newListItems:items});
    
});

//express method to manage post requests that their action is for the home route.
app.post('/', function(req,res){
    let item=req.body.newItem;
    console.log(req.body);
    if(req.body.list==='Work List'){        
        workItems.push(item);
        res.redirect('work');
    }else{
        items.push(item);
        res.redirect('/');
    }
    //targeting the name property of the input inside of the request body.- I can do this
    
    //My response is to redirect the post to the home route to let it render the template agian.
    
    
});

 app.get('/work',function(req,res){
    res.render('list', {listTitle:'Work List',newListItems:workItems})
});

app.post('/work', function(req,res){
    workItems.push(req.body.newItem);
    res.redirect('/work');
})

app.get('/about', function(req,res){
    res.render('about') // when I get an http request to to about route my response is to render the about page.
})
 



// setting the server to listen to 
app.listen(3000, function(){
    console.log('Server started on port 3000');
});

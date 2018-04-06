var express= require('express');
var app=express();
var mongoose=require('mongoose');
var configInfo=require('./config');
var path=require('path');
var setupController=require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port=process.env.PORT || 3000;

// set the public folder up for static resources
app.use(express.static(path.join(__dirname,"/public")));

//set the templating engine
app.set('view engine','ejs');


//establish the connection to mongodb
mongoose.connect(configInfo.getConnectionUrl(),(err)=>{
    if(err) return console.log('fucked up', err);
    console.log("connected to database");
});


//creating get route for seeding the database for starter todos
setupController(app);
//All crud routes
apiController(app);

//Create the server and listen for requests on port
app.listen(port,(err)=>
{
    if(err) throw err;
    console.log("server started");
});
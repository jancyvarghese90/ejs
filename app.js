const express=require("express");
require("dotenv").config();
//import local modules
const base_route=require('./routes/film');
//Initializing express
const app=express();
//setting up the view engine
app.set('view engine','ejs');
//set the sttauc public folder for the app
app.use(express.static('./public'));
//Middleware Api
app.use("/api",base_route);

//server in listening mode
app.listen(process.env.port,()=>{
    console.log(`Server is listening ${process.env.port}`);
})
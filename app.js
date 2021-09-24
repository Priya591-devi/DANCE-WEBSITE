const express = require("express"); //Importing the express package
// const fs = require("fs");
const path = require("path"); //The Path module provides a way of working with directories and file paths.
const app = express(); //creating the express app
const port = 80; //selecting port as 80


//For serving static files(/static use url while 'static' is folder)
// static files are those files, which are public and can be excesed bu anyone without login
// Example : Whole js code will be prited on the console

//  ######## Express specific code ##########
app.use("/static", express.static("static"));
app.use(express.urlencoded()); // we can gat the data of the form using this

//  ################# Pug specific code ###################
app.set("view engine", "pug"); //set the temlphlate engine as pug
app.set("views", path.join(__dirname, "views"));//set the views directory

//Our pug demo endpoint
app.get("/", (req, res) => {
  const con = "I have found my everything in You";
  const params = {};
  res.status(200).render("home.pug", params);
  // index.pug is the file name
  // params is the variable that we want to pass to that file
});

app.get("/contact", (req, res) => {
  const con = "I have found my everything in You";
  const params = {};
  res.status(200).render("contact.pug", params);
});



// #############     Start the server
app.listen(port, () => {
    console.log(`This app started successfully on port ${port}.`);
  });
  
  //check whetrher this is working or not in postman or chrome by typing localhost:80 or localhost by get mthod
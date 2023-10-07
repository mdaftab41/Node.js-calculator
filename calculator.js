//jshint esversion:4
const express = require("express", 4.18);
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({ extended: true })); //bodyparser.urlencoded() is use to pass html form data to server also use .text()and .json()
//entended:true is use to pass nasted html object
//you need to write ever single time when you write a server

//creating route
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html"); //sendFile is use to send file,__dirname is use to send directory
});

//create a post methode to post any thing on server
app.post("/", function (req, res) {
  let number1 = Number(req.body.n1);
  let number2 = Number(req.body.n2);
  // let operator= (req.body.operator);
  switch (req.body.operator) {
    case "+":
      var result = number1 + number2;
      break;

    case "-":
      var result = number1 - number2;
      break;

    case "*":
      var result = number1 * number2;
      break;

    case "/":
      var result = number1 / number2;
      break;
  }
  //var result = number1 + number2;
  res.send("The result of the calculation is  : " + result);
}); //req.body  is first http request

//creating server 3000 with call back function
app.listen(3000, function () {
  console.log("server is running on port 3000");
});

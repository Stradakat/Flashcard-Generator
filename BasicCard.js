// Create a new file named BasicCard.js:
// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.

// Constructor function for the 'Basic Card'.
// inquirer node package
var inquirer = require('inquirer');

//  node package to read and write to log.txt File
var fs = require('fs');

// BasicCard constructor function
var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
};

BasicCard.prototype.getCard = function() {
  console.log("Front: " + this.front);
  console.log("Back: " + this.back);
};


inquirer.prompt([

  {
  name: "front",
  message: "Enter text for the Front of the card"
  },
  {
  name: "back",
  message: "Enter text for the Back of the card"
  }
]).then(function(answers) {

  var newCard = new BasicCard (
    answers.front,
    answers.back
  );

  newCard.getCard();

  function writeLog() {

    // correct variable names...
    var basicTxt = "Front: " + newCard.front + "\nBack: " + newCard.back;
    fs.appendFile("log.txt", basicTxt, function(error, data) {
      if (error) {
        console.log(error);
      }
      else {
        return;
      }
    });

  }
writeLog();
});

  

module.exports = BasicCard;
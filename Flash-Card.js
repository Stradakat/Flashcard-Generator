var BasicCard = require('./basic-card.js');

var ClozeCard = require('./cloze-card.js');


var inquirer = require('inquirer');

// Lode node fs node package to read and write to log.txt File
var fs = require('fs');

// store/run Basic Card or Cloze Card generator
var cardChoice = process.argv[2];



var basicCard = new BasicCard();
var clozeCard = new ClozeCard();
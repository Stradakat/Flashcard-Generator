// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.

// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.
// The bulk of this assignment is implementing ClozeCard. 


// Constructor function for the 'Cloze Card'.

var ClozeCard = function(text, cloze) {

  this.fulltext = text;
  this.cloze = cloze;

  this.partial = function() {

// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
    

    var partial = [];
    var word = text.split(" ");

    for (var i=2; i < word.length; i++) {
      partial.push(word[i]);
      var partialText = "... " + partial.join(" ");
      var partialCloze = word[0] + " " + word[1];
    }

    if (this.cloze !== partialCloze) {
      console.log("Error - Wrong Format");
    }
    else {
      console.log(partialText);
    }

  };

};

module.exports = ClozeCard;
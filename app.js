var app = angular.module('assessmentApp', []);

app.controller('AssessmentController', function(){
  // grab 'this' variable and store in ac
  var ac = this;

  // initialize variables for later use
  ac.inputMessage = '';
  ac.firstMessage = '';
  ac.showFirst = false;
  ac.messageList = [];

  ac.addMessage = function(){
    // if firstMessage is anything other than a blank string, push it to messageList
    if(ac.firstMessage){
      ac.messageList.push(ac.firstMessage);
    }

    // set firstMessage to the value of the text input
    ac.firstMessage = ac.inputMessage;

    // display the div containing the first message
    ac.showFirst = true;
    
    // empty out the input field
    ac.inputMessage = '';
  };
});

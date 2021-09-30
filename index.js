//markOne_ quiz about myself
var readlineSync = require('readline-sync');

var score = 0;
var questionone = "Does Shoaib is older than 20? ";
var answerone = 'yes';

var questiontwo = 'Does Shoaib live in Mumbai? ';
var answertwo = 'yes';

var questionthree = 'Does Shoaib know coding? ';
var answerthree = 'yes';

var questionfour = 'Does Shoaib listen to Music? ';
var answerfour = 'no';

var questionfive= 'Does shoaib know driving? ';
var answerfive = 'no';


console.log("Lets see how much you know Shoaib!.. Answer in yes or no\n")

var useranswerone = readlineSync.question(questionone)
console.log("you entered " + useranswerone)
if (useranswerone === answerone) 
{
  console.log("You are right!");
  score = score + 1;
  console.log("Your Score is " +score,"\n")
  }

else {
    console.log("You are wrong!");
    score = score - 1;
    console.log("Your Score is "+score,"\n")
  }
  var useranswertwo = readlineSync.question(questiontwo)

  console.log("you entered " + useranswertwo)
  if (useranswertwo === answertwo) {

    console.log("You are right!");
     score = score + 1;
  console.log("Your Score is " +score,"\n")
  }
  else {
    console.log("You are wrong!");
    score = score - 1;
    console.log("Your Score is "+score,"\n")
  }

   var useranswerthree = readlineSync.question(questionthree)

  if (useranswerthree === answerthree) 
{
  console.log("You are right!");
  score = score + 1;
  console.log("Your Score is " +score,"\n")
  }

else {
    console.log("You are wrong!");
    score = score - 1;
    console.log("Your Score is "+score,"\n")
  }

  var useranswerfour = readlineSync.question(questionfour)

  if (useranswerfour === answerfour) 
{
  console.log("You are right!");
  score = score + 1;
  console.log("Your Score is " +score,"\n")
  }

else {
    console.log("You are wrong!");
    score = score - 1;
    console.log("Your Score is "+score,"\n")
  }

  
  var useranswerfive = readlineSync.question(questionfive)

  if (useranswerfour === answerfive) 
{
  console.log("You are right!");
  score = score + 1;
  console.log("Your Score is " +score,"\n")
  }

else {
    console.log("You are wrong!");
    score = score - 1;
    console.log("Your Score is "+score,"\n")
  }

  console.log("Thank you for participating!")
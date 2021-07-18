//Money Heist Quiz
const chalk = require('chalk');
var read = require("readline-sync");

var rightAns = chalk.greenBright;
var wrongAns = chalk.redBright;
var sColor = chalk.yellowBright;
var hColor = chalk.hex('#DEADED');

console.log(hColor("Let's see how well you know PIYUSH ❤️ \n"));
var userName = read.question("Namaste \nPlease enter your name? ");
console.log(hColor("\nWelcome, "+userName+", to the world of Money Heist Fans"));
console.log(chalk.black.bold.bgWhite("\nNOTE: For each correct answer you will get 1 point.\n"));


var score = 0;
var l2=0,l3=0;

function askQuestions(ques, ans){
  var userAns = read.question(ques);
  if(userAns.toLowerCase()==ans.toLowerCase()){
    console.log(rightAns("\nYou're right :)"));
    score++;
  }else{
    console.log(wrongAns("\nOops! You're wrong :("));
  }

  console.log(sColor("Current Score : "+score));
  if(score>=5 && l2<1){
    console.log(chalk.black.bold.bgWhite("Level 2 Started...."));
    l2++;
  }
  if(score>=10 && l3<1){
    console.log(chalk.black.bold.bgWhite("Level 3 Started...."));
    l3++;
  }
  console.log("-------------------");
}

var questions = [{
  question : "The heist was the brainchild of the...........?\n",
  answer : "Professor"
}, {
  question : "The show is actually called La Casa de Papel, which literally translates to ____\n",
  answer : "Paper House"
}, {
  question : "In which country does Raquel track the Professor after the first heist? \n",
  answer : "Philippines"
}, {
  question : "How much money does the gang steal from the heist at Royal Mint of Spain? \n",
  answer : "984 Million"
}, {
  question : "What is the real name of The Professor in Money Heist? \n",
  answer : "Sergio"
}, {
  question : "What's the name of Berlin’s ladylove in the show, who comes to visit him at the monastery? \n",
  answer : "Tatiana"
}, {
  question : "How many heists had the character Berlin performed before money heist's events? \n",
  answer : "27"
}, {
  question : "What is the real name of Tokyo in Money Heist? \n",
  answer : "Silene Oliveira"
}, {
  question : "Rio was known for committing which crime before his heist days? \n",
  answer : "Computer hacking"
}];

for(var i=0; i<questions.length; i++){
  var q = questions[i];
  askQuestions(q.question, q.answer);
}

console.log("Yay! You scored : " + score);
console.log("-------------------");
console.log("Thanks for playing, Have a nice day...");
console.log("-------------------");

//repel link - https://replit.com/@piyushahir28/markTwo
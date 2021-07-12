//Money Heist

//How well you know me?
var read = require("readline-sync");
var userName = read.question("What's your name? ");
console.log("Welcome, "+userName+" to world of Money Heist Fans? ");
console.log("-------------------");

var score = 0;
var l2=0,l3=0;
function askQuestions(ques, ans){
  var userAns = read.question(ques);
  if(userAns.toLowerCase()==ans.toLowerCase()){
    console.log("You're right! " + userName);
    score++;
  }else{
    console.log("Oops! You're wrong! " + userName);
  }

  console.log("Score : "+score);
  if(score>=5 && l2<1){
    console.log("Level 2 Started....");
    l2++;
  }
  if(score>=10 && l3<1){
    console.log("Level 3 Started....");
    l3++;
  }
  console.log("-------------------");
}

var questions = [{
  question : "The heist was the brainchild of the...........?",
  answer : "Professor"
}, {
  question : "The show is actually called La Casa de Papel, which literally translates to ____.  ",
  answer : "Paper House"
}, {
  question : "In which country does Raquel track the Professor after the first heist? ",
  answer : "Philippines"
}, {
  question : "How much money does the gang steal from the heist at Royal Mint of Spain? ",
  answer : "984 Million"
}, {
  question : "What is the real name of The Professor in Money Heist? ",
  answer : "Sergio"
}, {
  question : "What's the name of Berlin’s ladylove in the show, who comes to visit him at the monastery? ",
  answer : "Tatiana"
}, {
  question : "How many heists had the character Berlin performed before money heist's events? ",
  answer : "27"
}, {
  question : "What is the real name of Tokyo in Money Heist? ",
  answer : "Silene Oliveira"
}, {
  question : "Rio was known for committing which crime before his heist days? ",
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
//Money Heist Quiz
const chalk = require('chalk');
var read = require("readline-sync");

var rightAns = chalk.bold.greenBright;
var wrongAns = chalk.bold.redBright;
var sColor = chalk.bold.yellowBright;
var hColor = chalk.hex('#DEADED').bold;

console.log(hColor("Let's see how big fan you are of Money Heist ❤️ \n"));
var userName = read.question("Namaste \nPlease enter your name? ");
console.log(hColor("\nWelcome, " + userName + ", to the world of Money Heist Fans"));
console.log(chalk.black.bold.bgWhite("\nNOTE: For each correct answer you will get 1 point.\n"));


var score = 0;
var l2 = 0,
    l3 = 0;

var questions = [{
    question: "The heist was the brainchild of the...........?\n",
    mcq: ['Professor', 'Berlin', 'Tokyo'],
    answer: "0"
}, {
    question: "The show is actually called La Casa de Papel, which literally translates to ____\n",
    mcq: ['Mud House', 'Paper House', 'Jail'],
    answer: "1"
}, {
    question: "In which country does Raquel track the Professor after the first heist? \n",
    mcq: ['Bokaro', 'Tokyo', 'Philippines'],
    answer: "2"
}, {
    question: "How much money does the gang steal from the heist at Royal Mint of Spain? \n",
    mcq: ['489 Million', '984 Million', '894 Million'],
    answer: "1"
}, {
    question: "What is the real name of The Professor in Money Heist? \n",
    mcq: ['Sergio', 'Berlin', 'Tokyo'],
    answer: "0"
}, {
    question: "What's the name of Berlin’s ladylove in the show, who comes to visit him at the monastery? \n",
    mcq: ['Tatiana', 'Maliana', 'Catalina'],
    answer: "0"
}, {
    question: "How many heists had the character Berlin performed before money heist's events? \n",
    mcq: ['48', '27', '72'],
    answer: "1"
}, {
    question: "What is the real name of Tokyo in Money Heist? \n",
    mcq: ['Silene Oliveira', 'Oliveira Silene', 'Pomo ole'],
    answer: "0"
}, {
    question: "Rio was known for committing which crime before his heist days? \n",
    mcq: ['Heist', 'Computer hacking', 'Harrasement'],
    answer: "1"
}];

for (var i = 0; i < questions.length; i++) {
    console.log("Q" + (i + 1));
    play(questions[i]);
    console.log(sColor("Current Score : " + score));
    if (score >= 5 && l2 < 1) {
        console.log(chalk.black.bold.bgWhite("\nLevel 2 Started...."));
        l2++;
    }
    if (score >= 10 && l3 < 1) {
        console.log(chalk.black.bold.bgWhite("\nLsevel 3 Started...."));
        l3++;
    }
    console.log("-------------------");
}

function play({ question, mcq, answer }) {

    const index = read.keyInSelect(mcq, question);

    if (index == answer) {
        console.log(rightAns("\nYay! You're right :)"));
        score++;
    } else {
        console.log(wrongAns("\nOops! You're wrong :("));
    }
}

console.log(chalk.bold.italic("Yay! You scored : " + score + " Points"));
console.log("-------------------");
console.log(hColor("Thanks for playing, Have a nice day..."));
console.log("-------------------");

//repel link - https://replit.com/@piyushahir28/markTwo
console.log("Functions");

//1. Declaration (create the function)
function login(){
    console.log("Welcome to the system");
}

//2. Call trigger/run/execute
login();

//(on the code, on the console, as users)

function logout(name){
    console.log (`"Goodbye ${name}"`);
}

logout("Cole");
logout("Titan");
logout("Shea");

function gradeExam(student,correctItems, points){
    let totalPoints = correctItems * points;
    console.log (`${student} grad on the exam is: ${totalPoints}`);
}

gradeExam("Adam", 10, 0.5);
gradeExam("Tim",15,0.5);
gradeExam("Cole",12,0.5);

// Challenge 1: 
// task: 
// Create a function called `doubleScore` that takes one number (the player's score).
// The function should display the score multiplied by 2. (console)

function doubleScore(score){
    console.log(score * 2);
}

doubleScore(20);
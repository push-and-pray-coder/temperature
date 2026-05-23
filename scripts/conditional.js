console.log("Conditionals");

// if-statement condition (y/n)
// --- SYNTAX ---
// if(condition){
// //code to be run if the condition is true
// }


let result = 50;

if (result > 60){
    console.log("You passed the exam");
}

let points = 70;
if (points>60){
    console.log("You won!!!");
}else{
    console.log("You lose!!!");
}

const boiling = 100;
let temp = 89;

if (temp>boiling){
    console.log ("Boiling");
}else{
    console.log("Not Boiling");
}

// else-if condition
// ---- SYNTAX ----
// if(condition1){
// code to be run if the condition1 is true
// }else if(condition2){
// code to be run if the condition2 is true
// }else{
// code to be run if the conditions are falsed
// }

let age = 30;

if(age < 13){
    console.log("You are a child!");
}else if(age < 21){
    console.log("You are a teenager");
}else if(age < 64){
    console.log("You are a adult");
}else{
    console.log("You are a senior");
}

//challenge 2: 
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color 
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

/*let trafficLight=prompt("Enter the color");

if (trafficLight == "red"){
    console.log("Stop");
}else if (trafficLight == "yellow"){
    console.log("Slow down");
}
else if (trafficLight == "green"){
    console.log("Go");
}
else{
    console.log("Traffic light is broken");
}

//Team Challenge

let userType = prompt("Enter your role");
let htmlMessage = ""

if (userType == "Admin"){
    console.log("Full Access");
    htmlMessage = "Welcome Admin";
}
else if(userType=="Editor"){
    console.log("Access but limited");
    htmlMessage = "Welcome Editor";
}
else if (userType=="Guest"){
    console.log("You do not have access");
    htmlMessage = "Welcome Guest";
}else {userType="Error";}

document.getElementById("roles").innerHTML = htmlMessage;
*/

// Challenge 3
function weatherOutFit(){
    const div = document.getElementById("results");
    let tmp = prompt("Enter a temperature");

    
    // clear the CSS
    div.classList.remove("cold","red");
    
    if(tmp < 15){
        div.innerHTML = "Jacket";
        div.classList.add("cold");
    }else if(tmp < 25){
        div.innerHTML ="Sweater";
    }else{
        div.innerHTML ="T-Shirt";
        div.classList.add("hot");
    }
}

weatherOutFit();
// creating variables
let temperatures = []; // this is an empty array
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// step 1 - user inputs the scale
let scale = prompt("Enter the scale: C or F ");


function convertTemperature(temperature,scale,i){
    if (scale=="F"){
        document.getElementById("temperature-output").innerHTML += `<tr><td>${days[i]}</td><td>${(temperature -32) * (5/9)}C | ${temperature}F</td></tr>`;
    }
    else if (scale=="C"){
        document.getElementById("temperature-output").innerHTML += `<tr><td>${days[i]}</td><td>${temperature}C | ${(temperature * 9/5) + 32}F</td></tr>`;
    }
    else{
        document.getElementById("temperature-output").innerHTML += `Invalid scale`;
    }
}

for(let i=0; i<7; i++){
    let temp = prompt(`Enter the temperature on ${days[i]}`); // getting the temp
    temperatures.push(temp);// adding elements to the array
    convertTemperature(temperatures[i],scale,i);
}

console.log(temperatures);



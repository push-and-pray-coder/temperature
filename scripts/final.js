// creating variables
let temperatures = []; // this is an empty array
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// step 1 - user inputs the scale
let scale = prompt("Enter the scale: C or F ");


for(let i=0; i<7; i++){
    let temp = prompt("Enter the temp " + i); // getting the temp
    temperatures.push(temp);// adding elements to the array

    document.getElementById("array-temps").innerHTML += `<p>${days[i]} ${temperatures[i]} ${scale}</p>`;
}

console.log(temperatures);



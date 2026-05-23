//constants
const city ="San Diego";

//step 1. Create a function and C and converts it to F
function celsiusToFarenheit(celsius){
    return (celsius * 9/5) + 32;
}
//step 2. Create a var fo each day with C
let mondayC = 45;
let tuesdayC = 40;
let wednesdayC = 20;
let thursdayC = 35;
let fridayC = 15;

//step 3. Call the function for every day
let mondayF = celsiusToFarenheit(mondayC);
let tuesdayF = celsiusToFarenheit(tuesdayC);
let wednesdayF = celsiusToFarenheit(wednesdayC);
let thursdayF = celsiusToFarenheit(thursdayC);
let fridayF = celsiusToFarenheit(fridayC);

//step 4. create output to the HTML
let output = "";
output += `<tr><td>Monday</td><td> ${mondayC}°C|${mondayF}°F</td><td><img src="hot.svg" class="table-temp-icon"></td></tr>`;
output += `<tr><td>Tuesday</td><td> ${tuesdayC}°C|${tuesdayF}°F</td><td><img src="hot.svg" class="table-temp-icon"></td></tr>`;
output += `<tr><td>Wednesday</td><td> ${wednesdayC}°C|${wednesdayF}°F</td><td><img src="cold.svg" class="table-temp-icon"></td></tr>`;
output += `<tr><td>Thursday</td><td> ${thursdayC}°C|${thursdayF}°F</td><td><img src="hot.svg" class="table-temp-icon"></td></tr>`;
output += `<tr><td>Friday</td><td> ${fridayC}°C|${fridayF}°F</td><td><img src="cold.svg" class="table-temp-icon"></td></tr>`;

document.getElementById("forecast").innerHTML = output;

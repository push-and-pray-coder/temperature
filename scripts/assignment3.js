scale = prompt("Input temperature in C or F?");
temperature = prompt("Enter the temperature");

function convertTemperature(temperature,scale){
    if (scale=="F"){
        document.getElementById("temperature-output").innerHTML += `<p>Temperature ${(temperature -32) * (5/9)}C | ${temperature}F</p>`;
    }
    else if (scale=="C"){
        document.getElementById("temperature-output").innerHTML += `<p>Temperature ${temperature}C | ${(temperature * 9/5) + 32}F</p>`;
    }
    else{
        document.getElementById("temperature-output").innerHTML += `Invalid scale`;
    }
}

convertTemperature(temperature,scale);

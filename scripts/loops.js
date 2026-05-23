console.log ("loops");

const num = 2;

for (let i=1;i<=21;i+=2){
    document.write(`<p>${i}</p>`);
}

for (let i=1;i<=10;i++){
    document.write(`<p> ${num} X ${i} = ${num*i}</p>`)
}

// temp of 7 days using an array
//              0  1  2  3  4  5
let temps = [30,40,25,15,24,35];

console.log(temps[0]);
console.log(temps[1]);
console.log(temps[2]);
console.log(temps[3]);
console.log(temps[4]);
console.log(temps[5]);

for(let i=0; i<=5; i++){
    document.write(`<li> ${temps[i]} </li>`);
}
let rlSync = require('readline-Sync');
let bill = parseFloat(rlSync.question('What is the bill? '));
let tipPercent = parseFloat(rlSync.question('What is the tip percentage? '));

let tip = bill * tipPercent / 100;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
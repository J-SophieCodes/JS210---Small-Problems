let rlSync = require('readline-Sync');
let currentAge = parseInt(rlSync.question('What is your age? '), 10);
let retirementAge = parseInt(rlSync.question('At what age would you like to retire? '), 10);

let yearsToRetirement = retirementAge - currentAge;
let currentYear = (new Date()).getFullYear();
let retirementYear = currentYear + yearsToRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToRetirement} years of work to go!`);
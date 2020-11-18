let rlSync = require('readline-Sync');

let numbers = [];
numbers.push(rlSync.question('Enter the 1st number: '));
numbers.push(rlSync.question('Enter the 2nd number: '));
numbers.push(rlSync.question('Enter the 3rd number: '));
numbers.push(rlSync.question('Enter the 4th number: '));
numbers.push(rlSync.question('Enter the 5th number: '));

let lastNum = rlSync.question('Enter the last number: ');

if (numbers.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in [${numbers}].`);
} else {
  console.log(`The number ${lastNum} does not appear in [${numbers}].`);
}

if (numbers.some(num => num > lastNum)) {
  console.log(`At least one number in [${numbers}] is greater than ${lastNum}.`);
} else {
  console.log(`All numbers in [${numbers}] are less than ${lastNum}.`);
}
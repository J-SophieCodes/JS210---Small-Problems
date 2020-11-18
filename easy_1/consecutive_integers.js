let rlSync = require('readline-Sync');

let number = parseInt(rlSync.question('Please enter an integer greater than 0: ', {
  limit: /^[1-9]\d*$/
}), 10);

let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ', {
  limit: ['s', 'p'],
  caseSensitive: false
});

function sum(int) {
  let result = 0;

  for (let num = 1; num <= int; num++) {
    result += num;
  }

  return result;
}

function product(int) {
  let result = 1;

  for (let num = 1; num <= int; num++) {
    result *= num;
  }

  return result;
}

switch (operation) {
  case 's':
    console.log(`The sum of the integers between 1 and ${number} is ${sum(number)}`);
    break;
  case 'p':
    console.log(`The product of the integers between 1 and ${number} is ${product(number)}`);
    break;
}
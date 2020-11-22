/*
Description:
Write a function that displays a four-pointed diamond in an nxn grid,
where n is an odd integer supplied as an argument to the function. 
You may assume that the argument will always be an odd integer.

Problem Definition:
  - input: odd integer (n)
  - output: output to screen (string)
  - rules/model:
    - n x n grid
    - odd number of * in each row, centered in n spaces
    - middle row has n stars

Examples / Test Cases:
diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *

 diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

Data Structure:
  - input: integer
  - rules: strings in array
    -

Algorithm:
  - iterate between -floor(n / 2) to floor(n / 2), increment by 1
  - padStart = abs(-floor(n / 2)) with spaces
  - padEnd = abs(-floor(n / 2)) with spaces
  - n - padStart - padEnd = number of stars
*/


function diamond(n) {
  let result = [];
  let end = Math.floor(n / 2);
  let start = -end;

  for (let i = start; i <= end; i++) {
    let padding = Math.abs(i);
    let stars = '*'.repeat(n - (padding * 2));
    let spaces = ' '.repeat(padding);
    result.push(spaces + stars + spaces);
  }

  console.log(result.join('\n'));
}

diamond(1);
diamond(3);
diamond(9);

function hollowSpaces(n, padding) {
  let count = n - (padding * 2) - 2;

  if (count < 0) {
    return '*';
  } else {
    return '*' + ' '.repeat(count) + '*';
  }
}

function hollowDiamond(n) {
  let result = [];
  let end = Math.floor(n / 2);
  let start = -end;

  for (let i = start; i <= end; i++) {
    let padding = Math.abs(i);
    let hollow = hollowSpaces(n, padding);
    let spaces = ' '.repeat(padding);
    result.push(spaces + hollow + spaces);
  }

  console.log(result.join('\n'));
}

hollowDiamond(1);
hollowDiamond(3);
hollowDiamond(9);
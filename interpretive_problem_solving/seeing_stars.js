/*
Description:
Write a function that displays an 8-pointed star in an nxn grid, 
where n is an odd integer that is supplied as an argument to the 
function. The smallest such star you need to handle is a 7x7 grid 
(i.e., when n is 7).

Problem Definition:
  - input: integer (n)
  - output: print to screen (string)
  - rules/model:
    - n x n grid
    - middle row has n stars
    - bottom half is the reverse of the top half
      - 3 stars in each row; from middle radiating outward
        - 0 space in between
        - 1 space in between
        - 2 spaces in between

Examples / Test Cases:
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

Data Structure:
  - input: integer
  - rules: string
    -

Algorithm:
  - let half = Math.floor(n/2)
  - iterate from -half to half, for each num:
    - join ['*', '*', '*'] with (Math.abs(num) - 1) spaces
    - pad each side with (Math.abs(num) - half) spaces
*/

function star(n) {
  let half = Math.floor(n / 2);
  let rows = [];

  for (let row = -half; row <= half; row++) {
    if (row === 0) {
      rows.push('*'.repeat(n));
    } else {
      let starspacing = ' '.repeat((Math.abs(row) - 1));
      let padding = ' '.repeat(half - (Math.abs(row)));
      rows.push(padding + ['*', '*', '*'].join(starspacing) + padding);
    }
  }

  return rows.join('\n');
}

console.log(star(7));
console.log(star(9));
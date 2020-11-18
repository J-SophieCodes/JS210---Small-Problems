// function stringy(num) {
//   return ''.padStart(num, '10');
// }

function stringy(num) {
  let str = '';

  for (let idx = 0; idx < num; idx++) {
    if (idx % 2 === 0) {
      str += '1';
    } else {
      str += '0';
    }
  }

  return str;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
// function swapCase(str) {
//   return str.split('').map(swap).join('');
// }

function swap(char) {
  return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
}

function swapCase(str) {
  return str.replace(/[a-z]/gi, swap);
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
const MAX_FEATURED = 9876543201;
function isOdd(num) {
  return num % 2 === 1;
}

function isMultipleOf7(num) {
  return num % 7 === 0;
}

function hasUniqueDigits(num) {
  let numStr = String(num).split('').sort().join('');
  let uniques = numStr.replace(/(.)\1+/g, '$1');
  return numStr.length === uniques.length;
}

function isfeatured(num) {
  return isOdd(num) && hasUniqueDigits(num);
}

function firstOddMultipleOf7(num) {
  for (++num; num < MAX_FEATURED; num++) {
    if (isOdd(num) && isMultipleOf7(num)) {
      return num;
    }
  }

  return MAX_FEATURED;
}

function featured(num) {
  let start = firstOddMultipleOf7(num);

  for (num = start; num < MAX_FEATURED; num += 14) {
    if (isfeatured(num)) {
      return num;
    }
  }

  return 'None found.';
}

console.log(featured(6));            // 7
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
console.log(featured(MAX_FEATURED)); // None found.
function rotateDigits(digits) {
  return digits.slice(1) + digits[0];
}

function rotateRightmostDigits(num, n) {
  let digits = String(num);
  let firstHalf = digits.slice(0, digits.length - n);
  let secondHalf = rotateDigits(digits.slice(-n));
  return Number(firstHalf + secondHalf);
}

function maxRotation(num) {
  for (let count = String(num).length; count > 1; count--) {
    num = rotateRightmostDigits(num, count);
  }

  return num;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
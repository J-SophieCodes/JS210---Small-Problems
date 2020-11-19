function rotateDigits(digits) {
  return digits.slice(1) + digits[0];
}

function rotateRightmostDigits(num, n) {
  let digits = String(num);
  let firstHalf = digits.slice(0, digits.length - n);
  let secondHalf = rotateDigits(digits.slice(-n));
  return Number(firstHalf + secondHalf);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
// rotate 1 => 1
console.log(rotateRightmostDigits(735291, 2));      // 735219
// rotate 91 => 19
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
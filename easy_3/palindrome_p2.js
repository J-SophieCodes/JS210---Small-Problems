function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

function isRealPalindrome(str) {
  let cleaned = str.replace(/\W/g, '').toLowerCase();
  return isPalindrome(cleaned);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
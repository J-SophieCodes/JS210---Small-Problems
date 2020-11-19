function leadingSubstrings(str) {
  return str.split('').map((_, idx) => str.slice(0, idx + 1));
}

// function substrings(str) {
//   let result = [];

//   for (let idx = 0; idx < str.length; idx++) {
//     let substr = str.slice(idx);
//     result = result.concat(leadingSubstrings(substr));
//   }

//   return result;
// }

function substrings(str) {
  return str.split('')
            .map((_, idx) => leadingSubstrings(str.slice(idx)))
            .flat();
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
function countMatch(str, regexp) {
  return (str.match(regexp) || []).length;
}

function letterCaseCount(str) {
  return {
    lowercase: countMatch(str, /[a-z]/g),
    uppercase: countMatch(str, /[A-Z]/g),
    neither: countMatch(str, /[^a-z]/gi)
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
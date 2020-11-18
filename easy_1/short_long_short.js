function compareLengths(a, b) {
  return a.length - b.length;
}

function shortLongShort(str1, str2) {
  let strings = [str1, str2].sort(compareLengths);
  return strings[0] + strings[1] + strings[0];
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
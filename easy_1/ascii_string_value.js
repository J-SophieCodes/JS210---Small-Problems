function asciiValue(str) {
  let value = 0;

  for (let idx = 0; idx < str.length; idx++) {
    value += str.charCodeAt(idx);
  }

  return value;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
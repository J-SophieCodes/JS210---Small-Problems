function centerOf(str) {
  let sides = Math.ceil(str.length / 2) - 1;
  let re = new RegExp(`^.{${sides}}(.+).{${sides}}$`);
  str.match(re);
  return RegExp.$1;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
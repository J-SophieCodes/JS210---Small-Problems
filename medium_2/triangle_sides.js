function compareNumbers(a, b) {
  return Number(a) - Number(b);
}

function isValidTriangle(a, b, c) {
  return a > 0 && (a + b > c);
}

function triangle(...sides) {
  sides.sort(compareNumbers);
  if (!isValidTriangle(...sides)) return 'invalid';
  let unique = sides.filter(side => side === sides[1]).length;

  switch (unique) {
    case 1: return 'scalene';
    case 2: return 'isosceles';
    case 3: return 'equilateral';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
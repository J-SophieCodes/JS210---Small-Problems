function compareNumbers(a, b) {
  return Number(a) - Number(b);
}

function isValidTriangle(a, b, c) {
  return a > 0 && (a + b + c === 180);
}

function triangle(...angles) {
  angles.sort(compareNumbers);
  if (!isValidTriangle(...angles)) return 'invalid';

  let maxAngle = angles[2];
  if (maxAngle === 90) {
    return 'right';
  } else if (maxAngle < 90) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
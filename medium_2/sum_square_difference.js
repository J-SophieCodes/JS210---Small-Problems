
function sumSquareDifference(n) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let num = 1; num <= n; num++) {
    sum += num;
    sumOfSquares += num ** 2;
  }

  let squareOfSum = sum ** 2;
  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
// function getStringLength(num) {
//   return num.toString().length;
// }

// function fibonacci(num) {
//   if (num < 3) {
//     return 1;
//   }
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// function findFibonacciIndexByLength(num) {
//   for (let idx = 1; ; idx++) {
//     if (getStringLength(fibonacci(idx)) === num) {
//       return idx;
//     }
//   }
// }

function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

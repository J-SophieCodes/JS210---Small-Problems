function fibonacci(nth) {
  let last;
  let secondLast;
  let current;

  for (let idx = 1; idx <= nth; idx++) {
    if (idx <= 2) {
      current = 1;
    } else {
      current = last + secondLast;
    }

    [last, secondLast] = [current, last];
  }

  return current;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
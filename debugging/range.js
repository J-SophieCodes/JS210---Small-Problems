function range(start, end) {
  if (arguments.length === 1) {
    return range(0, start);
  }

  const numbers = [];

  for (let element = start; element <= end; element++) {
    numbers.push(element);
  }

  return numbers;
}

// Examples

console.log(range(10, 20));
console.log(range(5));
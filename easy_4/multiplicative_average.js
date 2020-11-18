function product(total, currentValue) {
  return total * currentValue;
}

function showMultiplicativeAverage(arr) {
  let average = arr.reduce(product, 1) / arr.length;
  return average.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
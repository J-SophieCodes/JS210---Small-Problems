function add(total, currentValue) {
  return total + currentValue;
}

// function last(arr) {
//   return arr.slice(-1)[0] || 0;
// }

// function sumOfSums(arr) {
//   return arr.reduce((sums, current, idx) => {
//               // let sum = arr.slice(0, idx + 1).reduce(add, 0);
//               // sums.push(sum);
//               sums.push(last(sums) + current);
//               return sums;
//             }, [])
//             .reduce(add, 0);
// }

function sumOfSums(arr) {
  return arr.map((_, idx) => arr.slice(0, idx + 1).reduce(add))
            .reduce(add);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
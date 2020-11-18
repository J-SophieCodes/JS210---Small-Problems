let start = parseInt(prompt('Enter starting value: '), 10);
let end = parseInt(prompt('Enter ending value: '), 10);

if (start % 2 === 1) {
  start++;
}

for (let num = start; num < end; num += 2) {
  console.log(num);
}
// function fridayThe13ths(year) {
//   let count = 0;

//   for (let month = 0; month < 12; month++) {
//     let the13th = new Date(year, month, 13);
//     if (the13th.getDay() === 5) count++;
//   }

//   return count;
// }

function fridayThe13ths(year) {
  const thirteenths = [];

  for (let i = 0; i < 12; i += 1) {
    thirteenths.push(new Date(year, i, 13));
  }

  return thirteenths.filter(day => day.getDay() === 5).length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
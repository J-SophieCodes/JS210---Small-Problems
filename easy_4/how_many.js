function counter(list, item) {
  list[item] = list[item] || 0;
  list[item] += 1;
  return list;
}

function countOccurrences(arr) {
  let list = arr.reduce(counter, {});
  Object.keys(list).forEach(item => {
    console.log(`${item} => ${list[item]}`);
  });
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
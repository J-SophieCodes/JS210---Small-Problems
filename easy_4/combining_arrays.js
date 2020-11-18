function union(...arrays) {
  let newArr = [];

  arrays.forEach(array => {
    array.forEach(num => {
      if (!newArr.includes(num)) {
        newArr.push(num);
      }
    });
  });

  return newArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
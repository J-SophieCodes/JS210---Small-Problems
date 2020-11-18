function multiplyList(arr1, arr2) {
  let list = [];
  let max = arr1.length;
  for (let idx = 0; idx < max; idx++) {
    list.push(arr1[idx] * arr2[idx]);
  }
  return list;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
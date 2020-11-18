function interleave(arr1, arr2) {
  let combined = [];
  let max = arr1.length;
  for (let idx = 0; idx < max; idx++) {
    combined.push(arr1[idx], arr2[idx]);
  }
  return combined;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
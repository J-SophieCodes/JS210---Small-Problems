function bubbleSort(list) {
  for (let end = list.length - 1; end >= 1; end--) {
    for (let idx = 0; idx < end; idx++) {
      if (list[idx] > list[idx + 1]) {
        [list[idx], list[idx + 1]] = [list[idx + 1], list[idx]];
      }
    }
  }

  return list;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
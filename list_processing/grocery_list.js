function buyFruit(list) {
  return list.flatMap(item => {
    let basket = [];
    for (let cycle = 1; cycle <= item[1]; cycle++) {
      basket.push(item[0]);
    }
    return basket;
  });
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
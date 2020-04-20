function sort(list) {
  for (let i = list.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (list[j] < list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return list;
}
sort([23, 56, 76, 87, 1, 22]);

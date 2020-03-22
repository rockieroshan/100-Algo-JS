function arrayPreviousLess(items: number[]): number[] {
  const lessThanlist: number[] = [];
  for (let index = items.length - 1; index >= 0; index--) {
    for (let j = index; j >= 0; j--) {
      if (items[index] > items[j]) {
        lessThanlist.unshift(items[j]);
        break;
      } else if (j === 0) {
        lessThanlist.unshift(-1);
      }
    }
  }
  return lessThanlist;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

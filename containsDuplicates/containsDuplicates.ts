function containsDuplicates(arr: number[]): boolean {
  const list = arr.sort((a, b) => a - b);
  for (let index = 0; index < list.length; index++) {
    if (list[index] === list[index + 1]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));

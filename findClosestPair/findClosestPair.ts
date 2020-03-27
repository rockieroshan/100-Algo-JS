function findClosestPair(numbers: number[], sum: number): number {
  let distance: number = -1;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      const element = numbers[i] + numbers[j];
      const index = Math.abs(i - j);
      if (element === sum) {
        distance = index;
      }
    }
  }
  return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));

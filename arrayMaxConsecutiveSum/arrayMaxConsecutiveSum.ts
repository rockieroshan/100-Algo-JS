function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let sum = 0;
  let max = 0;

  for (const iterator of inputArray) {
    sum += iterator;
  }
  for (let index = k; index < inputArray.length; index++) {
    sum -= inputArray[index - k];
    sum += inputArray[index];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

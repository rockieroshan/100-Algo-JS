function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDiff = 0;
  for (let index = 0; index < inputArray.length; index++) {
    const diffCheck = Math.abs(inputArray[index] - inputArray[index - 1]);
    maxDiff > diffCheck ? maxDiff : (maxDiff = diffCheck);
  }
  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

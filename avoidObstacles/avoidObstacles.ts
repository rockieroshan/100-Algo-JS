function avoidObstacles(inputArray: number[]): number {
  inputArray = inputArray.sort((a, b) => a - b);
  const largestnum = inputArray[inputArray.length - 1];
  for (let index = 1; index <= largestnum + 1; index++) {
    if (inputArray.every(element => element % index !== 0)) {
      return index;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));

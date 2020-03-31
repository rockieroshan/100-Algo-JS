function houseNumbersSum(inputArray: number[]): number {
  let totalCount: number = 0;
  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] === 0) {
      return totalCount;
    }
    totalCount += inputArray[index];
  }
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));

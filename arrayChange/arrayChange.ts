function arrayChange(inputArray: number[]): number {
  let count = 0;
  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] >= inputArray[index + 1]) {
      const difference = inputArray[index] + 1 - inputArray[index + 1];
      inputArray[index + 1] = inputArray[index] + 1;
      count += difference;
    }
  }
  return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 3, 4]));
console.log(arrayChange([1, 1, 3]));

function adjacentElementsProduct(inputArray: number[]): number {
  let largest = inputArray[0] * inputArray[1];
  for (let index = 1; index < inputArray.length; index++) {
    let result = inputArray[index] * inputArray[index + 1];
    return largest < result ? result : largest;
  }
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([54, 5, -22, 3]));
console.log(adjacentElementsProduct([22, 34, -66, 89, 21, 90]));
console.log(adjacentElementsProduct([53, 75, -999, 10, -7, 35]));

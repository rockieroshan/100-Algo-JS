const arrayConversion = (inputArray: number[]): number => {
  let flag: boolean = true;
  while (inputArray.length !== 1) {
    inputArray = SumOrMultiply(inputArray, flag);
    flag = !flag;
  }
  return inputArray[0];
};
const SumOrMultiply = (num: number[], bool: boolean) => {
  const resultList: number[] = [];
  if (bool) {
    for (let index = 0; index < num.length; index += 2) {
      resultList.push(num[index] + num[index + 1]);
    }
  } else {
    for (let index = 0; index < num.length; index += 2) {
      resultList.push(num[index] * num[index + 1]);
    }
  }
  return resultList;
};
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

function largestOfFour(nums: number[][]): number[] {
  const refactoredList: number[] = [];

  // type 1
  // nums.forEach(ele => {
  //   const resp = ele.sort((a, b) => b - a);
  //   refactoredList.push(resp[0]);
  // });
  // type 2
  for (const iterator of nums) {
    let largestNum: number = 0;
    for (const item of iterator) {
      largestNum = largestNum < item ? item : largestNum;
    }
    refactoredList.push(largestNum);
  }

  return refactoredList;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
);

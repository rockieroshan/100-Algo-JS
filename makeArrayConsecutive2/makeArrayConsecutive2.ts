function makeArrayConsecutive2(statues: number[]): number {
  const max: number = Math.max(...statues);
  const min: number = Math.min(...statues);
  let count: number = 0;
  let missingNumber: number[] = [];
  for (let index = min; index < max; index++) {
    if (statues.indexOf(index) === -1) {
      count++;
      missingNumber.push(index);
    }
  }
  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));

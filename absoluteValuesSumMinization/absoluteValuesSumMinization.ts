function absoluteValuesSumMinimization(a: number[]): number {
  const args = [...a];
  return args.reduce((a: number, b: number): number => {
    return a + b;
  });
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

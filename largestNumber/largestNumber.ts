function largestNumber(n: number): number {
  let word: string = '';
  for (let index = 0; index < n; index++) {
    const element = index;
    word = word.concat('9');
  }
  return parseInt(word);
}

console.log(largestNumber(2));
console.log(largestNumber(4));
console.log(largestNumber(100));

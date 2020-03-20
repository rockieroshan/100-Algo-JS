function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;
  for (let index = 0; index < sequence.length; index++) {
    if (sequence[index] <= sequence[index - 1]) {
      count++;
      if (
        sequence[index + 1] <= sequence[index - 1] &&
        sequence[index] <= sequence[index - 2]
      ) {
        return false;
      }
    }
  }
  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 1, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));

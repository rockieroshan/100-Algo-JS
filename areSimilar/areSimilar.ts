function areSimilar(a: number[], b: number[]): boolean {
  const aSort = a.sort((a: number, b: number) => {
    return a - b;
  });
  const bSort = b.sort((a: number, b: number) => {
    return a - b;
  });
  return JSON.stringify(aSort) === JSON.stringify(bSort);
}
console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));

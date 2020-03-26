function crossingSum(matrix: number[][], a: number, b: number): number {
  const column = matrix[0].reduce((a, b) => a + b);
  let row = 0;

  for (let index = 0; index < matrix.length; index++) {
    row += index !== a ? matrix[index][b] : 0;
  }
  return column + row;
}

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3));

function matrixElementsSum(matrix: any[][]): number {
  let priceTotal: number = 0;
  const banIndex: number[] = [];
  for (let index = 0; index < matrix.length; index++) {
    for (let j = 0; j < matrix[index].length; j++) {
      if (matrix[index][j] === 0) {
        banIndex.push(j);
      } else if (banIndex.indexOf(j) === -1) {
        priceTotal += matrix[index][j];
      }
    }
    return priceTotal;
  }
}

console.log(matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]));

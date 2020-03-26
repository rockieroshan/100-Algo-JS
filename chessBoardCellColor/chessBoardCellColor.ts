function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const board: object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };
  const cell1result = (board[cell1[0]] + parseInt(cell1[1])) % 2;
  const cell2result = (board[cell2[0]] + parseInt(cell2[1])) % 2;
  return cell1result === cell2result;
}

console.log(chessBoardCellColor('a1', 'c3'));
console.log(chessBoardCellColor('a1', 'h3'));

function bishopAndPawn(bishop: string, pawn: string): boolean {
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
  const bishopx = board[bishop[0]];
  const bishopy = parseInt(bishop[1]);
  const pawnx = board[pawn[0]];
  const pawny = parseInt(pawn[1]);
  if (
    bishopx + bishopy === pawnx + pawny ||
    bishopx + pawny === pawnx + bishopy
  ) {
    return true;
  }
  return false;
}

console.log(bishopAndPawn('a1', 'c3'));

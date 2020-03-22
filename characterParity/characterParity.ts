function characterParity(symbol: string): string {
  const num = parseInt(symbol);
  return isNaN(num) ? 'Not a number' : num % 2 === 0 ? 'even' : 'odd';
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));

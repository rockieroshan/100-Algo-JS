function factorializeANumber(num: number): number {
  let total: number = 1;
  for (let index = 1; index <= num; index++) {
    total *= index;
  }
  return total;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
console.log(factorializeANumber(189));

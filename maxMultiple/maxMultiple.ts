function maxMultiple(divisor: number, bound: number): number {
  const remain: number = bound % divisor;
  return bound - remain;
}

console.log(maxMultiple(3, 10));

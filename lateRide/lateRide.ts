function lateRide(n: number): number {
  const hours: number = Math.floor(n / 60);
  const min: number = n % 60;
  return hours
    .toString()
    .concat(min.toString())
    .split('')
    .map(char => parseInt(char))
    .reduce((a, b) => a + b);
}
 
console.log(lateRide(240));
console.log(lateRide(808));

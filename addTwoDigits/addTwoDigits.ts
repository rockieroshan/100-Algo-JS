function addTwoDigits(n: any): number {
  return n
    .toString()
    .split('')
    .reduce((a: string, b: string): number => {
      return parseInt(a) + parseInt(b);
    });
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(211));
console.log(addTwoDigits(33444));
console.log(addTwoDigits(33423542354));

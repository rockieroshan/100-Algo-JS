function isLucky(n: number): boolean {
  const numb: string = n.toString();

  const sum = intTobeAdded => {
    return intTobeAdded
      .split('')
      .map(ele => parseInt(ele))
      .reduce((a, b) => a + b);
  };

  const firstHalf: string = sum(n.toString().slice(0, numb.length / 2));
  const secondHalf: string = sum(n.toString().slice(numb.length / 2));
  return firstHalf === secondHalf;
}

console.log(isLucky(1230));
console.log(isLucky(239017));

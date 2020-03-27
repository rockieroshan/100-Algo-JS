function evenDigitsOnly(num: number): boolean {
  return num
    .toString()
    .split('')
    .every(ele => parseInt(ele) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));

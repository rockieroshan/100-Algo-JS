function circleOfNumbers(n: number, firstNumber: number): number {
  const circle: number[] = [];
  const halfway: number = n / 2;
  for (let index = 0; index < n; index++) {
    circle.push(index);
  }
  if (firstNumber < halfway) {
    return circle[firstNumber + halfway];
  }
  return circle[firstNumber - halfway];
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(4, 4));

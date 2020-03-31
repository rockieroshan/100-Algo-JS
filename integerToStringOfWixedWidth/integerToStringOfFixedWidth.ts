function integerToStringOfFixedWidth(number: number, width: number): string {
  let stringNum: string = number.toString();
  let numWidth: number = stringNum.length;
  let diffwidth = width - stringNum.length;
  let padStart = '';
  if (numWidth > width) {
    stringNum = stringNum.slice(0, width);
  } else {
    for (let index = 0; index < diffwidth; index++) {
      padStart = padStart.concat('0');
    }
    return padStart.concat(stringNum);
  }
  return stringNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(56789, 9));

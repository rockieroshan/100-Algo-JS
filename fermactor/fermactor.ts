function fermactor(n: number): number[] {
  let total = 0;
  for (let index = 1; index < n; index++) {
    for (let jindex = 0; jindex < index; jindex++) {
      total = index ** 2 - jindex ** 2;
      if (total === n) {
        return [index, jindex];
      }
    }
  }
}

console.log(fermactor(15));
console.log(fermactor(1993));
console.log(fermactor(1987));
console.log(fermactor(1888));
console.log(fermactor(144));

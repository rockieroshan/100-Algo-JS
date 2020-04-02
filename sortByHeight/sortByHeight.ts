function sortByHeight(a: number[]): number[] {
  const filteredval = a
    .filter(ele => {
      if (ele !== -1) {
        return ele;
      }
    })
    .sort((a, b) => a - b);
  let indexVal = 0;
  console.log(filteredval);
  for (let index = 0; index < a.length; index++) {
    if (a[index] !== -1) {
      a[index] = filteredval[indexVal];
      indexVal++;
    }
  }
  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

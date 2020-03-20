function alternatingSums(a: number[]): number[] {
  let odd = 0;
  let even = 0;
  a.forEach((element, index) => {
    if (index % 2 === 0) {
      odd += element;
    } else {
      even += element;
    }
  });
  return [odd, even];
}

console.log(alternatingSums([50, 60, 30, 45, 70]));
console.log(alternatingSums([12, 6, 1, 5, 0]));
console.log(alternatingSums([22, 67, 889, 72, 90]));

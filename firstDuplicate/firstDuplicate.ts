function firstDuplicate(a: number[]): number {
  const charsObj: object = {};

  for (const key of a) {
    if (charsObj.hasOwnProperty(key)) {
      return key;
    }
    charsObj[key] = key;
  }
  return -1;
  // const unique = [];
  // a.filter(ele => {
  //   if (unique.indexOf(ele) === -1) {
  //     unique.push(ele);
  //   }
  // });
  // console.log(unique);
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));

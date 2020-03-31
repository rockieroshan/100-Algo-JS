function palindromeRearranging(inputString: string): boolean {
  const formatedStr: string[] = inputString.split('');
  const letterObject: object = {};
  let oddcount: number = 0;
  for (let index = 0; index < formatedStr.length; index++) {
    if (letterObject.hasOwnProperty(formatedStr[index])) {
      letterObject[formatedStr[index]]++;
    } else {
      letterObject[formatedStr[index]] = 1;
    }
  }
  for (const iterator in letterObject) {
    if (letterObject[iterator] % 2 !== 0) {
      oddcount++;
    }
  }
  return oddcount > 1 ? false : true;
}

console.log(palindromeRearranging('aabb'));

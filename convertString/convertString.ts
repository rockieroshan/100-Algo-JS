function convertString(s: string, t: string): boolean {
  const str: string[] = s.split('');
  let word: string = '';
  let indexVal: number = 0;

  for (let index = 0; index < s.length; index++) {
    if (s[index] === t[indexVal]) {
      word += s[index];
      indexVal++;
    }
  }
  return word === t;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));

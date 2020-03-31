function missingLetters(str: string): string {
  const alpha: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let index = 0; index < str.split('').length; index++) {
    if (str[index] !== alpha[index]) {
      return alpha[index];
    }
  }
}
console.log(missingLetters('bce'));
console.log(missingLetters('abce'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));

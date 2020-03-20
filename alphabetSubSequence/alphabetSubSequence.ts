function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split('');
  const charList: number[] = [];
  chars.forEach((letter: string) => {
    charList.push(letter.charCodeAt(0));
  });
  for (let index = 0; index < charList.length; index++) {
    const element = charList[index];
    if (charList[index] <= charList[index + 1]) {
      return true;
    }
  }
}

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));

function firstNotRepeatingCharacter(str: string): string {
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));

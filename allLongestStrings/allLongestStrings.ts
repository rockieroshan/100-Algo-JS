function allLongestStrings(inputArray: string[]): string[] {
  let wordLenght = 0;
  let list = [];
  inputArray.forEach((word: string): void => {
    wordLenght = wordLenght > word.length ? wordLenght : word.length;
  });
  inputArray.forEach((word: string): void => {
    word.length === wordLenght ? list.push(word) : null;
  });
  return list;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));

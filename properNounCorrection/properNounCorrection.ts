function properNounCorrection(noun: string): string {
  const str: string = noun;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));

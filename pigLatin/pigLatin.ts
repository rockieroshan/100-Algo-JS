function pigLatin(str: string): string {
  const firstVowel = str.search(/[aeiou]/);
  console.log(str.substr(firstVowel));

  return firstVowel === 0
    ? str + 'way'
    : str.substr(firstVowel) + str.substr(0, firstVowel) + 'ay';
}

console.log(pigLatin('glove'));
console.log(pigLatin('eight'));

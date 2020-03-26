function differentSymbolsNaive(str: string): number {
  const uniqueStr: string[] = [];
  const list: string[] = str.split('');
  for (let index = 0; index < list.length; index++) {
    if (!uniqueStr.includes(list[index])) {
      uniqueStr.push(list[index]);
    }
  }
  return uniqueStr.join('').length;
}

console.log(differentSymbolsNaive('cabca'));

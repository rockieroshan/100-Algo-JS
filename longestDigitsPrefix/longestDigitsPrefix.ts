function longestDigitsPrefix(inputString: string): string {
  const digits: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const prefix: string[] = [];
  const splitList: string[] = inputString.split('');
  for (const iterator of splitList) {
    if (!digits.includes(iterator)) {
      break;
    } else {
      prefix.push(iterator);
    }
  }
  return prefix.join('');
}

console.log(longestDigitsPrefix('123aa1'));

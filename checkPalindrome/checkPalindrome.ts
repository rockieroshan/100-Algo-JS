function checkPalindrome(inputString: string): boolean {
  const originalvalue = inputString.toLocaleLowerCase();
  const reversedvalue = originalvalue
    .split('')
    .reverse()
    .join('');
  if (originalvalue === reversedvalue) {
    return true;
  }
  return false;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

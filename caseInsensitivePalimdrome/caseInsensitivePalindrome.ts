function isCaseInsensitivePalindrome(inputString: string): boolean {
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

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));

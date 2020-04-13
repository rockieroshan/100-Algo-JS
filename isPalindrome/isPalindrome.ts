const isPalindrome = function(s) {
  if (s === '') return true;

  let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let j = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[j]) {
      return false;
    }
    j--;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));

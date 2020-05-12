var isPowerOfThree = function(n) {
  while (n > 1 && n % 3 === 0) {
    n /= 3;
    if (n === 1) return true;
  }
  return false;
};

console.log(isPowerOfThree(1));

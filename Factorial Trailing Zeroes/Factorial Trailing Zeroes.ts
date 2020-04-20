var trailingZeroes = function(n) {
  let numZeroes = 0;
  for (let i = 5; i <= n; i *= 5) {
    numZeroes += Math.floor(n / i);
  }
  return numZeroes;
};

// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

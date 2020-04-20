var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

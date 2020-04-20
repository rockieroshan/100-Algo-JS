const reverseBits = n => {
  return parseInt(
    ('0'.repeat(32 - n.toString(2).length) + n.toString(2)).split``.reverse()
      .join``,
    2
  );
};

// Input: 00000010100101000001111010011100;
// Output: 00111001011110000010100101000000;
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned
// integer 43261596, so return 964176192
// which its binary representation is 00111001011110000010100101000000.

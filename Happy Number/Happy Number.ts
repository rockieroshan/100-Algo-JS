var isHappy = function(n) {
  n = [...(n + '')];

  for (let i = 0; i < 1000; i++) {
    let count = 0;

    for (let j = 0; j < n.length; j++) {
      count += n[j] ** 2;
    }

    if (count === 1) return true;
    n = [...(count + '')];
  }
  return false;
};

// Input: 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

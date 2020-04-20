var rotate = function(nums, k) {
  for (let i = nums.length - 1; i >= nums.length - k; i--) {
    nums.unshift(nums.pop());
  }
  return nums;
};

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

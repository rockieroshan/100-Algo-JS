var maxSubArray = function(nums) {
  let maxSum = 0;
  let subSum = 0;

  for (let i = 0; i < nums.length; i++) {
    subSum += nums[i];
    if (subSum > maxSum) maxSum = subSum;
    if (subSum < 0) subSum = 0;
  }

  return maxSum === 0 ? Math.max(...nums) : maxSum;
};

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

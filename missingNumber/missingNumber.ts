var missingNumber = function(nums) {
  var res = nums.length;

  for (var i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i];
  }

  return res;
};

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

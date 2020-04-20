var removeDuplicates = function(nums) {
  var j = 0;
  var i = 0;
  for (l = nums.length; i < l; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i];
    }
  }
  return j + 1;
};

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.

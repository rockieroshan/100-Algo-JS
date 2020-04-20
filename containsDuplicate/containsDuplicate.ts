var containsDuplicate = function(nums) {
  var mapItem = {};
  for (var i = 0; i < nums.length; i++) {
    if (!mapItem[nums[i]]) {
      mapItem[nums[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};

// Input: [1,2,3,1]
// Output: true

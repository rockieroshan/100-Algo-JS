var intersect = function(nums1, nums2) {
  var map = {},
    intersect = [];

  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = ++map[nums1[i]] || 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      --map[nums2[i]];
      intersect.push(nums2[i]);
    }
  }
  return intersect;
};
console.log(intersect([9, 4, 9, 8, 4], [4, 9, 5]));

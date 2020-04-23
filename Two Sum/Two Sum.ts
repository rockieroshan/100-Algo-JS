const twoSum = function(nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};

// const twoSum = function (nums, target) {
//   const result = [];
//   let i = 0;
//   let j = 1;
//   while(i < nums.length) {
//     if (nums[i] + nums[j] === target) {
//       result.push(i,j)
//     }
//     i++;
//     j++;
//   }
//   return result;
// }

console.log(twoSum([2, 7, 11, 15], 9));

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

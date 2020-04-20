var majorityElement = function(nums) {
  // Boyer-Moore Voting Algorithm
  let count = 0,
    candidate = 0;
  for (let num of nums) {
    if (count == 0) {
      candidate = num;
    }
    count += num == candidate ? 1 : -1;
  }
  return candidate;
};
// var majorityElement = function(nums) {
//   const charMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     charMap[nums[i]] = charMap[nums[i]] || 0;
//     charMap[nums[i]]++;
//   }
//   let maxNum = 0;
//   for (let key in charMap) {
//     if (maxNum < Number(charMap[key])) {
//       maxNum = Number(charMap[key]);
//     }
//   }
//   const key = Object.keys(charMap);
//   for (let j = 0; j < key.length; j++) {
//     if (charMap[key[j]] === maxNum) {
//       return Number(key[j]);
//     }
//   }
// };
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1, 1, 2]));
console.log(majorityElement([9, 8, 8, 2]));

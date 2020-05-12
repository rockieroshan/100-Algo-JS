const moveZeroes = function(nums) {
  let numberOfZeros = 0;
  for (let i = 0; i < nums.length - numberOfZeros; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
      numberOfZeros++;
      i--;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 0, 1]));

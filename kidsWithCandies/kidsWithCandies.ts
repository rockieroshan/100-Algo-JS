var kidsWithCandies = function(candies, extraCandies) {
  const result = [];
  const Max = Math.max(...candies);
  candies.map((ele, i, arr) => {
    ele + Max >= extraCandies ? result.push(true) : result.push(false);
  });
  return result;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

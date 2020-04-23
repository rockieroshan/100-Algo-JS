var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
      count++;
    } else {
      break;
    }
  }
  return count;
};
console.log(lengthOfLongestSubstring('akrak'));

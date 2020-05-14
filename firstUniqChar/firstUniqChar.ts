var firstUniqChar = function(s) {
  let m = new Map();
  for (i = 0; i < s.length; i++) {
    if (!m.has(s[i])) m.set(s[i], i);
    else m.set(s[i], -1);
  }
  let indices = Array.from(m.values());
  for (let index of indices) {
    if (index >= 0) return index;
  }
  return -1;
};

console.log(firstUniqChar('rakesha'));

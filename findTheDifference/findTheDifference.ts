var findTheDifference = function(s, t) {
  const m = new Map();
  s.split('').map(ele => {
    !m.has(ele) ? m.set(ele, 1) : m.set(ele, m.get(ele) + 1);
  });
  for (let val of t) {
    if (!m.has(val)) return val;
  }
};

console.log(findTheDifference('abcd', 'abcde'));

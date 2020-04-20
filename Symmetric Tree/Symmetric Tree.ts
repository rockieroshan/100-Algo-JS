var isSame = function(left, right) {
  if (!left && !right) return true;
  if (!left || !right || right.val !== left.val) return false;
  return isSame(left.left, right.right) && isSame(left.right, right.left);
};
var isSymmetric = function(root) {
  if (!root) return true;
  return isSame(root.left, root.right);
};

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

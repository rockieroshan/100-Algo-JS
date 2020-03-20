function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const yourestrong = yourLeft >= yourRight ? yourLeft : yourRight;
  const youreweak = yourLeft <= yourRight ? yourLeft : yourRight;
  const friendstrong = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
  const friendsweak = friendsLeft <= friendsRight ? friendsLeft : friendsRight;

  return yourestrong === friendstrong && youreweak === friendsweak;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));

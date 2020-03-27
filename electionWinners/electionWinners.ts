function electionsWinners(votes: number[], k: number): number {
  let count: number = 0;
  for (let index = 0; index < votes.length; index++) {
    const element = votes[index];
    if (Math.max(...votes) - votes[index] < k) {
      count++;
    }
  }
  return count;
}

console.log(electionsWinners([2, 3, 5, 2], 3));

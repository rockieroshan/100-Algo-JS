function isTandemRepeat(inputString: string): boolean {
  const firstHalf: string = inputString.slice(0, inputString.length / 2);
  const secHalf: string = inputString.slice(inputString.length / 2);
  return firstHalf === secHalf ? true : false;
}

console.log(isTandemRepeat('tandemtandem'));
console.log(isTandemRepeat('qqq'));
console.log(isTandemRepeat('2w2ww'));

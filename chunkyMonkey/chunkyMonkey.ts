function chunkyMonkey(arr: any[], size: number): number[][] {
  const nestedList: number[][] = [];
  let counter: number = 0;

  while (counter < arr.length) {
    nestedList.push(arr.slice(counter, counter + size));
    counter += size;
  }
  return nestedList;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

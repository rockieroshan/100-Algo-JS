function flattenArray(arr: any[]): any[] {
  const newList: string[] = [];
  function flat(arr: any[]) {
    arr.forEach(ele => {
      if (Array.isArray(ele)) {
        flat(arr);
      } else {
        newList.push(ele);
      }
    });
  }
  flat(arr);
  return newList;
}

console.log(flattenArray([[['a']], [['b']]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));

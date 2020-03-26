function commonCharacterCount(s1: string, s2: string): number {
  const s1String: string[] = s1.split('');
  const s2String: string[] = s2.split('');
  let totalCount: number = 0;
  const createObj = (array: string[]) => {
    const obj = {};
    for (let index = 0; index < array.length; index++) {
      obj.hasOwnProperty(array[index])
        ? obj[array[index]]++
        : (obj[array[index]] = 1);
    }
    console.log(obj);
    return obj;
  };
  const s1Obj: object = createObj(s1String);
  const s2Obj: object = createObj(s2String);

  for (const key in s1Obj) {
    if (s2Obj.hasOwnProperty(key)) {
      if (s2Obj[key] < s1Obj[key]) {
        totalCount += s2Obj[key];
      } else {
        totalCount += s1Obj[key];
      }
    }
    return totalCount;
  }
}

console.log(commonCharacterCount('aabcc', 'adcaa'));

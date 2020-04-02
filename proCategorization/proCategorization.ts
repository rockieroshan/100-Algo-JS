function proCategorization(
  pros: string[],
  preferences: string[][]
): string[][][] {
  const proPref = [];
  const formatObj: object = {};

  for (let i = 0; i < pros.length; i++) {
    for (let j = 0; j < preferences[i].length; j++) {
      if (formatObj.hasOwnProperty(preferences[i][j])) {
        formatObj[preferences[i][j]].push(pros[i]);
      } else {
        formatObj[preferences[i][j]] = pros[i];
      }
    }
  }
  console.log('formatObj:', formatObj);

  for (const key in formatObj) {
    if (formatObj.hasOwnProperty(key)) {
      proPref.push([key], [...formatObj[key]]);
    }
  }
  return proPref;
}

console.log(
  proCategorization(
    ['Jack', 'Leon', 'Maria'],
    [
      ['Computer repair', 'Handyman', 'House cleaning'],
      ['Computer lessons', 'Computer repair', 'Data recovery service'],
      ['Computer lessons', 'House cleaning']
    ]
  )
);

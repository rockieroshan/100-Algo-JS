function alphabeticShift(inputString: string): string {
  const alpha: object = {
    a: 'b',
    b: 'c',
    c: 'd',
    d: 'e',
    e: 'f',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'k',
    k: 'l',
    l: 'm',
    m: 'n',
    n: 'o',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    w: 'x',
    x: 'y',
    y: 'z',
    z: 'a'
  };
  // type 1 with obj
  // let result = [];
  // inputString.split('').forEach( letters => {
  //  result.push(alpha[letters]);
  // })
  // return result.join('');

  // type 2 with obj
  let shifted = inputString.split('');
  for (let index = 0; index < shifted.length; index++) {
    shifted[index] = alpha[inputString[index]];
  }
  return shifted.join('');
}

console.log(alphabeticShift('crazy'));

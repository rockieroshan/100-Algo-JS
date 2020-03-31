function htmlEndTagByStartTag(startTag: string): string {
  let splitString: string = startTag.split(' ')[0];
  let starttag: string[] = splitString.split('');
  let endTag: string = '</';
  for (let index = 1; index < starttag.length; index++) {
    endTag += starttag[index];
  }
  endTag = endTag[endTag.length - 1] === '>' ? endTag : (endTag += '>');
  return endTag;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));

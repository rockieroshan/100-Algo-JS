function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  const fileIds: number[] = [];
  changes.map(ids => {
    const eachTimeVal = ids[0];
    const eachIds = ids[1];
    if (eachTimeVal > lastBackupTime) {
      if (!fileIds.includes(eachIds)) {
        fileIds.push(eachIds);
      }
    }
  });
  return fileIds.sort((a, b) => a - b);
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]
  ])
);

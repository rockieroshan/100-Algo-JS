function domainType(domains: string[]): string[] {
  const domain: string[] = [];
  for (let index = 0; index < domains.length; index++) {
    const element = domains[index].split('.').slice(-1)[0];
    element === 'org'
      ? domain.push('organization')
      : element === 'com'
      ? domain.push('commercial')
      : element === 'net'
      ? domain.push('network')
      : element === 'info'
      ? domain.push('inforomation')
      : null;
  }
  return domain;
}
console.log(
  domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'])
);

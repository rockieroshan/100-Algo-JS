var defangIPaddr = function(address) {
  return address.split('.').join('[.]');
};
defangIPaddr('1.1.1.1');

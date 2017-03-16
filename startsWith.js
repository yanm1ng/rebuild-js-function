String.prototype.newStartsWith = function (s) {
  return this.indexOf(s) == 0;
}

var str = 'aabbcc';
console.log(str.newStartsWith('aa'));
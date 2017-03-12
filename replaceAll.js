String.prototype.newReplaceAll = function (s1, s2) {
  return this.replace(new RegExp(s1, "gm"), s2)
}

var str = 'aabbcc';
console.log(str.newReplaceAll('a', 'b'));

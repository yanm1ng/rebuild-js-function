String.prototype.newEndWith = function (s) {
  var d = this.length - s.length;
  return (d >= 0 && this.lastIndexOf(s) == d)
}

var str = 'aabbcc';
console.log(str.newEndWith('bcc'));
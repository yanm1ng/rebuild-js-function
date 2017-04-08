String.prototype.repeat = function (num) {
  var str = '';
  if (num < 0) {
    return str;
  } else {
    for (var i = 0; i < num; i++) {
      str += this;
    }
    return str;
  }
}

var a = 'abc';
console.log(a.repeat(3));
// abcabcabc
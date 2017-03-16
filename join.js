Array.prototype.newJoin = function (str) {
  var res = '';
  for (let i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
      res += this[i];
    } else {
      res += this[i] + str;
    }
  }
  return res;
}

Array.prototype.newJoin = function (str) {
  var times = this.length - 1;
  var res = '';

  for (let i = 0; i < times; i++) {
    this.splice(i * 2 + 1, 0, str);
  }
  for (let i = 0; i < this.length; i++) {
    res += this[i];
  }
  return res;
}

var arr = [1, 2, 3];
console.log(arr.newJoin('x'));
Array.prototype.newUnshift = function(item) {
  var res = [];
  for (let i=0; i < this.length; i++) {
    if (i == 0) {
      res[i] = item;
    } else {
      res[i] = this[i-1];
    }
  }
  return res;
}

var a = [1, 2, 3];
var b = a.newUnshift(0);
console.log(b);
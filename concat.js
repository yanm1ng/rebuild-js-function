Array.prototype.newConcat = function () {
  var len = this.length;
  for (key in arguments) {
    var obj = arguments[key];
    if (typeof obj === 'object') {
      for (let i=0; i < obj.length; i++) {
        this.newConcat(obj[i]);
      }
    } else {
      this[len] = obj;
      len++;
    }
  }
  return this;
}

var a = [0, 8];
var b = a.newConcat(1, 2, [3, 4]);
console.log(b);
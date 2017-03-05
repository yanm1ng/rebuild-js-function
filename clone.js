Object.prototype.newClone = function () {
  var o = this.constructor === Array ? [] : {};
  for (var e in this) {
    if (this[e].constructor !== Function) {
      o[e] = (typeof this[e] === "object") ? this[e].clone() : this[e]; 
    }
  }
  return o;
}

var a = [1, '2', 3];
var b = a.newClone();
console.log(b);
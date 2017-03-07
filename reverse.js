Array.prototype.newReverse = function() {
  var a = [];
  for (let i=0; i < this.length; i++) {
    a.unshift(this[i])
  }
  return a;
}

Array.prototype.newReverse = function() {
  var len = this.length;
  for (let i=0; i < len; i++) {
    var item = this[len-1];
    this.splice(i, 0, item);
    this.pop();
  }
  return this;
}

var a = [1, 2, 3, 4];
console.log(a.newReverse());

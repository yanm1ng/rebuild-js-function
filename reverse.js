Array.prototype.newReverse = function() {
  var a = [];
  for (let i=0; i < this.length; i++) {
    a.unshift(this[i])
  }
  return a;
}

var a = [1, 2, 3];
console.log(a.newReverse());

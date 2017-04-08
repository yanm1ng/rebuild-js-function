Array.prototype.newReverse = function () {
  var a = [];
  for (let i = 0; i < this.length; i++) {
    a.unshift(this[i])
  }
  return a;
}

Array.prototype.newReverse = function () {
  var len = this.length;
  for (let i = 0; i < len; i++) {
    var item = this[len - 1];
    this.splice(i, 0, item);
    this.pop();
  }
  return this;
}

Array.prototype.newReverse = function () {
  var a = [];
  for (let i = this.length - 1; i > -1; i--) {
    a.push(this[i]);
  }
  return a;
}

Array.prototype.newReverse = function () {
  var i = 0, j = this.length - 1;
  while (i < j) {
    var t = this[i];
    this[i] = this[j];
    this[j] = t;
    i++;
    j--;
  }
  return this;
}

var a = [1, 2, 3];
console.log(a.newReverse());
// [3, 2, 1]
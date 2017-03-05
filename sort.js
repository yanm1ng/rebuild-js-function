Array.prototype.newSort = function() {
  if (this.length <= 1) {
    return this;//如果数组只有一个数，就直接返回；
  }
  var num = Math.floor(this.length / 2);

  var numValue = this.splice(num, 1);//找到中间数的值
  var left = [];
  var right = [];

  for (var i = 0; i < this.length; i++) {
    this[i] < numValue ? left.push(this[i]) : right.push(this[i]);
  }

  return left.newSort().concat(numValue, right.newSort());
}

var arr = [32, 45, 37, 16, 2, 87];
console.log(arr.newSort());
//[2, 16, 32, 37, 45, 87]
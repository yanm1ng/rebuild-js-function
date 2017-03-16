Array.prototype.newIndexOf = function (value, start) {
  if (this == null) return -1;
  var i = 0, length = this.length;
  if (start) {
    if (typeof start == 'number') {
      i = (start < 0 ? Math.max(0, length + start) : start);

    }
    // 遍历数组
    for (; i < length; i++) {
      if (this[i] === value) {
        return i;
      }
    }
    return -1;
  }
}
// 测试
console.log([2, 4, 1, 8, 5].newIndexOf(1));
// 2
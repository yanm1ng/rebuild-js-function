Array.prototype.newIndexOf = function (element, fromIndex) {
  if (this.length === 0 || this.length < fromIndex) {
    return -1;
  }
  var index = fromIndex || 0;
  var length = this.length;
  if (fromIndex < 0) {
    index = length + fromIndex;
  }

  for (; index < length; index++) {
    if (this[index] === element) {
      return index;
    }
  }
  return -1;
}

Array.prototype.newLastIndexOf = function (element, fromIndex) {
  if (this.length === 0 || (fromIndex < 0 && this.length < Math.abs(fromIndex))) {
    return -1;
  }

  var length = this.length;
  var index = fromIndex || length - 1;
  if (fromIndex < 0) {
    index = length + fromIndex;
  }

  for (; index > -1; index--) {
    if (this[index] === element) {
      return index;
    }
  }
  return -1;
}
// 测试
console.log([2, 4, 1, 8, 5].newIndexOf(1));
// 2
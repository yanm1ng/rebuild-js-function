var indexOf = function (array, value, start) {
  if (array == null) return -1;
  var i = 0, length = array.length;
  if (start) {
    if (typeof start == 'number') {
      i = (start < 0 ? Math.max(0, length + start) : start);
    }
  }
  // 遍历数组
  for (; i < length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
// 测试
console.log(indexOf([2, 4, 1, 8, 5], 1, 0));
//输出2
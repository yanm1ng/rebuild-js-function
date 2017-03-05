function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;//如果数组只有一个数，就直接返回；
  }
  var num = Math.floor(arr.length / 2);

  var numValue = arr.splice(num, 1);//找到中间数的值
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    arr[i] < numValue ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat(numValue, quickSort(right));
}

console.log(quickSort([32, 45, 37, 16, 2, 87]));
//[2, 16, 32, 37, 45, 87]
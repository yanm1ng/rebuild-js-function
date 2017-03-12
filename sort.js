var arr = [32, 45, 37, 16, 2, 87];

function QuickSort(array) {
  var len = array.length;
  if (len <= 1) {
    // 如果数组只有一个数，就直接返回
    return array;
  } else {
    // 基准
    var base = [array[0]];
    var smaller = [];
    var bigger = [];

    for (var i = 1; i < len; i++) {
      array[i] < base ? smaller.push(array[i]) : bigger.push(array[i]);
    }

    return QuickSort(smaller).concat(base.concat(QuickSort(bigger)));
  }
}
console.log(QuickSort(arr));
// [ 2, 16, 32, 37, 45, 87 ]

function BubbleSort(array) {
  var len = array.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = len - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        var tmp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
}
console.log(BubbleSort(arr));
// [ 2, 16, 32, 37, 45, 87 ]

function InsertSort(array) {
  var len = array.length;
  // 拷贝数组
  var result = array.slice(0);
  for (i = 1; i < len; i++) {
    var tmp = result[i];
    var j = i - 1;
    while (j >= 0 && tmp < result[j]) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = tmp;
  }
  return result;
}
console.log(InsertSort(arr));
// [ 2, 16, 32, 37, 45, 87 ]
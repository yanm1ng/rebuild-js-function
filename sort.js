var arr = [32, 45, 37, 16, 2, 87];

function quickSort(array) {
  var len = array.length;
  if (len <= 1) {
    // 如果数组只有一个数，就直接返回
    return array;
  } else {
    // 基准
    var base = array[0];
    var smaller = [];
    var bigger = [];

    for (var i = 1; i < len; i++) {
      array[i] < base ? smaller.push(array[i]) : bigger.push(array[i]);
    }
    return quickSort(smaller).concat([base], quickSort(bigger));
  }
}
console.log(quickSort(arr));
// [ 2, 16, 32, 37, 45, 87 ]

function bubbleSort(array) {
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
console.log(bubbleSort(arr));
// [ 2, 16, 32, 37, 45, 87 ]

function bubbleSort2(array) {
  var i = array.length - 1;
  while (i > 0) {
    var pos = 0;
    for (var j = 0; j < i; j++)
      if (array[j] > array[j + 1]) {
        pos = j;
        var tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    i = pos;
  }
  return arr;
}
console.log(bubbleSort2(arr));
// [ 2, 16, 32, 37, 45, 87 ]

function bubbleSort3(array) {
  var low = 0;
  var high = array.length - 1;
  var tmp, j;
  while (low < high) {
    for (j = low; j < high; ++j) {
      if (array[j] > array[j + 1]) {
        tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
    --high;
    for (j = high; j > low; --j) {
      if (array[j] < array[j - 1]) {
        tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
      }
    }
    ++low;
  }
  return array;
}
console.log(bubbleSort3(arr));
// [ 2, 16, 32, 37, 45, 87 ]

function insertionSort(array) {
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
console.log(insertionSort(arr));
// [ 2, 16, 32, 37, 45, 87 ]

function binaryInsertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    for (var i = 1; i < array.length; i++) {
      var key = array[i], left = 0, right = i - 1;
      while (left <= right) {
        var middle = parseInt((left + right) / 2);
        if (key < array[middle]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
      for (var j = i - 1; j >= left; j--) {
        array[j + 1] = array[j];
      }
      array[left] = key;
    }
    return array;
  } else {
    return 'array is not an Array!';
  }
}
console.log(binaryInsertionSort(arr));
// [ 2, 16, 32, 37, 45, 87 ]

function shellSort(array) {
  var h = 1;
  var len = array.length;
  while (h < Math.floor(len / 3)) {
    h = h * 3 + 1;
  }
  while (h >= 1) {
    for (var i = h; i < len; i++) {
      for (var j = i; j >= h; j -= h) {
        if (array[j] < array[j - h]) {
          array[j] = [array[j - h], array[j - h] = array[j]][0];
        }
      }
    }
    h = Math.floor(h / 3);
  }
  return array;
}
console.log(shellSort(arr));
// [ 2, 16, 32, 37, 45, 87 ]

function selectionSort(array) {
  var len = array.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}
console.log(selectionSort(arr));
// [ 2, 16, 32, 37, 45, 87 ]


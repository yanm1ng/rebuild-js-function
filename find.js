Array.prototype.newFind = function (fn, thisArg) {
  var arr = this;
  for (var i = 0, length = arr.length; i < length; i++) {
    if (fn.call(thisArg, arr[i], i, arr)) {
      return arr[i];
    }
  }
}

Array.prototype.newFindIndex = function (fn, thisArg) {
  var arr = this;
  for (var i = 0, length = arr.length; i < length; i++) {
    if (fn.call(thisArg, arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

var arr = [{ v: 1 }, { v: 3 }, { v: 4 }, { v: 5 }, { v: 6 }];
console.log(arr.newFind(function (val, idx) {
  return val.v > 3;
}))

// {v: 4}


var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.newFindIndex(function (val, idx) {
  return val > 3;
}))
// 3
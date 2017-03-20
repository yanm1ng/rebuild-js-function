Array.prototype.maxDiffer = function () {
  var len = this.length;
  if (len <= 1) {
    return -1;
  }

  var min = this[0];
  var maxDiffer = 0;

  for (var i = 1; i < len; i++) {
    let value = this[i];
    if (value > min && (value - min > maxDiffer)) {
      maxDiffer = value - min;
    } else if (value <= min) {
      min = value;
    }
  }

  if (maxDiffer <= 0) {
    return -1;
  }

  return maxDiffer;
}

var arr = [1, -3, 9, 11, 0, 12];
// 15
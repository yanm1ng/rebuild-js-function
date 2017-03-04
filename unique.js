Array.prototype.unique = function () {
  var result = [];
  this.forEach(function (v) {
    if (result.indexOf(v) < 0) {
      result.push(v);
    }
  });
  return result;
}

Array.prototype.unique = function () {
  var result = [], hash = {};
  this.forEach(function (v) {
    if (!hash[v]) {
      hash[v] = true;
      result.push(v);
    }
  });
  return result;
}

Array.prototype.unique = function () {
  var result = [this[0]];
  this.sort();
  this.forEach(function (v) {
    v != result[result.length - 1] && result.push(v);
  });
}

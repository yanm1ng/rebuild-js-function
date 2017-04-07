Array.prototype.newUnique = function () {
  var result = [];
  this.forEach(function (v) {
    if (result.indexOf(v) < 0) {
      result.push(v);
    }
  });
  return result;
}

Array.prototype.newUnique = function () {
  var result = [], hash = {};
  this.forEach(function (v) {
    if (!hash[v]) {
      hash[v] = true;
      result.push(v);
    }
  });
  return result;
}

Array.prototype.newUnique = function () {
  var result = [];
  this.filter(function (el, index, self) {
    return self.indexOf(el) === index;
  })
}

Array.prototype.newUnique = function () {
  var result = [this[0]];
  this.sort();
  this.forEach(function (v) {
    v != result[result.length - 1] && result.push(v);
  });
}

Array.prototype.newUnique = function () {
  this.sort();
  var res = [this[0]];
  for (var i = 1; i < this.length; i++) {
    if (this[i] !== res[res.length - 1]) {
      res.push(this[i]);
    }
  }
  return res;
}

Array.prototype.newUnique = function() {
  return Array.from(new Set(this));
}

Array.prototype.newUnique = function() {
  return [...new Set(this)];
}

var a = ['a', 'b', 'c', 'd', 'b', 'c'];
console.log(a.newUnique());
// [ 'a', 'b', 'c', 'd' ]
Array.prototype.newMap = function (f) {
  return this.reduce(function (result, x) {
    result.push(f(x));
    return result;
  }, []);
}

var arr = [1, 2, 3];
var brr = arr.newMap(function(value) {
  return value + 1;
})

console.log(brr);
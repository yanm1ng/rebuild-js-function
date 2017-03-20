Array.prototype.intersection = function (array) {
  var hashmap = {};
  var result = [];

  this.forEach(function(e) {
    hashmap[e] = 1;
  });

  array.forEach(function(e) {
    if (hashmap[e] === 1) {
      result.push(e);
      hashmap[e]++;
    }
  });

  return result;
}

var firstArray = [2, 2, 4, 3];
var secondArray = [1, 2, 4, 2];

console.log(firstArray.intersection(secondArray)); 
// [2, 4]
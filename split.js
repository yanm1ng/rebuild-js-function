String.prototype.newSplit = function (temp) {
  var index = this.indexOf(temp);
  var arr = [];
  var str = this;
  while (index != -1) {
    let val = str.slice(0, index);
    if (val) {
      arr.push(val);
    }
    str = str.slice(index + 1);
    index = str.indexOf(temp);
  }
  if (str) {
    arr.push(str);
  }
  return arr;
}

var str = 'a@b@c@aaa@@';
console.log(str.newSplit('@'));
String.prototype.newTrim = function () {
  return this.replace(/(^\s*)|(\s*)$/g, '');
}

var str = 'aa';
console.log(str.newTrim());
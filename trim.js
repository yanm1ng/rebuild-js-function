String.prototype.newTrim = function() {
  return this.replace(/(^\s*)|(\s*)$/g, ''); //去除前后空白符
}

var str = 'aa';
console.log(str.newTrim());
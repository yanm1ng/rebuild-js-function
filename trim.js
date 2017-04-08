String.prototype.newTrim = function () {
  return this.replace(/(^\s*)|(\s*)$/g, '');
}

String.prototype.trim = function () {
  return this.replace(/^\s+/, "").replace(/\s+$/, "");
}

var str = 'aa';
console.log(str.newTrim());
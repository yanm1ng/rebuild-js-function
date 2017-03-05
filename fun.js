// 记录一些好玩的js小测试 
function string2int(s) {
  var a = [];
  for (let i = 0; i < s.length; i++) {
    a.push(Number(s[i]));
  }
  return a.reduce(function (x, y) {
    return x * 10 + y;
  });
}
var s = string2int('123');
console.log(s);

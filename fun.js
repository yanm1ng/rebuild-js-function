// 记录一些好玩的js小测试 
function Obj() {
  a = 0; //私有变量
  var fn = function () { //私有函数

  }
}
var obj = new Obj();
console.log(a);
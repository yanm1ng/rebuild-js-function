// 记录一些好玩的js小测试

function outFunc(){
 var name = "Vicfeel";
 function inFunc(){
  console.log(name);
 }
 return inFunc;
}
outFunc()(); 
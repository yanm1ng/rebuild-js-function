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
// console.log(s);

function sum(a, b) {
  return a + b;
}
var anotherSum = sum;
console.log(sum(1, 2));
// 3
console.log(anotherSum(1, 2));
// 3
sum = null;
console.log(anotherSum(1, 2));
// 3
// 如何理解？
// 将function sum(a, b) { return a + b; } 理解成 var sum = function (a, b) { return a + b; }, 函数是对象，函数名 sum 和 anotherSum 只是指针

console.log(null == undefined);
// true
console.log(null === undefined);
// false
console.log(NaN == NaN);
// false
console.log(NaN === NaN);
// false
console.log(NaN != NaN);
// true
console.log(true == 1);
// true
console.log(true === 1);
// false
console.log(true == 2);
// false
console.log('5' == 5);
// true
console.log('5' === 5);
// false
console.log(null == 0);
// false
console.log(undefined == 0);
// false

var a = (1, 3, 4, 5);
console.log(a);
// 5

var falseObj = new Boolean(false);
var falseVal = false;
var result = falseObj && true;
console.log(result);
// true

console.log(typeof falseObj);
// object
console.log(typeof falseVal);
// boolean
console.log(falseObj instanceof Boolean);
// true
console.log(falseVal instanceof Boolean);
// false

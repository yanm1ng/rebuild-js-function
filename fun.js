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

var a = [1, 2, 3, 4, 5];
a.push(a.shift());
a.push(a.shift());
console.log(a);

function changeStr(str) {
  var arr = str.split('-');
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
}

function changeStr(str) {
  var re = /-(\w)/g;
  str = str.replace(re, function ($0, $1) {
    return $1.toUpperCase();
  });
  return str;
}

console.log(changeStr('border-bottom-color'));

function getBytes(str) {
  var len = str.length,
    bytes = len;
  for (var i = 0; i < len; i++) {
    if (str.CharCodeAt > 255) {
      bytes++;
    }
  }
  return bytes;
}

console.log(getBytes('你好aaa'));
// 5

function randomString(n) {
  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let tmp = '';
  const l = str.length;
  for (let i = 0; i < n; i++) {
    tmp += str.charAt(Math.floor(Math.random() * l));
  }
  return tmp;
}

console.log(randomString(8));
// YcSb2YO4

function bouncer(arr) {
  function isBigEnough(element) {
    if (element !== false || element !== null || element !== 0 || element !== "" || element !== undefined || element !== NaN) {
      return element;
    }
  }
  var filtered = arr.filter(isBigEnough);
  return filtered;
}
console.log(bouncer([7, "ate", "", false, 9]));
// [ 7, 'ate', 9 ]
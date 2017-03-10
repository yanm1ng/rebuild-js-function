const isPhone = function (number) {
  var exp = /^1[3-9]\d{9}$/;
  return exp.test(number);
};

const isID = function (id) {
  var exp = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
  return exp.test(id);
}

const isURL = function (str) {
  var exp = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;
  return exp.test(str);
}

const isEmail = function (str) {
  var exp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return exp.test(str);
}

const isQQ = function (str) {
  var exp = /[1-9][0-9]{4,}/;
  return exp.test(str);
}

console.log(isQQ('01212'));

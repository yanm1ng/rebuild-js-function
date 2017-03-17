const isPhone = function (number) {
  var exp = /^1[3-9]\d{9}$/;
  return exp.test(number);
};

const isID = function (id) {
  var exp = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
  return exp.test(id);
}

const isIP = function (ip) {
  var exp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return exp.test(ip);
}

const isURL = function (url) {
  var exp = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;
  return exp.test(url);
}

const isEmail = function (email) {
  var exp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return exp.test(email);
}

const isQQ = function (qq) {
  var exp = /[1-9][0-9]{4,}/;
  return exp.test(qq);
}

const isPassword = function (password) {
  var exp = /^(\w){6,20}$/;
  return exp.test(password);
}

console.log(isPassword('012a12'));

const timer = function () {
  for (var i = 0; i < 5; i++) {
    (function (n) {
      setTimeout(function () {
        console.log(n);
      }, n * 1000)
    })(i);
  }
}

timer();

// 0
// 1
// 2
// 3
// 4

function createArr() {
  var result = [];
  for (var i = 0; i < 5; i++) {
    result[i] = function () {
      return i;
    };
  }
  return result;
}

var arr = createArr();
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]());
}

// 5
// 5
// 5
// 5
// 5

function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n);
    }
  };
}

var a = fun(0); a.fun(1); a.fun(2); a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1); c.fun(2); c.fun(3);

// undefined
// 0
// 0
// 0
// undefined
// 0
// 1
// 2
// undefined
// 0
// 1
// 1
// 0

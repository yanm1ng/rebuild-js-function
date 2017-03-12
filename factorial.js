function factorial (num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function factorial (num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}

// 推荐第二种写法，第一种写法将函数与 factorial 函数名耦合在一起
console.log(factorial(3));
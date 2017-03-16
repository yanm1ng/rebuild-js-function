function sum(arr) {
  return arr.reduce(function (x, y) {
    return x + y;
  })
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sum(arr) {
  let sum = 0;
  var i = arr.length;
  while (i--) {
    sum += arr[i];
  }
  return sum;
}

function sum(arr) {
  return eval(arr.join('+'));
}

var arr = [1, 3, 5];
console.log(sum(arr));
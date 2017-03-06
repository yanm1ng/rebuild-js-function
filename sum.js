function sum(arr) {
  return arr.reduce(function(x, y) {
    return x + y;
  })
}

function sum(arr) {
  let sum = 0;
  for (let i=0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
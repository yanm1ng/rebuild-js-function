function maxDuplicateChar(str) {
  if (str.length == 1) {
    return str;
  }
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    (hash[char]) ? hash[char]++ : hash[char] = 1;
  }
  
  var maxChar = '';
  var maxValue = 1;
  for (var k in hash) {
    if (hash[k] >= maxValue) {
      maxChar = k;
      maxValue = hash[k];
    }
  }
  return maxChar;
}

var str = 'aabbccadasbcks';
console.log(maxDuplicateChar(str));
// a
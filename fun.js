// 记录一些好玩的js小测试

(function log() {
  var args = Array.prototype.slice.call(arguments);
  //为了使用unshift数组方法，将argument转化为真正的数组
  args.unshift('app');

  console.log.apply(console, args);
}())
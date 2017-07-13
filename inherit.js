// 1.原型链
// 基本思想：利用原型让一个引用类型继承另外一个引用类型的属性和方法
function Parent(name) {
  this.name = name;
  this.say = function () {
    console.log("I'm " + this.name);
  }
}
function Child(name) {
  this.name = name;
}
// 继承Super
Child.prototype = new Parent('father');
var chlid = new Child('son');
chlid.say();
// I'm son



// 2.借用构造函数
function Parent(name) {
  this.name = name;
  this.say = function () {
    console.log("I'm " + this.name);
  }
}
function Child(name) {
  Parent.call(this, name);
}
var chlid = new Child('son');
chlid.say();
// I'm son


// 3.apply方法改变函数上下文实现继承
function Parent(name) {
  this.name = name;
  this.say = function () {
    console.log("I'm " + this.name);
  }
}
function Child(name) {
  Parent.apply(this, [name]);
}
var chlid = new Child('son');
chlid.say();
// I'm son


// 4.组合继承
function Parent(name) {
  this.name = name;
}
Parent.prototype.say = function () {
  console.log("I'm " + this.name);
}
function Child(name, age) {
  Parent.call(this, name);//继承属性
  this.age = age;
}
//继承方法
Child.prototype = new Parent();
Child.prototype.constructor = Parent;
Child.prototype.howold = function () {
  console.log(this.age + 'years old');
}

var chlid = new Child('son', 22);
chlid.say();
// I'm son
child.howold();
// 22 years old


// 5.原型式继承
function Parent(name) {
  this.name = name;
  this.say = function () {
    console.log("I'm " + this.name);
  }
}
function Child(o) {
  function F() { }
  F.prototype = o;
  return new F();
}
var parent = new Parent('father');
var child = Child(parent);
child.say();
// I'm father
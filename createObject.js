// javascript创建对象简单的说, 无非就是使用内置对象或各种自定义对象, 当然还可以用JSON

// 1、对象字面量的方式，简单清晰，不能有效识别对象类型
var person = {
  name: 'yanm1ng',
  age: 22
};

// 2、使用工厂模式创建对象, 返回带有属性和方法的person对象, 不能有效识别对象类型
function createPerson(name, age) {
  var person = new Object();
  person.name = name;
  person.age = age;
  person.like = function () {
    console.log(person.name + " like eating");
  }
  return person;
}
createPerson('yanm1ng', 22).like();


// 3、用function来模拟参构造函数来实现（用this关键字定义构造的上下文属性），方法不被实例共享
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  this.like = function () {
    console.log(this.name + ' like ' + this.hobby);
  }
}
var person = new Person('yanm1ng', 22, 'coding');
person.like();
console.log(person instanceof Person);
// true


// 4、用Object构造函数来创建一个对象
var obj = new Object();
obj.name = "yanm1ng";
obj.age = 22;
obj.like = function () {
  console.log(obj.name + " like eating");
}
obj.like();


// 5、用原型方式来创建，属性也被实例共享
function Person() {}
Person.prototype.name = "yanm1ng";
Person.prototype.age = 22;
Person.prototype.like = function () {
  console.log(this.name + " like eating");
}
// 简写
Person.prototype = {
  constructor: Person,
  name: 'yanm1ng',
  age: 22,
  like: function() {
    console.log(name + " like eating");
  }
}
var person = new Person();
person.like();


// 5、组合使用构造模式和原型模式
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  constructor: Person,
  like: function () {
    console.log(this.name + " like eating");
  }
}
var person = new Person('yanm1ng', 22);
person.like();
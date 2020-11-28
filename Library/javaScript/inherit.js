/**
 * @title 写一个简单的继承
 * @param name
 * @constructor
 */
const Parent = function (name) {
    this.name = name;
};

Parent.prototype.showName = function () {
    console.log("I'm name is:", this.name);
};

const Son = function (name, age) {
    Parent.apply(this, arguments);

    this.age = age;
};

Son.prototype = Object.create(Parent.prototype);
Son.prototype.constructor = Son;

Son.prototype.showAge = function () {
    console.log("I'm age is:", this.age);
};

const son = new Son('daoer', 18);
son.showName();
son.showAge();
console.log((son instanceof Son));
console.log((son instanceof Parent));



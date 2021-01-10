function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'daoer';
console.log(sayHello(user));
var a = Boolean('aaa');
var b = Boolean(1);
var c = true;
console.log(c.valueOf());
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\n             I'll be " + (myAge + 1) + " years old next month.";
var num = undefined;
var num2 = null;
// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;
var myFavoriteNumber;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
var tom = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

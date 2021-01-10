function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'daoer';
console.log(sayHello(user));


const a: Boolean = Boolean('aaa');
const b: boolean = Boolean(1);
const c: boolean = true;
console.log(c.valueOf());


let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
            \ I'll be ${myAge + 1} years old next month.`;

let num: number = undefined;
let num2: number = null;

// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length); // 编译时报错

// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: string | number;
// }
//
// let tom: Person = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male'
// };

interface Person {
  readonly id?: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: 'Tom',
  gender: 'male'
};

// tom.id = 89757;

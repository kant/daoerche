// function sayHello(person: string) {
//   return 'Hello, ' + person;
// }
//
// let user = 'daoer';
// console.log(sayHello(user));
//
//
// const a: Boolean = Boolean('aaa');
// const b: boolean = Boolean(1);
// const c: boolean = true;
// console.log(c.valueOf());
//
//
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// // ES6 中的二进制表示法
// let binaryLiteral: number = 0b1010;
// // ES6 中的八进制表示法
// let octalLiteral: number = 0o744;
// let notANumber: number = NaN;
// let infinityNumber: number = Infinity;
//
//
// let myName: string = 'Tom';
// let myAge: number = 25;
//
// // 模板字符串
// let sentence: string = `Hello, my name is ${myName}.
//             \ I'll be ${myAge + 1} years old next month.`;
//
// let num: number = undefined;
// let num2: number = null;
//
// // let myFavoriteNumber: string | number;
// // myFavoriteNumber = 'seven';
// // myFavoriteNumber = 7;
//
// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// console.log(myFavoriteNumber.length); // 5
// myFavoriteNumber = 7;
// // console.log(myFavoriteNumber.length); // 编译时报错
//
// // interface Person {
// //   name: string;
// //   age?: number;
// //   [propName: string]: string | number;
// // }
// //
// // let tom: Person = {
// //   name: 'Tom',
// //   age: 25,
// //   gender: 'male'
// // };
//
// interface Person {
//   readonly id?: number;
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }
//
// let tom: Person = {
//   name: 'Tom',
//   gender: 'male'
// };
//
// // tom.id = 89757;
//
// let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
//   return x + y;
// };
//
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
//
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   return source.search(subString) !== -1;
// }
//
// function buildName(firstName: string = 'Tom', lastName: string) {
//   return firstName + ' ' + lastName;
// }
// let tomcat = buildName('Tom', 'Cat');
// let cat = buildName(undefined, 'Cat');

// function push(array: any[], ...items: any[]) {
//   items.forEach(function(item) {
//     array.push(item);
//   });
// }
//
// let a = [];
// push(a, 1, 2, 3);

// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//     return x.split('').reverse().join('');
//   }
// }
//
// const n = reverse('123')
// console.log(n.length)

interface Cat {
  name: string;
  run(): void;
  swim: () => void;
}
interface Fish {
  name: string;
  swim(name: string): void;
}

function getName(animal: Cat | Fish) {
  (animal as Cat).run()
  const a = animal.swim('haha')
  return animal.name;
}

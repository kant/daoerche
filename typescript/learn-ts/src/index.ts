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

// interface Cat {
//   name: string;
//   run(): void;
//   swim: () => void;
// }
// interface Fish {
//   name: string;
//   swim(name: string): void;
// }
//
// function getName(animal: Cat | Fish) {
//   (animal as Cat).run()
//   const a = animal.swim('haha')
//   return animal.name;
// }

// interface Cat {
//   run(): void;
// }
// interface Fish {
//   swim(): void;
// }
//
// function testCat(cat: Cat) {
//   return (cat as any as Fish);
// }

// function getCacheData<T>(key: string): T {
//   return (window as any).cache[key];
// }
//
// interface Cat {
//   name: string;
//   run(): void;
// }
//
// const tom = getCacheData<Cat>('tom');
// tom.run();

// declare const jQuery: (selector: string) => any;
// declare function jQuery(selector: string): any;
// declare function jQuery(domReadyCallback: () => any): any;
//
// jQuery('#foo');
// jQuery(() => {});
//
// declare class Animal {
//   name: string;
//   constructor(name: string);
//   sayHi(): string;
// }
//
// const animal = new Animal('daoer');
//
// declare enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }
//
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// declare namespace jQuery {
//   function ajax(url: string, settings?: any): void;
//   const version: number;
//   class Event {
//     blur(eventType: EventType): void
//   }
//   enum EventType {
//     CustomClick
//   }
// }
//
// jQuery.ajax('/api/get_something');
// console.log(jQuery.version);
// const e = new jQuery.Event();
// e.blur(jQuery.EventType.CustomClick);

// declare namespace jQuery {
//   function ajax(url: string, settings?: any): void;
//   namespace fn {
//     function extend(object: any): void;
//   }
// }
//
// jQuery.fn.extend({});

// declare namespace jQuery {
//   interface AjaxSettings {
//     method?: 'GET' | 'POST'
//     data?: any;
//   }
//   function ajax(url: string, settings?: AjaxSettings): void;
// }
//
// let settings: jQuery.AjaxSettings = {
//   method: 'POST',
//   data: {
//     name: 'foo'
//   }
// };
// jQuery.ajax('/api/post_something', settings);

// declare function jQuery(selector: string): any;
// declare namespace jQuery {
//   function ajax(url: string, settings?: any): void;
// }
//
// jQuery('haha');
// jQuery.ajax('sss');

// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//   if (typeof n === 'string') {
//     return n;
//   } else {
//     return n();
//   }
// }

// type EventNames = 'click' | 'scroll' | 'mousemove';
// function handleEvent(ele: Element, event: EventNames) {
//   // do something
// }
//
// handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dblclick');

// let tom: [string, number?];
// tom[0] = 'Tom';
// tom[1] = 25;
//
// tom[0].slice(1);
// tom[1].toFixed(2);
//
// tom = ['aaa'];

let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
tom.push(true);

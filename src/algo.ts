// //Reverse Array
// const reverse = (arr: number[]) => {
//     const revArr: number[] = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         let num: number = arr[i];
//         revArr.push(num);
//     }
//     return revArr;
// }
// console.log(reverse([1, 2, 3, 4, 5]))

// //Remove first int
// const removeFirstInt = (arr: number[]) => {
//     // console.log(arr.slice(1));
//     // console.log(arr);
//     return arr.slice(1);
// }
// removeFirstInt([1, 2, 3, 4, 5]);

// //Return String at Character
// const returnStringAtCharTs = (str: string, num: number) => {
//     const strArr: number | string[] = str.split('\n');
//     return strArr[num - 1];
// }

// const returnStringAtCharJs = (str, num) => {
//     if (typeof str !== 'string' || typeof num !== 'number') {
//         return 'First arg must be a string and sec arg must be a positive number';
//     }
//     const strArr = str.split('\n');
//     return strArr[num - 1];
// }

// console.log(returnStringAtCharTs("apples\nmilk\nbread\nfish\n", 1))

// const greet = (person: string, date: Date) => {
//     console.log(`Hello ${person}, today is ${date}`);
// }

// greet('Bryan', new Date())

// const firstLast = (first: string, last: string) => {
//     console.log(`My name is ${first} ${last}`);
// }
// firstLast('Joyce', 'Guilas')

// function whatsMyAge(): number {
//     return 37;
// }
// console.log(whatsMyAge());

// const personInfo = function (obj: { first: string, last: string, age?: number }) {
//     return obj;
// }

// console.log(personInfo({ first: 'Bryan', last: 'Guilas', age: 37 }));

// //Union types
// function userId(id: string | number) {
//     return (
//         `Your id is ${id}`
//     )
// }

// console.log(userId(324234))
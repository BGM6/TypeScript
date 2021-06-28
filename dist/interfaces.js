"use strict";
//Interface Type
// interface BoxScore {
//   player: string;
//   points: number;
//   rebound: number;
//   assist: number;
//   fieldGoalPercentage: string;
// }
//
// let curry: BoxScore = {player: 'Stephen Curry', points: 45, rebound: 6, assist: 8, fieldGoalPercentage: '55%'}
// let green: BoxScore = {player: 'Draymond Green', points: 8, rebound: 14, assist: 11, fieldGoalPercentage: '67%'}
// console.log(curry, green)
var curry;
curry = {
    name: 'Stephen Curry',
    getPercentage: function (attempt, made) {
        return made / attempt;
    }
};
console.log(curry.getPercentage(20, 15));
// function getPercentage(attempt: number, shotMissed: number) {
//   return shotMissed / attempt;
// }
////////////////////////////////////////////////////////////////////////////////////
// interface Named {
//   readonly name: string;
// }
//
// interface Greetable extends Named {
//   greet(phrase: string): void;
// }
//
// class Person implements Greetable {
//   name: string;
//   age = 30;
//
//   constructor(n: string) {
//     this.name = n;
//   }
//
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// }
//
// let user1: Greetable;
//
// user1 = new Person('Bryan');
// // user1.name = 'Manu';
//
// user1.greet('Hi there - I am');
// console.log(user1);

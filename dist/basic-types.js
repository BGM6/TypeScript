"use strict";
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
//
// console.log(add(1, 1));
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Bryan',
//   age: 36,
// };
var Role;
(function (Role) {
    Role[Role["FRONTEND"] = 0] = "FRONTEND";
    Role[Role["BACKEND"] = 1] = "BACKEND";
    Role[Role["FULLSTACK"] = 2] = "FULLSTACK";
})(Role || (Role = {}));
;
var person = {
    name: 'Bryan',
    age: 30,
    hobbies: ['Cycling', 'Coding'],
    roll: Role.FRONTEND
};
console.log(person.roll);
var favoriteFood;
favoriteFood = ['Japanese', 'Korean'];
console.log(favoriteFood);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}

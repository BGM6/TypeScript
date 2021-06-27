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

enum Role {'FRONTEND','BACKEND', 'FULLSTACK'};

const person = {
  name: 'Bryan',
  age: 30,
  hobbies: ['Cycling', 'Coding'],
  roll: Role.FRONTEND
}
console.log(person.roll);

let favoriteFood: string[];
favoriteFood = ['Japanese', 'Korean']
console.log(favoriteFood);

for (const hobby of person.hobbies) {
  console.log(hobby)
}




function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`)
}

greet('Hayden', new Date())

const printId = (id: number | string) => {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId('Acct101')

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log('Hello, ' + x.join(' and '))
  } else {
    console.log('Welcome lone traveler ' + x)
  }
}

welcomePeople('Hayden')

const getFirstThree = (x: number[] | string) => {
  return x.slice(0, 3);
}

console.log(getFirstThree([]))


type Point = {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log('Coordinates x value is ' + pt.x)
  console.log('Coordinates x value is ' + pt.y)
}

printCoord({x: 100, y: 100})

type Person = {
  name: string,
  age: number
}

function personInfo(per: Person) {
  console.log(`You are ${per.name} and you are ${per.age} years old.`);
}
personInfo({name: 'Hayden', age: 4})




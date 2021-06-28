type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

// type Combinable = string | number;
// type Numeric = number | boolean;
//
// type Universal = Combinable & Numeric;
//
// function addition(a: Combinable, b: Combinable) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation({name: 'Manu', startDate: new Date()});

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//////////////////////DISCRIMINATED UNIONS//////////////////////////////////////////////////////
interface Bird {
  type: 'bird'
  flyingSpeed: number | string;
}

interface Horse {
  type: 'horse'
  runningSpeed: number | string;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving at speed: ${speed}`)
}

moveAnimal({type: "bird", flyingSpeed: '120mph'})
moveAnimal({type: "horse", runningSpeed: '30mph'})

interface Cycling {
  type: 'cycling';
  cyclingSpeed: string | number;
}

interface Running {
  type: 'running';
  runningSpeed: string | number;
}

type Athlete = Cycling | Running

function athleteSpeed(athlete: Athlete) {
  let speed;
  switch (athlete.type) {
    case "cycling":
      speed = athlete.cyclingSpeed;
      break;
    case 'running':
      speed = athlete.runningSpeed;
      break;
  }
  console.log(`Athlete is moving at: ${speed}`)
}

athleteSpeed({type: 'cycling', cyclingSpeed: '40mph'})
athleteSpeed({type: 'running', runningSpeed: '15mph'})

////////////////////// TYPE CASTING//////////////////////////////////////////////////////
const heading = document.querySelector('#heading') as HTMLInputElement;
const userInput = document.createElement('input')! as HTMLInputElement;
const body = document.querySelector('body') as HTMLBodyElement;
heading.innerText = 'TypeScript is awesome!'
body.append(userInput)

////////////////////// INDEX TYPE//////////////////////////////////////////////////////
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
}
////////////////////// FUNCTION OVERLOAD//////////////////////////////////////////////////
type Combinable = string | number;
type Numeric = number | boolean
type Universal = Combinable & Numeric;

function addition(a: number, b: number): number;
function addition(a: string, b: string): string;
function addition(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

let arr: number[] = [];
// let myString: string = '';
// let p: string = 'Bryan';
const num = addition(4, 3)
arr.push(num);
console.log(arr)

const str = addition('Bryan', ' Guilas')
str.split(' ');
console.log(str)
////////////////////// OPTIONAL CHAINING//////////////////////////////////////////////////
const fetchedUserData = {
  id: 'u1',
  name: 'Bryan',
  jog: {title: 'Junior Developer', description: 'Software Developer'}
};
// console.log(fetchedUserData?.job?.title);
//////////////////////NULLISH COALESCING//////////////////////////////////////////////////
const uInput = undefined;
const storedData = uInput ?? 'DEFAULT'
console.log(storedData)
















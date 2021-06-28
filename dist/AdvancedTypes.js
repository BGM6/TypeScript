"use strict";
var e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo ...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: '120mph' });
moveAnimal({ type: "horse", runningSpeed: '30mph' });
function athleteSpeed(athlete) {
    var speed;
    switch (athlete.type) {
        case "cycling":
            speed = athlete.cyclingSpeed;
            break;
        case 'running':
            speed = athlete.runningSpeed;
            break;
    }
    console.log("Athlete is moving at: " + speed);
}
athleteSpeed({ type: 'cycling', cyclingSpeed: '40mph' });
athleteSpeed({ type: 'running', runningSpeed: '15mph' });
////////////////////// TYPE CASTING//////////////////////////////////////////////////////
var heading = document.querySelector('#heading');
var userInput = document.createElement('input');
var body = document.querySelector('body');
heading.innerText = 'TypeScript is awesome!';
body.append(userInput);
var errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
function addition(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var arr = [];
// let myString: string = '';
// let p: string = 'Bryan';
var num = addition(4, 3);
arr.push(num);
console.log(arr);
var str = addition('Bryan', ' Guilas');
str.split(' ');
console.log(str);
////////////////////// OPTIONAL CHAINING//////////////////////////////////////////////////
var fetchedUserData = {
    id: 'u1',
    name: 'Bryan',
    jog: { title: 'Junior Developer', description: 'Software Developer' }
};
// console.log(fetchedUserData?.job?.title);
//////////////////////NULLISH COALESCING//////////////////////////////////////////////////
var uInput = undefined;
var storedData = uInput !== null && uInput !== void 0 ? uInput : 'DEFAULT';
console.log(storedData);

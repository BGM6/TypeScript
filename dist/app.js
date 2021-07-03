"use strict";
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString());
}
greet('Hayden', new Date());
var printId = function (id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
};
printId('Acct101');
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(' and '));
    }
    else {
        console.log('Welcome lone traveler ' + x);
    }
}
welcomePeople('Hayden');
var getFirstThree = function (x) {
    return x.slice(0, 3);
};
console.log(getFirstThree([]));
function printCoord(pt) {
    console.log('Coordinates x value is ' + pt.x);
    console.log('Coordinates x value is ' + pt.y);
}
printCoord({ x: 100, y: 100 });
function personInfo(per) {
    console.log("You are " + per.name + " and you are " + per.age + " years old.");
}
personInfo({ name: 'Hayden', age: 4 });

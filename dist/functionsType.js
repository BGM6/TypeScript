"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 10));
let combineValues;
//not a function
// combineValues = 3;
combineValues = add;
const res = combineValues(8, 8);
console.log(res);
//Function Types & Callbacks
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});

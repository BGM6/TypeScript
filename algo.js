//Reverse Array
var reverse = function (arr) {
    var revArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        var num = arr[i];
        revArr.push(num);
    }
    return revArr;
};
console.log(reverse([1, 2, 3, 4, 5]));
//Remove first int
var removeFirstInt = function (arr) {
    // console.log(arr.slice(1));
    // console.log(arr);
    return arr.slice(1);
};
removeFirstInt([1, 2, 3, 4, 5]);
//Return String at Character
var returnStringAtCharTs = function (str, num) {
    var strArr = str.split('\n');
    return strArr[num - 1];
};
var returnStringAtCharJs = function (str, num) {
    if (typeof str !== 'string' || typeof num !== 'number') {
        return 'First arg must be a string and sec arg must be a number';
    }
    var strArr = str.split('\n');
    return strArr[num - 1];
};
console.log(returnStringAtCharTs("apples\nmilk\nbread\nfish\n", 1));

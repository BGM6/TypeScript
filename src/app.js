var helper = function (arr) {
    var res = [];
    for (var i = arr.length; i >= 0; i++) {
        var num = arr[i];
        res.push(num);
    }
    return res;
};
var solve = function (arr, n) {
};
console.log(helper([1, 2, 3, 4, 5]));

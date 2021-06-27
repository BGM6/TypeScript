"use strict";
var helper = function (str) {
    var hash = {};
    for (var _i = 0, _a = str.toLowerCase(); _i < _a.length; _i++) {
        var char = _a[_i];
        hash[char] ? hash[char]++ : hash[char] = 1;
    }
    return hash;
};
var isAnagram = function (str1, str2) {
    if (str1.length !== str2.length)
        return false;
    var hash = helper(str1);
    for (var _i = 0, str2_1 = str2; _i < str2_1.length; _i++) {
        var char = str2_1[_i];
        if (!hash[char])
            return false;
        else
            hash[char] -= 1;
    }
    return true;
};
console.log(isAnagram('cinema', 'iceman'));

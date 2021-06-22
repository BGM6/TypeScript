//never type
var userInput;
var userName;
userInput = 5;
userInput = 'Bryan';
//doesn't work unknown is a bit more restrictive than any
// userName = userInput;
//never Type
function generateError(message, code) {
    throw { message: message, errCode: code };
}
var res = generateError('Error', 500);
console.log(res);

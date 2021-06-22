//never type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Bryan';

//doesn't work unknown is a bit more restrictive than any
// userName = userInput;

//never Type
function generateError(message: string, code: number): never {
  throw {message: message, errCode: code};
}

const res = generateError('Error', 500)
console.log(res);

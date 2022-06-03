/* 
Falsy:
False
0
empty string
undefinied
null
[]
{}
anything else that is not falsy will be truthy

----------------------
truthy:
True
any number (positive or negative)
any string including single white space, '0'

*/
let x;
console.log('value of x', x)

const x = true;
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is Falsy');
}
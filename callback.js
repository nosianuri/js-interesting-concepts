/* function welcomeMessage(name,greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
// const names = ('Tom Hanks', 'Tom Brady', 'Tom Cruise');
// const myObj = { name: 'Tom Chinku', age: 11};
function greetMorning(name) {
    console.log('Good morning', name);
}
function greetAfternoon(name) {
    console.log('Good afternoon', name);
}
welcomeMessage('Tom Hanz', greetMorning);
welcomeMessage('skib Hanz', greetAfternoon);
welcomeMessage('skib Hanz', greetAfternoon);

function handleClick(){
    console.log('button is clicked');

}
document.getElementById('my-btn').addEventListener('click', handleClick)
document.getElementById('btn').addEventListener('click', function(){
    console.log('buttn is clicked');
}) */

let p='javascript';
let q=p;
p='React';
// console.log(q);

const isTrue='false';
if(!isTrue){
    console.log('hello');
}
else {
    console.log('world');
}

function sum(p, q){
    p+q;
}
const result = sum(2, 3);
console.log(result);

if("2" === 2) {
    console.log("Inside if");
}
else {
    console.log("Inside else");
}

function work (x, y = 4) {
    return x+y;
}
console.log(work(32));
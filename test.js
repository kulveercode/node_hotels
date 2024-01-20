// var a=5;
// var b= 10;
// var add= a+b;
// console.log(add);

//filter

var ages = [32,15,18,20,40];
const result = ages.filter(checkAge);

function checkAge(age) {
    return age>=18
}
console.log(result);
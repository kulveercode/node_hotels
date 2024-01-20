// // function add(a, b) {
// //     return a+b;
// // }

// // var add = function(a, b){
// //     return a+b;
// // }

// // var add = (a,b) => {
// //     return a+b;
// // }

// var add = (a, b) => a+b;

// var result = add(20,10);
// console.log(result);

// callback function

function callback(){
    console.log('now adding is successful');
}

const add = function(a,b,callback) {
    var result = a+b;
    console.log(result);
    callback();
}
// add(5,10,callback);
add(4,5, ()=> console.log('add completed'));


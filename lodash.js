// const notes = require('./notes.js');

// var age = notes.age;
// console.log(age);

var _= require('loadsh');

var data = ["person", "person", "Kulveer", 1, 2, 4, 7, 9, 12, 15, 100, 2 , 4 , 9, "Hello", "Hello"];
var filter = _.uniq(data);
console.log(filter);
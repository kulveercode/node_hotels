// const jsonString = '{"name": "John", "age":30, "city":"Newyork"}';
// const jsonObject = JSON.parse(jsonString);        //used to receive data

// console.log(jsonObject.age);

const jsonObject = {name: "John", age:30, city:"Newyork"};
const jsonString = JSON.stringify(jsonObject);        //used to send data

console.log(jsonString);




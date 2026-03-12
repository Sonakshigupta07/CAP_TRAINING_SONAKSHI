// let array=[10,267,18,45];

// let arr1 = [10,"bcd",true, null,undefined];

// console.log(arr1);

// // objects
// let student={
//     name:"ram",
//     age:21,
//     college:"JECRC"
// }
// console.log(student);

// let a = "Sonakshi";
// console.log(a[1]);

// function add(){
//     console.log(10+20);
// }
// add()


// Name Function
// function sub(a,b=5){
//     console.log(a-b);
//     return a-b;
// }

// sub(10)
// console.log();

// Anoymous Function
// let a = function (){
//     console.log("Hii"); 
//     return 10 
// }
// a();
// console.log(a());  


// // A way to call a function 
// (function (){
//     console.log("Hello");
// }())

// // Immediate invoking 
// (function (){
//     console.log("Hello");
// })()

// "use strict"
// g=43;
// console.log(g);

// function greet(){
//     console.log("Hiiii");   
// }

// console.log(greet instanceof Object);

let arr=[10,20,30,60,567]

let obj={
    key1:"value1",
    key2:"value2",
}

for(let i in arr){
    console.log(i," - ",arr[i]);
}

// for(let i of obj){
//     console.log(i);
    
// }

for(let ch in obj){
    console.log(ch);
    console.log(obj[ch]);
}
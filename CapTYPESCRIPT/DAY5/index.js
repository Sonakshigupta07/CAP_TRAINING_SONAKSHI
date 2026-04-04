"use strict";
// console.log("Hiiiii");
// //// TYPE INFERENCE
// let a=10
// a=20
// // a="hiii" 


// //// TYPE ANNOTATION
// let b:string="Hello"
// // b=20
// let c:number=20
// let d:boolean=true
// let e:null=null
// let f:undefined
// // console.log(d);
// // d=false
// // console.log(e);
// // let g:any=20
// // console.log(g);
// // g="Hiiii"
// // console.log(g);
// //// ARRAY AND TUPLE
// let arr:number[]=[10,20,30,40]
// console.log(arr)
// arr.push(50)
// console.log(arr);
// let arr1:[string,number]=["jeid",23]
// console.log(arr1);
// arr1.push(45);
// console.log(arr1);
// let stud:{
//     name:string,
//     age?:number
// }={
//     name:"Sonakshi",
//     // age:18
// }
// ///// FUNCTION 
// function greet(name:string,age:number=22):void{
//     console.log(`${name} and ${age}`);
//     // return 10    // Not assignable
// }
// greet("Sonakshi");
// function add(a:number, b:number):number{
//     return a+b
// }
// console.log( add(10,20));
// ////// ARROW FUNCTION
// const divide = (a:number, b:number) : number => a/b
// console.log(divide(18,9));
// let arr3:(string|number)[]=[18,"virat",45,]
// // arr3.push(10733)    Error when use readonly 
// ////// INTERFACE
// // interface Person{
// //     name:string,
// //     age:number,
// //     gender:string
// // }
// // let obj : Person={
// //     name:"Sonakshi",
// //     age:21,
// //     gender:"Female"
// // }
// //////// READONLY PROPERTY
// // interface User{
// //     readonly id : number,
// //     name:string
// // }
// // const u1:User={
// //     id:1,
// //     name:"Riya"
// // }
// // u1.name ="Radhi"
// // // u1.id=18
// /////////  EXTENDS KEYWORD  ////////////
// interface Animal{
//     name:string,
//     age:number
// }
// interface Dog extends Animal{
//     bread:string
// }
// let myDog:Dog ={
//     name:"tommy",
//     age:2,
//     bread:"Bulldog"
// }
// /////// METHOD //////
// interface Car{
//     brand:string,
//     colour:string,
//     sunroof(): string
// }
// let myCar:Car={
//     brand:"Toyoto",
//     colour:"Black",
//     sunroof(){
//         return "sunroof"
//     }
// }

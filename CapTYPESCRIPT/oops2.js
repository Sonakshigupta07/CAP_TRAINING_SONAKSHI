// import {add} from "./oops"
// console.log(add(45,5));
// import {name} from "./oops"
// console.log(name);
// import { Car } from "./oops";
// let c=new Car("maruti","Black")
// console.log(c);
// function task1(){
//     console.log("task1"); 
// }
// function task2(){
//     console.log("task2");
// }
// task1()
// task2()
////// SET TIME OUT
// console.log("start");
// setTimeout(()=>{
//     console.log("task completed")
// },2000)
// let set : number = setInterval(()=>{
//     console.log("task completed");  
// },2000)
// console.log("end");
/////// PROMISES
/// ---> fullfilled
/// ---> rejected
/// ---> Pending
// let p1 = new Promise<string>((resolve,reject)=>{
//     let success = true
//     if(success == true){
//         resolve('Login successful')
//     }
//     else{
//         reject("Login unsuccessful")
//     }
// })
// console.log(p1);
// p1.then((ele) =>{
//     console.log(ele);
// }).catch((res)=>{
//    console.log(res);
// })
// .finally(()=>{
// })
// function getUser():Promise<string>{
//     return new Promise((resolve,reject)=>{
//         reject("User not found")
//         resolve("User is there")
//     })
// }
// getUser().then((ele)=>{
//     console.log(ele);
// }).catch((res)=>{console.log(res);
// })
// Promise.all([
// ])
let pro = new Promise((resolve) => {
    resolve(10);
});
// pro.then((num)=>{
//     let result = num * 2;
//     console.log(result);
//     return result;
// }).then((finalResult)=>{
//     let output = finalResult *2;
//     console.log(output);
//     return output;
// })
pro.then(num => num * 2)
    .then(result => result * 2)
    .then(finalValue => console.log(finalValue));

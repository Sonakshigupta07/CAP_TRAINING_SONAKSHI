
// ///////// OOPS //////////

// ///// CLASS
// // -----> blueprint
// // -----> structure of object

// // class demo{
// //     // Properties
// //     // methods
// //     // Constructor --> special method
// //     constructor(){

// //     }
// // }

// // class Car{
// //     public brand!:string;
// //     colour:string="blue";
// //     display():void{
// //        console.log("Display");
       
// //     }

// //     constructor(brand:string,colour:string){
// //         this.brand=brand;
// //         this.colour=colour;
// //         this.display()
// //         this.display=()=>{
// //             console.log("new displsy");
// //         };
// //         this.display();
// //     }

// //     start():void{
// //         console.log("This is my car");
        
// //     }
// // }

// // let c = new Car("maruti","red")
// // c.brand="maruti"
// // console.log(c.brand);
// // console.log(c);


// /////// BASIC INHERITANCE

// // class Animal{
// //     eat(){
// //         console.log("All Animals eat");
// //     }
// // }
// // class Cat extends Animal{
// //     sound(){
// //         console.log("Meow");
        
// //     }
// // }

// // let cat = new Cat
// // cat.eat()
// // cat.sound()

// // class Person{
// //     name:string="Sonakshi"
// //     constructor(name:string){
// //         this.name=name
// //     }
// // }

// // class teacher extends Person{
// //     company:string="test yantra";
// //     constructor(company:string,name:string){
// //         super(name);
// //         this.name=name
// //     }

// //     display(){
// //         console.log(this.company,this.name);
// //     }
// // }

// // let t = new teacher("abc","xyz");
// // t.display()

// export function add(a:number , b:number):number{
//     return a+b
// }
// console.log(add(2,18));

// export let name:string="sonakshi"

// export class Car{
//     brand!:string;
//     colour!:string

//     constructor(brand:string, colour:string){
//         this.brand = brand;
//         this.colour = colour;
//     }

//     display():void {
//         console.log("Brand",this.brand);
//         console.log("Colour",this.colour);
        
//     }
// }


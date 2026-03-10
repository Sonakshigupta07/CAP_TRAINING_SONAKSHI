// console.log(window);
// var a = 10;
// let b = 10;
// const c = 10;
// console.log(window);

// console.log("Hello")
// window.console.log("hello");

// console.log(document);
// console.log(document.body);
// console.log(document.body.childNodes[0]);
// console.log(document.body.children[2]);

// let btn1 = document.body.children[2]
// console.log(btn1.parentElement);
// console.log(btn1.parentNode);

// console.log(document.body.children[3]);
// let div1 = document.body.children[3]
// console.log(div1.firstElementChild);
// console.log(div1.lastElementChild);

// let head4 = div1.lastElementChild;
// console.log(head4.previousElementSibling);

///////  GET ELEMENT BY ID //////
// ---> it returns one the first element

// let h1 = document.getElementById("head1");
// console.log(h1);

// let btn = document.getElementById("btn1")
// console.log(btn)

////// GET ELEMENTS BY CLASSNAME

// let h4 = document.getElementsByClassName("h44")
// console.log(h4);
// convertedarray=Array.from(h4);
// console.log(convertedarray);
// convertedarray.map((ele)=>{
//      ele.style.color = "blue";
//      ele.style.backgroundColor="skyblue"
//      ele.style.fontsize = "20px";
// })

////// GET ELEMENT BY NAME

// let btnname = document.getElementsByName("btn");
// console.log(btnname);

// ///// QUERY SELETCROR

// let h12 = document.querySelector(".h44")
// console.log(h12);

// let h13 = document.querySelectorAll(".h44")
// console.log(h13);
// convertedarray = Array.from(h13);
// console.log(convertedarray);
// convertedarray.map((ele)=>{
//     ele.style.color = "brown"
// })

// ///// CREATE ELEMENT

// // let img1 = document.createElement("img")
// // console.log(img1);
// // img1.setAttribute("src","https://www.bucketlistly.blog/posts/best-free-travel-images")
// // document.body.append(img1)

// let h1 = document.createElement("h1")
// h1.innerText="JavaScript"
// document.body.append(h1)

// let p = document.createElement("p")
// p.textContent="Playwright"
// p.setAttribute("id","p1")
// document.body.append(p);
// console.log(p);
// p.removeAttribute("id");
// console.log(p);
// document.body.removeChild(p);
// console.log(document.body);

///////// EVENT HANDLING  ///////////
// ----> Inline event

// let btn = document.getElementById("btn1"); 
// function demo(){
//     alert("Button Clicked")
// }

// let btn1 = document.getElementById("btn1");
// btn1.onclick=function demo(){
//     alert("Clicked");
// }

// Add event Listner

/**
 * syntax
 * 
 * element.addeventlistner("event","callback function")
 */

// let btn1 = document.getElementById("btn1");
// btn1.addEventListener("click",()=>{
//     document.body.style.backgroundColor="Skyblue"
//     let img1 = document.createElement("img")
//     img1.setAttribute("src","")
// })

let btn = document.getElementById("btn1");

let isWhite = true; 

btn.addEventListener("click", () => {
  if (isWhite) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    btn.innerText = "Dark Mode";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.innerText = "Light Mode";
  }

  isWhite = !isWhite; 
});





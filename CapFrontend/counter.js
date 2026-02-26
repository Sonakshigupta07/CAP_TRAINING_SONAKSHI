let countBox = document.getElementById("count");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let resetBtn = document.getElementById("reset");

let count = 0;

plusBtn.addEventListener("click",()=>{
    count++;
    countBox.innerText = count;
});

minusBtn.addEventListener("click",()=>{
    count--;
    countBox.innerText = count;
});

resetBtn.addEventListener("click",()=>{
    count = 0;
    countBox.innerText = count;
});


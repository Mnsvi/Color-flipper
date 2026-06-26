let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let body = document.querySelector(".hero")
let but = document.querySelector(".submit");
let op = document.querySelector(".sec4 h1");

box1.addEventListener("click",()=>{
    body.style.backgroundColor = "red";
})
box2.addEventListener("click",()=>{
    body.style.backgroundColor = "blue";
})
box3.addEventListener("click",()=>{
    body.style.backgroundColor = "green";
})
box4    .addEventListener("click",()=>{
    body.style.backgroundColor = "yellow";
})

but.addEventListener("click",()=>{
    op.style.textContent = "ji";
})

let input = document.getElementById("userInput");
let submit = document.getElementById("submitBtn");
let output = document.querySelector(".sec4 p");

submit.addEventListener("click", ()=>{
    output.textContent= input.value;
    output.style.fontSize = "32px";
})
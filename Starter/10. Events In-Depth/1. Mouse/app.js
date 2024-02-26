// https://www.w3schools.com/jsref/obj_mouseevent.asp

// 1. click
// 2. contextmenu
// 3. dblclick
// 4. mousedown
// 5. mouseenter
// 6. mouseleave
// 7. mousemove
// 8. mouseout
// 9. mouseover
// 10. mouseup

let one = document.querySelector(".click");
const red = () => {
  one.classList.toggle("red");
};
one.addEventListener("click", red);

let two = document.querySelector(".contextmenu");
two.addEventListener("contextmenu", () => {
  two.classList.toggle("blue");
});

let three = document.querySelector(".dblclick");
three.addEventListener("dblclick", () => {
  three.classList.toggle("teal");
});

let four = document.querySelector(".mousedown");
four.addEventListener("mousedown", () => {
  four.classList.toggle("steelblue");
});

let five = document.querySelector(".mouseenter");
five.addEventListener("mousedown", () => {
  five.classList.toggle("orange");
});

let six = document.querySelector(".mouseleave");
let seven = document.querySelector(".mousemove");
let eight = document.querySelector(".mouseout");
let nine = document.querySelector(".mouseover");
let ten = document.querySelector(".mouseup");

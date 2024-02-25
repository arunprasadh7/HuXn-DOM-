// Parent classes
const litem = document.querySelector(".fourth");
console.log(litem.parentElement);
console.log(litem.parentElement.parentElement);
console.log(litem.parentElement.parentElement.parentElement);
console.log(litem.parentElement.parentElement.parentElement.parentElement);

// Children class
const ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
// console.log((ul.children[0].innerText = "one"));
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[3]);

// Sibling Selector
const li = document.querySelector("li");

console.log(li.nextElementSibling.textContent);
console.log(li.nextElementSibling.nextElementSibling.textContent);
console.log(
  li.nextElementSibling.nextElementSibling.nextElementSibling.textContent
);

// previous element sibling
const fourth = document.querySelector(".fourth");
console.log(fourth.textContent);
console.log(fourth.previousElementSibling.textContent);
console.log(fourth.previousElementSibling.previousElementSibling.textContent);

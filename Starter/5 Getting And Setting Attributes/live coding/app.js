const a = document.querySelector("a");
const input = document.querySelector("input");

// href
console.log(a.href);
console.log((a.href = "www.youtube.com"));

// value
// input.value = "Arun";
console.log(input.value);

// type
const pass = document.querySelector("#pwd");
pass.type = "password";
pass.placeholder = "Please provide a strong password";

// getAttribute(attrName)
const mail = document.querySelector("#email");
console.log(mail.getAttribute("type"));
console.log(mail.getAttribute("placeholder"));

// setAttribute(attrName, value)
const uname = document.querySelector("#uname");
uname.setAttribute("type", "text");
uname.setAttribute("placeholder", "Enter username");

console.log(uname.type);
console.log(uname.placeholder);

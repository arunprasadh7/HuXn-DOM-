// ------------------------------------
// createElement()
const h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.classList.add("greetings");
console.log(h1);

// appendChild()
const body = document.body;
body.appendChild(h1);

// append()
const section = document.querySelector("section");
let i = document.createElement("i");
i.innerText = "I am italicized ";
i.style.color = "red";
section.append(i);

const n1 = document.createElement("span");
n1.innerText = "Arun";
n1.style.color = "orangered";
section.append(n1);

// prepend()
section.prepend(n1);

// insertBefore()
const ul = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.textContent = "Im a kuthu dancer";
ul.appendChild(newLi);

const firstLi = document.querySelector("li");
ul.insertBefore(newLi, firstLi);

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */
const firstP = document.querySelector("p");
i = document.createElement("i");
i.innerText = "Im italics";
i.style.color = "skyblue";

// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("afterend", i);

// removeChild()
const newList = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");
newList.removeChild(fourth);

// remove()
newList.remove();
// ------------------------------------

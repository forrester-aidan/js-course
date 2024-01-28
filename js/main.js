// First Coding Challenge

// Write code that will return a random letter from your name

const name = "Aidan";
let random_letter = Math.floor(Math.random() * name.length);
console.log(name.charAt(random_letter));


// Select stuff on a page

const view1 = document.getElementById("view1");
const view2 = doucment.querySelector("#view2");

view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view"); // returns an HTMLCollection
const sameViews = document.querySelectorAll('.view'); // returns a NodeList

const divs = view1.querySelectorAll("div"); // returns a NodeList of divs just in the first view, not the document
const sameDivs = view1.getElementsByTagName("div"); // returns a HTMLCollection of divs just in the first view, not the document

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)"); // return only the even divs

// Alter the page

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  // evenDivs[i].style.width = "200px";
  // evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1"); // inside nav bar i want h1
navText.textContent = "Hello World!" // changes JUST text

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right</p>` // actually ADDS html to the page
navbar.style.justifyContent = "space-between";

// DOM Tree
evenDivs[0].parentElement // returns the section the divs are in
evenDivs[0].parentElement.children // returns all children of the parent element (the divs)
evenDivs[0].parentElement.childNodes // returns all elements AND HTML nodes inside divs
evenDivs[0].parentElement.hasChildNodes() // checks if there are child nodes
evenDivs[0].parentElement.lastChild // very last child of parent element
evenDivs[0].parentElement.lastElementChild // very last element of the parent element
// first child
// first element child
// the rest are pretty self explanatory




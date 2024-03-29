// JavaScript Event Listeners

const view1 = document.getElementById("view1");
view1.style.display = "none";


document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp(); // load other event listeners
  }
})

const initApp = () => {
  const view = document.querySelector("#view2");
  view.style.display = "flex";
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener("click", (event) => {
    view.classList.toggle("purple");
    view.classList.toggle("darkblue");
  })
  
  div.addEventListener("click", (event) => {
    div.classList.toggle("blue");
    div.classList.toggle("black");
  })
  
  h2.addEventListener("click", (event) => {
    const myText = event.target.textContent;
    myText === "My 2nd View"
    ? (event.target.textContent = "Clicked")
    : (event.target.textContent = "My 2nd View");
  })

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("height100");
  })
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  })
}

// prevent Default : prevent the default action of an HTML element (such as a form that reloads a page)




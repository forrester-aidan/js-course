// First Coding Challenge

// Write code that will return a random letter from your name

let name = "Aidan";
let random_letter = Math.floor(Math.random() * name.length);
console.log(name.charAt(random_letter));
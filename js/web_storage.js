// Web Storage Tutorial

const arr = ['eat', 'sleep', 'code'];
const myObject = {
  name: "Aidan",
  hobbies: ['eat', 'sleep', 'code'],
  logName: function() {
    console.log(this.name);
  }
}



localStorage.setItem("myLocalStore", JSON.stringify(arr));
localStorage.removeItem("myLocalStore");
const localData = JSON.parse(localStorage.getItem("mySessionStore"));
console.log(localData);
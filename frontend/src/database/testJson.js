// Storing data:
const myObj = {name: "John", age: 31, city: "New York"};
var myJSON = JSON.stringify(myObj);
localStorage.setItem("testJson", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);

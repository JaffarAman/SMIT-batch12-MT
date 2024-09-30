// var fruit1 = "Apple"
// var fruit2 = "Orange"

// var fruits = ["apple", "orange"];
// console.log("fruits", fruits[1]);
// fruits.pop() // remove last index
// fruits.push("mango") //add last index
// fruits.push("mango" , 123 , true)

// fruits.shift() //remove first index
// fruits.unshift("mango") //add first index

// var fruits = [12, "apple", "orange", "mango", 234];
// slice ==> Array ki copy krta hai

// var fruitCopy =fruits.slice(starting point , end Pointing)
// var fruitCopy =fruits.slice(index , length)
// var fruitCopy = fruits.slice(1, 3);
// var fruitCopy = fruits.slice(1);
// var fruitCopy = fruits.slice(0 , -2);
// var fruitCopy = fruits.slice(-2);

// console.log("fruitCopy", fruitCopy);
// console.log("fruits", fruits);

// var fruits = [12, "apple", "orange", "mango", 234];
// // Splice ==> add or remove
// // fruits.splice(target point , delete count , values)
// fruits.splice(0, 1);
// fruits.splice(-2 ,2 , "karachi" , "lahore")

// console.log(fruits);
// console.log("HELLO WORLD");
// Loops
// for loop

// for(initialization; condition; increment/decrement){

// }

// for (var i = 1; i <= 10; i++) {
//     console.log("HELLO WORLD")
// }

// (i) => 1;
// (i) => 2;
// (i) => 3;
// (i) => 4;
// (i) => 5;
// (i) => 6;

// for (var i = 1; i <= 5; i++) {
//   console.log("HELLO WORLD", i);
// }

// for (var i = 1; i <= 100; i++) {
//   console.log("i");
// }

// var userName = prompt("Enter your name");
// document.write("<h1>Hello" + " " + userName + "</h1>");
// document.write("<h1>HELLO WORLD</h1>")

// document.write("2 x 1 = 2" + "<br />")


// for (var i = 1; i <= 100; i++) {
//   document.write("2 x " + i + "=" + 2 * i + "<br />");
// }
var tableNumber = +prompt("Enter Table Number!");
var tableLength = +prompt("Enter Table Length!");
for (var i = 1; i <= tableLength; i++) {
  document.write(tableNumber + " x " + i + "=" + tableNumber * i + "<br />");
}

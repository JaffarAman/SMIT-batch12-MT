// console.log("HELLO WORLD")

// document.write("<h1>HELLO WORLD </h1>");
// document.write("<h1>HELLO WORLD </h1>");
// document.write("<h1>HELLO WORLD </h1>");
// document.write("<h1>HELLO WORLD </h1>");
// document.write("<h1>HELLO WORLD </h1>");
// document.write("<h1>HELLO WORLD </h1>");
// document.write("<h1>HELLO WORLD </h1>");
// document.write("<h1>HELLO WORLD </h1>");
// document.write("<h1>HELLO WORLD </h1>");
// document.write("<h1>HELLO WORLD </h1>");

// for loop

// 1st cycle loop
// . variable
// .check condition
// .block of statements (if condition true )
// .increment

// 2st cycle loop
// .check condition
// .block of statements (if condition true )
// .increment

// var num1 = 10
// console.log(++num1)
// console.log(num1)

// for (var i = 1; i <= 100; ++i) {
//   document.write("<h1>HELLO WORLD </h1>");
// }

// var startNum = +prompt("Enter counting starting point");
// var endNum = +prompt("Enter counting ending point");

// for (var i = startNum; i <= endNum; i++) {
//   console.log("i", i);
// }

// 3 % 2 => odd
// 2 % 2 => even

// // Print Odd Number
// for(var i = 1 ; i<=10;i++){
//     if(i%2 !==0){
//         console.log("odd", i)
//     }
// }

// Print Even Number
// for (var i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log("Even", i);
//   }
// }

// Array/Loop
var arr = ["karachi", "lahore", "delhi", "nepal", "multan", "multan", "multan"];

// 0 <= 5 => true = > karachi
// 1 <= 5 => true = > lahore
// 2 <= 5 => true = > delhi
// 3 <= 5 => true = > nepal
// 4 <= 5 => true = > multan
// 5 <= 5 => true = > undefined

// 0 < 5 => true = > karachi
// 1 < 5 => true = > lahore
// 2 < 5 => true = > delhi
// 3 < 5 => true = > nepal
// 4 < 5 => true = > multan
// 5 < 5 => false

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// var firstName = "Jaffar";
// var lastName = "Aman";
// // template literals javascript
// var fullName = "firstName + lastName";
// console.log(fullName);

// var num1 = 20;
// console.log(num1 + "x" + 1 + "=" + num1 * 1);
// var firstName = "Jaffar";
// var lastName = "Aman";
// console.log(`my name is ${firstName} ${lastName}`);

// var name = "jaffar"
// // name = name + "aman"

// name += "aman"
// console.log(name)

var usersCollection = ["Ali", "usman", "Jaffar", "Sufiyan", "Bilal", "Ahad"];

var temp = "";

for (var i = 0; i < usersCollection.length; i++) {
  //   console.log(usersCollection[i]);
  temp += `<div class="card">
      <div class="card-body"> ${i + 1}. ${usersCollection[i]} </div>
    </div>`; //01234
}

console.log(temp);
document.write(temp);


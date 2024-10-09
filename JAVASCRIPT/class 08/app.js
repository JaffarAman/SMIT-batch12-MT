// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// var cities = ["karachi", "lahore", "islamabad", "multan", "delhi", "mumbai"];
// document.write(cities[0], "<br />");
// document.write(cities[1], "<br />");
// document.write(cities[2], "<br />");
// document.write(cities[3], "<br />");

// for (var i = 0; i < cities.length; i++) {
//   // document.write(i + 1 + " " + cities[i] + "<br />");
//   document.write(` ${i + 1} ${cities[i]} <br /> `);
// }

// var userCity = prompt("Enter Your City!");
// var cities = ["lahore", "islamabad", "karachi", "multan", "delhi", "mumbai"];

// for (var i = 0; i < cities.length; i++) {
//   if (cities[i] == "karachi") {
//     document.write("welcome" + cities[i]);
//     break;
//   }
// }

// for (var i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
//   if (cities[i] == "karachi") {
//     alert("Welcome");
//     break;
//   }
// }

// if(cities[0] == "karachi"){
//     console.log("WElcome")
// }else if(cities[1] == "karachi"){
//     console.log("WElcome")

// }
// else if(cities[2] == "karachi"){
//     console.log("WElcome")

// }
// else if(cities[3] == "karachi"){
//     console.log("WElcome")

// }
// else if(cities[4] == "karachi"){
//     console.log("WElcome")

// }

// else if(cities[5] == "karachi"){
//     console.log("WElcome")

// }

// var cities = ["lahore", "islamabad", "karachi", "multan", "delhi", "mumbai"];
// var userCity = prompt("Enter Your city");

// var isMatch = "no"; //false
// for (var i = 0; i < cities.length; i++) {
//   if (userCity === cities[i]) {
//     isMatch = "yes"; // true
//     alert("WELCOME");
//     break;
//   }
// }

// if (isMatch === "no") {
//   alert("Not Found");
// }

// console.log(userCity);

// var isMatchFlag = false;

// for (var i = 0; i < cities.length; i++) {
//   //   console.log(cities[i]);
//   if (userCity === cities[i]) {
//     isMatchFlag = true;
//     alert("WELCOME");
//     break;
//   }
// }

// if (isMatchFlag == false) {
//   alert("not Found!");
// }

// nested loop
for (var i = 1; i <= 5; i++) {
  console.log("outer", i);
  for (var j = 10; j <= 50; j = j + 10) {
    console.log("inner", j);
  }
}

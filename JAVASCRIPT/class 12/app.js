// function addition(){
//     var num1 = +prompt("Enter num1")
//     var num2 = +prompt("Enter num2")
//     console.log(num1 + num2)
// }
// addition()

// alert("Jaffar")

// function add(num1, num2) {
//     console.log("num1" , num1)
//     console.log("num2" , num2)
// }

// add(10, 50);
// add(100 , 200);

// function calc(num1 ,  opt , num2){
//     console.log(num1 , num2 , opt)
//     if(opt=== "+"){
//         console.log(num1 + num2)
//     }else if(opt=== "-"){
//         console.log(num1 - num2);
//     }

// }

// alert(message)
// calc(20,"-" ,40  ) //args

// function greet(message) {
//   console.log("message", message);
// }
// greet();

// default parameters
// function add(num1 = 0, num2 = 0) {
//   console.log(num1, "num1");
//   console.log(num2, "num2");
//   console.log(num1 + num2);
// }

// add(50);
// add(100 , 500)

// function haseeb(msg = "") {
//     alert(msg);
// }

// var promptMessage = prompt("Message")
// greet(promptMessage);

// var a = 10

// function foo(){
//     console.log(a)
// }
// foo()

// Global VS local Scope

// function foo(){
//     var a = 100
//     console.log("inside" ,a)
// }

// foo()
// console.log(a)

// var userName = "smit";
// function foo() {
//     userName = "SAYANI";
//   console.log(userName, "1");
// }
// console.log(userName, "2");
// foo();

//  foo = "foo"

// var foo;

// console.log("foo" , foo)
// // foo = 100

function fullName(firstName, lastName) {
  return   firstName + " " + lastName
}

var userName = fullName("Jaffar" , "Aman")

console.log(userName , "userName")

// console.log( fullName("Jaffar", "Aman") )
// var now = new Date().toDateString();
// var now = new Date().toTimeString();
// console.log(now.slice(0,3));
// var now  = new Date().toLocaleDateString()
// var now  = new Date().toLocaleTimeString()
// var now = new Date()
// console.log(now);
// console.log(typeof now);

// document.write(now)

// console.log(new Date().getDay());
// console.log(new Date().getMonth(), "getMonth");
// console.log(new Date().getDate(), "getDate");
// console.log(new Date().getFullYear(), "getFullYear");
// console.log(new Date().getHours(), "getHours");
// console.log(new Date().getMinutes(), "getMinutesr");
// console.log(new Date().getSeconds(), "getSeconds");
// console.log(new Date().getTime(), "getTime");

// var date = new Date("Oct 16,2023");
// console.log(now, "now");
// console.log( date  , "date",);
// var now = new Date();
// var dobPrompt = prompt("Enter Youre dob" , "Oct 16,2023")
// var dob = new Date(dobPrompt)

// console.log(now, "now")
// console.log(dob, "dob")

// var nowMiliSec = now.getTime()
// var dobMiliSec = dob.getTime()

// var diff = nowMiliSec - dobMiliSec
// var years = Math.floor( diff / (1000 *60*60*24*365))
// console.log(years ,"years" )

// console.log(diff , "diff")

// console.log(nowMiliSec , "nowMiliSec")
// console.log(dobMiliSec , "dobMiliSec")

// var now = new Date()
// var closing = "Oct 31, 2024"
// var closingDate  = new Date(closing)
// var diff =  closingDate.getTime() - now.getTime()
// console.log(Math.floor( diff/(1000*60*60*24)))

// now.getTime()

// console.log("HELLO");
// console.log("WORLD");

// function  function_name(){

// }

// function abc(){
//     console.log("HELLO")
//     console.log("WORLD")
// }

// abc()
// abc()
// abc()

// function greet(){
//     alert("HELLO USER")
// }

// // greet()

// function addition() {
//   var num1 = +prompt("Number 1");
//   var num2 = +prompt("Number 2");
//   alert(num1 + num2);
// }


function calc(){
    var num1 = +prompt("Enter num1")
    var num2 = +prompt("Enter num2")
    var opt = prompt("Enter opt" , "+,-,*,/")

    if(opt == "+"){
        alert(num1 + num2)
    }else if(opt == "-"){
        alert(num1 - num2)
    }


}
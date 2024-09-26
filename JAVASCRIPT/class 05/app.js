// var city1 = "karachi"
// var city2 = "lahore"
// var city3 = "multan"

// Array
// index= length -1

// var cities = ["karachi", "lahore", "multan"];

// cities[3] = "Islamabad"

// cities[0] = "Hello"
// console.log(cities)
// console.log("cities", cities[indexNumber]);
// console.log("cities", cities[1]);

// var arr  = ["karachi" , 2024 , true , null , undefined]
// console.log(arr.length)

// if(arr){
//     console.log("allow")
// }

// pop , push //LAST INDEX
// shift , unshift // FIRST INDEX

// slice , splice

// var cities = ["karachi", "lahore"];
// cities[2] = "multan";

// cities.push("multan" , "123" ,"456")
// cities.pop() // remove last index value
// cities.pop() // remove last index value

// cities.unshift("multan" , 123)
// cities.shift();
// console.log("cities", cities);

// SLICE =>

// var arr = ["karachi", 2024, true, null, undefined];

// var cities = ["karachi", "lahore", "multan", "delhi", "mumbai", "islamabad"];
// var copyArr = cities.slice(1 , 3)
// var copyArr = cities.slice(2,5)
// var copyArr = cities.slice(1)
// var copyArr = cities.slice(0 , -5)

// var copyArr = cities.slice(3,6)

// console.log(copyArr , "copyArr")
// console.log(cities , "cities")

var cities = ["karachi", "lahore", "multan", "delhi", "mumbai", "islamabad"];
// cities.splice(2, 2) //target multan and only remove 2 values
// cities.splice(2, 0 , "HELLO" , "hello2") //target multan and only remove 2 values
cities.splice(1 , 1 , "islamabad") //target multan and only remove 2 values

console.log(cities)

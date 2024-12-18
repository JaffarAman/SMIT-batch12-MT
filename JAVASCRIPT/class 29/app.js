// const a = 18
// if (a == 18) { // console.log("Allow") // } else { // console.log("Not Allow") // } // ? => if // : => else // const a = 15 // const isCheck = a == 18 ? "Allow" : "Not Allow" // const isCheck = a >= 18 ? "Allow" : "Not Allow" // console.log(isCheck) // if => ? // else if // else => : // 18 , 25 , 30 // const result = // age == 18 ? "age 18" // : age == 25 ? "Age 25" : age == 30 ? "age 30" : "not match" // console.log(result) // const gender = "male" // const age = 20 // const result = (age == 18 && gender == "male") ? "Allow" : "not allow" // console.log(result) // var isValue = false //null ya undefined // var isCheck = isValue ?? [] // console.log(isCheck) var age = 18 //backend if(!age){ console.log("not allow") }


// const age = false

// const storeAgeValue = age ?? 0
// console.log(storeAgeValue)

// JavaScript Modules => Import / Export
// import mydata from "./data.js"
// import { gender, age } from "./data.js"

// console.log("gender, age", gender, age)
// console.log(mydata)

import first from "./data.js"
import { courses } from "./data.js"
import { age } from "./data.js"


console.log(first, age)

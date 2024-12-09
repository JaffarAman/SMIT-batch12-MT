// variables
// hoisting
// object or array destr
// spread opt
//Arrow functions
// this keyword
//Array methods => (find , findIndex , map , filter , forEach , sort, reduce , some , every)


// function foo(){
//     console.log("HELLO WORLD")
// }

// foo()

// arrow function
// const add = num1 => {
//     console.log("addition")
// }

// const add = _ => {
//         console.log("addition")
//     }

// const add = (num1 , num2) => {
//     console.log("addition")
// }


// const add = (num1, num2) =>
//     num1 + num2


// console.log(add(10, 20))


// console.log(this)

// const obj = {
//     firstName : "Jaffar",
//     getFullName : function(){
//         console.log(this)
//     }
// }

// const obj = {
//     firstName : "Jaffar",
//     getFullName : ()=>{
//         console.log(this)
//     }
// }
// obj.getFullName()


// Array High-Order method

// const arr = [1, 2, 3, 4, 5, 6]


// const modifiedArray = arr.map((value , index , array)=>{
//         if(value % 2 ===0){
//             return value * 2
//         }else{
//             return 
//         }    
// })

// console.log(modifiedArray)




// const newArr = arr.map((value, index) => {
//     return value * 2
// })
// console.log(arr, "Arr")

// console.log(newArr, "newArr")


// Filter
// const arr = [1, 2, 3, 4, 5, 6]


// const arrFIlter = arr.filter((value, index)=>{
//         if(value %2 !== 0){
//             return value * 20
//         }
// })

// console.log("arrFIlter" , arrFIlter)



// const arrFilter = arr.filter((value, index, array) => {
//     // console.log("value" , value)
//     // console.log("index" , index)
//     // console.log("array" , array)
//     // even number condition
//     if (value % 2 == 0) {
//         return true
//     }

//     // return true 

// })

// console.log(arrFilter , "arrFilter")


// find findIndex


// var valueFind = arr.find((value, index) => {
//     if (value == "karachi") {
//         return true
//     }
//     // return true
//     // console.log("value", value)
//     // if(value == 3){
//     //     return value
//     // }
// })


// const indexNumber = arr.findIndex((value) => {
//     if (value == "karachi") {
//         return true
//     }
// })
// console.log("valueFind", valueFind)
// console.log("indexNumber", indexNumber)3


// var arr = ["lahore", "karachi", "islamabad"]

// for (var i = 0; i < arr.length; i++) {

// }
// arr.forEach((value,index)=>{

// })


// calling api


// fetch()

// const arr = 

let response;
fetch("https://fakestoreapi.com/products")
    .then((res) => {
        return res.json()
    })

    .then((result) => {
        // response = result
        console.log("result", result)
        for (var i = 0; i < result.length; i++) {
            console.log(result[i])
        }
    })
    .catch((error) => {
        console.log("error", error)
    })


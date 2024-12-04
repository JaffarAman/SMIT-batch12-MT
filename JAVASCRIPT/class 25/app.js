// object destructuring

// const stdObj = {
//     name: "Jaffar",
//     age: 23
// }

// const name = "Jaffar Aman"

// const { name:stdName } = stdObj
// console.log(stdName)


// Array destructuring
// const array = [10, 20, 30, 40, 50]
// const [a, b, c, d, e] = array

// console.log(a, b, c, d, e)


// Skip element
// const array = [10, 20, 30, 40, 50]
// const [, , , value40] = array
// console.log(value40)

// default values
// const array = [10, 20 , 100]
// const [val1, val2 , val3 = 0] =array
// console.log(val1, val2 ,val3)


// The Spread (...) Operator (three dots)


// Array
// const arr1 =[1,2,3]
// const arr2 =[4,5,6]
// // const arr3 = arr1 + arr2
// const arr3 = arr1.concat(arr2)  // ES5

// const arr3 = [...arr1 , ...arr2] 

// console.log(...arr3 , "arr3")


// Object 
// const obj1 = {
//     firstName: "Jaffar"
// }
// const obj2 = {
//     lastName: "aman"
// }


// const obj3 = { ...obj1, ...obj2, age: 23 }
// console.log(obj3)



// Arrow functions

// function foo(){
//     console.log("HELLO WORLD")
// }

// foo()


// const add = (num1 , num2 , num3 , num4= 0 , num5 = 0) => {
//     console.log("Arrow function" , num1 , num2 , num3 , num4 , num5)
// }

// add(10, 20, 30)

// const foo = (para1)=>{

// }

// foo(100)

// function add(){
//     return 100
// }

// const add = ()=>{
//     return 100
// }


const add = () => 300  //directly return kr rha hai



const foo = (val1, val2) => {
    //
    //
    //
    //
}

const ans = add()
console.log(ans)


const arrowFuncton = () => {

}
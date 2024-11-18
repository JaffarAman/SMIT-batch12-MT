var arr = ["Pakistan", "phase 6", 25, "male", "johar"]
console.log("arr", arr[0])

arr[10] = "jaffar"

// object
var obj = {
    country: "Pakistan",
    area: "phase 6",
    block: 25,
    gender: "male",
    town: "johar",
    isActive: true,
    result: null,
}
// For in loop
for (var key in obj) {
    console.log("key", key , obj[key])
}


// obj.userName = "Jaffar"
// obj.isActive = false
// console.log(obj)

// check prop in obj
// var isCheck = "gender" in obj
// console.log("isCheck" , isCheck)

// delete obj.result



// console.log("obj", obj["country"]) //array notation

// console.log("obj" , obj.isActive) //dot

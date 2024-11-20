// str number bool null undefined array function object
var firstName = "Jaffar"
var stdObj = {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    email: "johndoe@gmail.com",
    gender: "male",
    // subjects: ["HTML", "CSS", "JS"],
    subject: [
        {
            name: "HTML",
            marks: 70
        },
        {
            name: "CSS",
            marks: 80
        },
        {
            name: "JS",
            marks: 60
        },
        {
            name: "React JS",
            marks: 100
        }
    ],
    getFullName: function (str) {
        console.log("str", str)
        // console.log(this.firstName + " " + this.lastName)
        // console.log(this.firstName + " " + stdObj.lastName)
        return this.firstName + " " + this.lastName
    },
    foo: function () {
        console.log("object k andar function")
    },
    getTotalMarks: function () {
        var total = 0
        for (var i = 0; i < this.subject.length; i++) {
            // console.log(this.subject[i].marks, "loop")
            total += this.subject[i].marks
        }
        console.log("total", total)
        return total
    }

}

var stdTotalMarks = stdObj.getTotalMarks()
console.log("stdTotalMarks", stdTotalMarks)
// console.log(stdObj.subject)
// var fullName = stdObj.getFullName("hello world")
// console.log("fullName", fullName)



// console.log(stdObj.subjects[1])
// console.log(stdObj)
// console.log(stdObj, "stdObj")
// // for in
// for( var key in stdObj ){
//     console.log("key" , key , stdObj[key])
// }


// var std1 = {
//     name :"jaffar",
//     course :"web and app"
// }

// var std2 = {
//     name :"sufiyan",
//     course :"web and app"
// }

// var std3 = {
//      name :"Bilal",
// }


function Std(name, age, gender, course) {
    this.studentName = name
    this.stdAge = age
    this.stdGender = gender
    this.stdCourse = course
}

var std1 = new Std("jaffar" , 23 , "male" , "web and app")
// var std1 = new Std("jaffar" , 23 , "male" , "web and app")

var std2 = new Std("sufiyan" , 33 , "male")
console.log("std1", std1)  
console.log("std2", std2)  
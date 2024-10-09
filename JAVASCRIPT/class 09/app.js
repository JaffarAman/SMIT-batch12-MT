// var cities = [];
// cities[0] = "Karachi";
// cities[1] = "Multan";
// cities.length = 0;
// cities[0] = "bin";
// console.log(cities, "cities");

// var arr = ["apple" , "karachi"]
// var str = "saylani"
// console.log(str[2])
// console.log(str.length)
// var str = "Jaffar Aman";

// var str = "pakistani";
// console.log(str);
// var copy = str.slice(0, -1);
// console.log("copy", copy);
// var strCopy = str.slice(0, 3);
// console.log(strCopy);

// var str = "SaylaNi maSS it tRaining";
// var strUpper = str.toUpperCase()
// var strUpper = str.toLowerCase()

// document.write("<h1>" + str + "</h1>");
// document.write(`<h1> ${strUpper} </h1> `);
//
// document.write("1 \n 2 ");
// document.write("\n 2");
// var helloWorld

// var str = "saylAni";
// // var newStr = str.slice(0 , 1)
// var newStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log(newStr, "newStr");

// var firstLetter = str.slice(0, 1).toUpperCase();
// var otherLetters = str.slice(1).toLowerCase();
// // console.log("firstLetter", firstLetter);
// // console.log("otherLetters", otherLetters);
// var newStr = firstLetter + otherLetters;
// document.write(str , "<br />");
// document.write(newStr);

// var userCity = prompt("Enter Your city!").toLowerCase();
// var citiesCollection = ["lahore", "Karachi", "islamabad", "multan"];
// var isMatch = "no";

// for (var i = 0; i < citiesCollection.length; i++) {
//   //   console.log(citiesCollection[i]);
//   if (userCity === citiesCollection[i].toLowerCase()) {
//     isMatch = "yes";
//     alert("Welcome");
//     break;
//   }
// }

// if (isMatch == "no") {
//   alert("Not Found!");
// }

// var str = "The New Yorker magazine doesn't allow the phrase 'World War II'.  They say it should be 'the Second World War'. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers"

// var str = "saylani mass it training  saylani";
// // console.log(str.indexOf("saylani"));
// // console.log(str.lastIndexOf("i"));
// console.log(str.indexOf("i"));

// var citiesCollection = ["lahore", "karachi", "islamabad", "multan"];
// var indexNum = citiesCollection.indexOf("delhi");
// console.log("indexNum", indexNum);
// if (indexNum !== -1) {
//   alert("Welcome");
// } else {
//   alert("not found");
// }

// var arr = [1,30,500, 40]
// var temp = arr[0]
// for(var i = 0 ; i<arr.length;i++){
//     if(arr[i] < temp){
//         temp = arr[i]
//     }
// }

var str =
  "The New Yorker magazine the phrase World War II. They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers";

var indexNum = str.indexOf("World War II");
console.log(indexNum, "indexNum");
var firstPart = str.slice(0, indexNum);
var secondPart = str.slice(indexNum + 12);

console.log("firstPart", firstPart);
console.log("secondPart", secondPart);
console.log(firstPart + "the Second World War" + secondPart);

// console.log(str.indexOf("World War II"));
// var indexNum = str.indexOf("World War II");

// var firstPart = str.slice(0, indexNum);
// console.log("firstPart", firstPart);
// console.log("second part", str.slice(indexNum + 12));
// // console.log("first copy", str.slice(0, indexNum));

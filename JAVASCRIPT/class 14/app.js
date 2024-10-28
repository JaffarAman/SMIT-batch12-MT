// var userName = document.getElementById("userName");

// function submitForm() {
//   console.log("userName", userName.value);
// }

// function setvalueForm() {
//   console.log("userName", userName);
//     // userName.value = "SMIT"
//     userName.value = ""
//     console.log(userName.placeholder)
// }

// var para = document.getElementById("para");

// function getPara() {
//   console.log("para", para.innerHTML);
// }

// function setPara(){
//     para.innerHTML += "SMIT"
// }

function greet() {
  alert("HELLO WORLD");
}

function foo() {
  console.log("foo()");
}

// var carImg  = document.getElementById("carImg")
// function imageHandler() {
//   console.log("carImg" , carImg.src)
//     // carImg.src = "./images/car2.webp"
//     // carImg.src = "./images/car22.gif"
//     carImg.src = "./images/game2.gif"
// }

// function imageOutHandler() {
//     console.log("carImg" , carImg.src)
//       carImg.src = "./images/game1.png"
//   }

function inputFocus(inputElement) {
  //   console.log("inputFocus", inputElement);
  inputElement.style.color = "black";
  inputElement.style.backgroundColor = "lightgray";
}

function inputBlur(ele) {
  console.log("inputBlur()", ele.value.length);
    if(ele.value.length < 3){
        ele.style.backgroundColor = "red"
        // ele.style.backgroundColor = `1px solid ${color}`
    }

}
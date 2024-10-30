function foo() {
  console.log("foo");
}

function imgHandler(flag, ele) {
  //   console.log("imgHandler", flag, ele);
  if (flag == "in") {
    console.log("onMouseOver chala hai");
    ele.src = "./images/game2.gif";
  } else {
    console.log("onMouseOut chala hai");
    ele.src = "./images/game1.png";
  }
}

function inputFocus(inputEle) {
  //   console.log("inputFocus()", inputEle);
  //   inputEle.style.backgroundColor = "red";
  inputEle.style.outline = "none";
  inputEle.style.border = "1px solid green";
}

// function inputValidate(inputEle) {
//     // console.log(typeof inputEle.value)

//   var nameError = document.getElementById("nameError");
//   if (inputEle.value.length < 3) {
//     inputEle.style.outline = "none";
//     inputEle.style.border = "1px solid red";
//     nameError.style.display = "block";
//   } else {
//     inputEle.style.border = "1px solid green";
//     nameError.style.display = "none";
//   }
// }

function inputValidate(inputEle) {
  // console.log(typeof inputEle.value)
  var nameError = document.getElementById("nameError");

  if (inputEle.value.length < 3) {
    inputEle.style.outline = "none";
    inputEle.style.border = "1px solid red";
    nameError.style.display = "block";
    nameError.innerHTML = "Enter Correct name!";
  } else {
    inputEle.style.border = "1px solid green";
    nameError.style.display = "none";
  }
}

function formSubmitted() {
  var input = document.getElementById("input");
  var nameError = document.getElementById("nameError");
  if (input.value.length < 3) {
    input.style.outline = "none";
    input.style.border = "1px solid red";
    nameError.style.display = "block";
    nameError.innerHTML = "Enter Correct name!";
  } else {
    nameError.innerHTML = "FORM SUMITTED!";
    nameError.style.display = "block";
    nameError.style.color = "green";
  }
}

function imgSizeHandler() {
  var carImage = document.getElementById("carImage");
  console.log(carImage);

  carImage.className += " bigImg";
}

var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++) {
  // paras[i].style.color = "red"
  if ((i + 1) % 2 === 0) {
    paras[i].style.color = "red";
  }else{
    paras[i].style.color = "pink";

  }
}

// console.log(paras[0] , "paras")
// console.log(paras[3] , "paras")

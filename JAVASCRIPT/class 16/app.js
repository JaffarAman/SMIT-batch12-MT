function paraHandler(btnType) {
  console.log("btnType", btnType);
  var heading = document.getElementById("heading");
  //   console.log("paraHandler()", heading.className);
  //   heading.className += " bigText";
  //   console.log(heading.classList);

  //   heading.classList.remove("smallText")
  //   heading.classList.add("bigText");
  // heading.classList.replace("smallText" , "bigText")

  // if(btnType == "big"){
  //     // heading.classList.replace("smallText", "bigText");
  //     heading.classList.remove("smallText")
  //     heading.classList.add("bigText")
  // }else{
  //     heading.classList.add("smallText")
  //     heading.classList.remove("bigText")
  // }

  // single button
}

function toggleHandler() {
  var heading = document.getElementById("heading");
  // console.log("heading"  ,heading.classList.contains("smallText"))
  var smallTxtContain = heading.classList.contains("smallText");
  console.log(smallTxtContain, "smallTxtContain");

  if (smallTxtContain) {
    heading.classList.replace("smallText", "bigText");
  } else {
    heading.classList.replace("bigText", "smallText");
  }
}

var textNumber = document.getElementById("textNumber");
var para = document.getElementById("para");

function fontSizeCounter(type) {
  var counter = textNumber.innerHTML;
  if (type == "minus") {
    // textNumber.innerHTML -= 1
    textNumber.innerHTML = --counter;
  } else {
    textNumber.innerHTML = ++counter;
  }

  para.style.fontSize = `${counter}px`;
}

function colorChange(input) {
  console.log("colorChange", input.value);
  para.style.color = input.value;
}
function boldPara() {
  para.style.fontWeight = "bold";
}

function ItalicPara() {
  para.style.fontStyle = "italic";
}

function paraPosition() {
  para.style.position = "relative";
  para.style.top = "20px";
}


// var btns = document.getElementsByTagName("button")
// console.log(btns[4])

// console.log(document)

// var parent = document.getElementById("parent")
// // console.log("parent" , parent.getElementsByTagName("p"))

// parent > p


var a = document

// junk artifacts => #text
// console.log(document.childNodes[1].childNodes[1])



var a = document
console.log(a.childNodes[1].childNodes[2].childNodes[17].style.color = 'red')
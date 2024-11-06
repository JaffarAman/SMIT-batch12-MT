// var a = document.childNodes[1].childNodes[2].childNodes[1]
// console.log(a.childNodes)

// a.style.color = "red"
// a.style.backgroundColor = "orange"

// console.log(document.childNodes[1].childNodes[1])

// var parent = document.getElementById("parent")
// console.log("parent" , parent.childNodes[0].style.color = "red")

var parent = document.getElementById("parent");
// console.log(parent.childNodes)
// console.log(parent.children)
// console.log(parent.firstChild)
// console.log(parent.lastChild)

// var para1 = parent.firstElementChild
// var para1 = parent.firstElementChild
// console.log(para1.nextElementSibling)

// console.log(para1.nextSibling.nextSibling)
// console.log(para1.previousSibling)

// var para3 = document.querySelector("#para3")
// console.log(para3.parentNode)

var input = document.querySelector("#input");
// console.log(input.hasAttribute("type"))
// console.log(input.getAttribute("type"))
// console.log(input.hasAttribute("placeholder"))
// console.log(input.setAttribute("placeholder" , "Enter name"))

// var btn = document.querySelector("#btn");
// btn.setAttribute("onclick", "foo(this)");
// btn.setAttribute("onmouseover", "foo(this)");

// function foo(e) {
//   console.log("foo" , e);
// }


// console.log("btn" , btn.attributes.length)
var parent = document.getElementById("parent")
var h1Element = document.createElement("h1")
var para = document.createElement("p")
// var h1text = document.createTextNode("HELLO CLASS!")
// h1Element.appendChild(h1text)

h1Element.innerHTML = "HELLO WORLD"
para.innerHTML = "HELLO CLASS"
// console.log("h1Element" , h1Element.nodeType)
console.log("h1Element" , h1Element.nodeName)
console.log("para" , para)
parent.append(h1Element)
parent.append(para)

// console.log("h1text" , h1text)

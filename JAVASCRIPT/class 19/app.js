var inputNote = document.querySelector("#inputNote");
var parent = document.querySelector("#parent");
// console.log("parent", parent);

function deleteHandler(ele) {
  var notesArr = JSON.parse(localStorage.getItem("notes"));
  var index = ele.id;
  notesArr.splice(index, 1);
  console.log("checking,.....", ele.id, notesArr);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  renderUI();
  // ele.parentNode.parentNode.remove();
}

function editHandler(ele) {
  var indexNumber = ele.id;
  console.log(indexNumber);
  var notesArr = JSON.parse(localStorage.getItem("notes"));
  var editPrompt = prompt("Enter edit value");
  notesArr.splice(indexNumber, 1, editPrompt);
  console.log("notesArr", notesArr);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  renderUI();

  // ele.parentNode.parentNode.firstChild.textContent = editPrompt;
}
var notesArr = [];

// 2nd way
function addNote() {
  // basic input validation
  if (inputNote.value.length < 3) {
    alert("Enter correct notes...");
    return;
  }
  var getNotes = localStorage.getItem("notes");
  console.log(getNotes, "getNotes");

  //first time note create horhy hai
  if (getNotes == null) {
    var tempArr = [inputNote.value];
    localStorage.setItem("notes", JSON.stringify(tempArr));
  } else {
    // console.log("else value already hai")
    var tempArr = JSON.parse(getNotes);
    tempArr.unshift(inputNote.value);
    localStorage.setItem("notes", JSON.stringify(tempArr));
  }
  renderUI();
  inputNote.value = "";

  // notesArr.unshift(inputNote.value); //note arr collection
  // var notesArrStr = JSON.stringify(notesArr); // arr convert into stringify
  // console.log(notesArrStr, "notesArrStr");

  return;
  // localStorage.setItem("notes", notesArrStr); // stringify arr save into LocalStorage
  // renderUI();
  // inputNote.value = "";
}

function renderUI() {
  var notesArr = JSON.parse(localStorage.getItem("notes"));
  // console.log("notesArr", notesArr);

  var cardsUI = "";

  for (var i = 0; i < notesArr.length; i++) {
    cardsUI += `<div class="alert alert-primary d-flex justify-content-between" role="alert">
      ${notesArr[i]}
       <div>
           <i onclick="editHandler(this)" id=${i} class="fa-solid btn fa-pen-to-square"></i>
           <i onclick="deleteHandler(this)" id=${i} class="fa-solid btn fa-trash"></i>
       </div>
     </div>`;
  }

  parent.innerHTML = cardsUI;
}

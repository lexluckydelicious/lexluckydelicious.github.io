//variables for project

/* 
  these variables are to hold form input
*/

let submit = "button";
let topInput = "textInput";
let bottomInput = "textInput";
let topText = "valueOfInput";
let bottomText = "valueOfInput";
let picture = "urlInput";
let pictureUrl = "valueOfInput";

/*
  these variables are for the translation of input to displayed html
*/
let memeDiv = "div"
let newMeme = "img";
let deleteButton = "button";
let topLet = "div";
let bottomLet = "div";
/*
this is the container for the memes
*/

let memeField = "div";

/*
and one to hold event.target for deletion
*/
let tagTarget = "event.target";

//validate function
function validateInput() {
  topInput = document.querySelector("#top");
  bottomInput = document.querySelector("#bottom");
  picture = document.querySelector("#image");
  memeField = document.querySelector("#memeField");
  topText = topInput.value;
  bottomText = bottomInput.value;
  pictureUrl = picture.value;

  if ((topText === "") || (bottomText === "") || (pictureUrl === "")) {
    alert("Please input text");
    valid = false;
    return;
  }

  else {
    valid = true;
}
}

//create image
function createImg() {
  memeDiv = document.createElement("div");
  newMeme = document.createElement("img");
  newMeme.classList.add("meme");
  memeDiv.classList.add("container");
  newMeme.src = pictureUrl;
  memeDiv.append(newMeme);
  }

//function for adding the text
function addText() {

  topLet = document.createElement("div");
  topLet.classList.add("memeTextTop");
  topLet.innerText = topText;
  memeDiv.append(topLet);

  bottomLet = document.createElement("div");
  bottomLet.classList.add("memeTextBottom");
  bottomLet.innerText = bottomText;
  memeDiv.append(bottomLet);
}

//and adds it to a section for the final memes
function addToMemeField() {
  memeField = document.getElementById("memeField");
  memeField.appendChild(memeDiv);
}



//adds a delete button to the meme so it can be removed
function addDeleteButton() {
  deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerHTML = "X";
  memeDiv.append(deleteButton);
}

//when the button is clicked on

function deleteListener() {
memeDiv.addEventListener("click", function(event) {
  targetTag = event.target.tagName.toLowerCase();
     if (targetTag === "button") {
    event.target.parentNode.remove();
  }
});
}

//with everything handled by a click function
function createTheMeme() {
  event.preventDefault();

  validateInput();
  if (!valid) {
    return;
}
else{
  createImg();
  addText();
  addToMemeField();
  addDeleteButton();

  /* 
  here i tried to use variations of
        memeDiv.onload(deleteListener);
  as a way to have it only start listening for the button after the new meme is loaded 
  but i kept getting "memeDiv.onload is not a funciton at..."  and am moving on
  */

  deleteListener();
  valid = null;
  resetInput();
}
}

//then resets our input for validation
function resetInput() {
  topInput.value = "";
  bottomInput.value = "";
  picture.value = "";

}

//with an event listener attached to the submit button 
function listenForSubmit() {
  submit = document.getElementById("submit");
  submit.addEventListener("click", createTheMeme);
}

//when the DOM is loaded
window.addEventListener("DOMContentLoaded", (event) => {
  listenForSubmit();
})


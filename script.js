
// variable declaration

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var removeButton;

// function declaration

function inputLength() {
	return input.value.length;
}

// Event listener add  to an array

function addEventListenerToAnArray(array, start) {
	array.forEach(function(items, i) {
	if (i >= start) {
	array[i].addEventListener("click", function() {textOrButton(event, i)});
	}})
}

// Array creator for buttons inside <li>

function childrenArray(array) {
	let childrens = [];
	if (array.length > 0) {
	array.forEach(function(item, i){
	childrens[i] = li[i].children[0];
	return removeButton = childrens;
 		})
	} else 
	return removeButton = [];
}
// after event functions

function addListAfterClick(event) {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(event) {
		if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function textOrButton(event, i) {
	if (event.target === removeButton[i]) {
		deleteListElements(i);
	} else if (event.target === li[i]) {
		toggleItem(i);
	}
}

function toggleItem(i) {
	li[i].classList.toggle("done");
}


// list modifier functions

function createListElement() {
	var newli = document.createElement("li");
	var removeButton = document.createElement("button");
	removeButton.appendChild(document.createTextNode("Remove"));
	newli.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(newli);
	ul.lastChild.appendChild(removeButton);
	input.value = "";
	updateListAfterAdd();
}

function deleteListElements(i) {
	li[i].remove(i);
	updateListAfterRemove(i);
}

// updates functions

function updateListAfterAdd() {
	updateArrays();
	let i = li.length - 1;
	ul.lastChild.addEventListener("click", function(){textOrButton(event, i)})
	
}

function updateListAfterRemove(i) {
	updateArrays();
	addEventListenerToAnArray(li, i)
}

function updateArrays() {
	li = document.querySelectorAll("li");
	childrenArray(li);
}


//callings

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
addEventListenerToAnArray(li, 0);
childrenArray(li);
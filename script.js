/* 
variable declarations
*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listElements = document.querySelectorAll("li");
var listElementsChildren = [];

/*
 functions declarations
*/

function inputLength() {
	return input.value.length;
}

function listLastIndex() {
	return listElements.length - 1;
}
/*   Arrays Creators */
function childrenArray(array) {
	array.forEach(function(item, i){
	listElementsChildren[i] = listElements[i].children[0];
 	})
}

function createListElement() {
	var newli = document.createElement("li");
	var newbutton = document.createElement("button")
	newli.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(newli);
	updateUl()
	newbutton.appendChild(document.createTextNode("remove"));
	listElements[listLastIndex()].appendChild(newbutton);
	let lastIndex = listLastIndex()
	listElements[lastIndex].children[0].addEventListener("click", function() {removeElement(lastIndex)})
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
	createListElement();
	}
}
function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
	}
}

function addEventListenerArray(array) {
	array.forEach(function(items, i) {
		items.addEventListener("click", function() {toggleItem(i)})
	}
)	
}

function addEventListenerArrayChildren(array) {
	array.forEach(function(items, i) {
		items.addEventListener("click", function() {removeElement(i)})
	}
)	
}

function toggleItem(index) {
	listElements[index].classList.toggle("done");
}

function updateUl() {
	listElements = document.querySelectorAll("li");
	let lastIndex = listLastIndex();
	childrenArray(listElements);
	listElements[listLastIndex()].addEventListener("click", function() {toggleItem(lastIndex)})
}

function removeElement(i) {
 	listElements[i].remove(i);
}
/* 
Events listener
*/

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
addEventListenerArray(listElements);
childrenArray(listElements);
addEventListenerArrayChildren(listElementsChildren);
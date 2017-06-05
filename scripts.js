var buttonElements = document.getElementsByClassName('button');
var numberOfElements = buttonElements.length;

for (var i = 0; i<numberOfElements; i++) {
	alert(buttonElements[i].innerText);
}

var buttonElements = document.getElementsByClassName('button');
var numberOfElements = buttonElements.length;

var siblings = buttonElements.nextElementSibling;

for (var i = 0; i<numberOfElements; i++) {
	alert(buttonElements[i].innerText);
}

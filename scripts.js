var buttonElements = document.getElementsByClassName('button');
var numberOfElements = buttonElements.length;

for (var i = 0; i<numberOfElements; i++) {
	alert(buttonElements[0].innerText);
	alert(buttonElements[1].innerText);
	alert(buttonElements[2].innerText);
	alert(buttonElements[3].innerText);
	break;
}

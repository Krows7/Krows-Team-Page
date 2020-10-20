navClosed = true;

function openNav() {

	resize(true);
}

function closeNav() {

	resize(false);
}

function switchNav() {

	resize(navClosed);
}

function resize(closed) {

	navClosed = !closed;

	document.getElementById("sidenav").style.width = navClosed ? "0px" : "100%";
}

function setVisible(clazz) {

	var element = document.getElementsByClassName(clazz)[0];
	element.style.display = other(element.style.display, "block", "none");
}

function releaseList(e, clazz) {

	setVisible(clazz);

	e.getElementsByTagName('i')[0].classList.toggle("rotated");
}

function other(value, f, s) {

	return value == f ? s : f;
}
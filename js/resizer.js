navClosed = true;

function switchNav() {

	navClosed = !navClosed;

	document.getElementById("sidenav").style.width = navClosed ? "0px" : "100%";
}

function releaseList(e, id) {

	coverElement(id);

	e.getElementsByTagName('i')[0].classList.toggle("rotated");
}

function coverElement(id) {

	var e = document.getElementById(id);

	e.style.height = e.clientHeight ? 0 : e.children[0].clientHeight + "px";
}
navClosed = true;

function switchNav() {

	navClosed = !navClosed;

	document.getElementById("sidenav").style.width = navClosed ? "0px" : "100%";
}

function releaseList(e, clazz) {

	var element = document.getElementById(clazz);

	if(element.clientHeight) element.style.height = 0;
	else element.style.height = element.children[0].clientHeight + "px";

	e.getElementsByTagName('i')[0].classList.toggle("rotated");
}
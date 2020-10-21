var header;
var sticky;

window.onscroll = () => setSticky();
window.onload = () => {

	header = document.getElementById("header");

	sticky = header.offsetTop;

	setSticky();
};

function setSticky() {

	if(!header) return;
	if(window.pageYOffset > sticky) header.classList.add("sticky");
	else header.classList.remove("sticky");
}
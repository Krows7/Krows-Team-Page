var header;
var sticky;
var menu;
var body;

window.onscroll = () => setSticky();

window.addEventListener("data-load", e => {

	header = document.getElementById("header");

	sticky = header.offsetTop;

	setSticky();

	body = document.body;
	
	menu = document.querySelector("#theme-toggle");
	menu.addEventListener("change", e => {
		
		utils.changeTheme(e.target.checked ? "dark" : "light");
	});
});

function setSticky() {

	if(!header) return;
	if(window.pageYOffset > sticky) header.classList.add("sticky");
	else header.classList.remove("sticky");
}
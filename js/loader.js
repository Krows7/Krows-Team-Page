var loadList = [];
var linkList = [];

function load(url, callback) {

	loadList.unshift([url, callback]);
}

function insert(url, callback) {

	loadList.push([url, callback]);
}

function load0(e) {

	if(!e) {

		window.dispatchEvent(new CustomEvent("data-load"));
		
		return;
	}

	var script = document.createElement("script");
	script.src = e[0];
	script.onload = () => {

		if(e[1] && e[1]()) return;

		load0(loadList.pop());
	}

	document.head.appendChild(script);
}

function flush() {

	loadStyle0(linkList.pop());
}

function loadStyle(url, callback) {

	linkList.unshift([url, callback]);
}

function loadStyle0(e) {

	if(!e) {

		load0(loadList.pop());

		return;
	}

	var link = document.createElement("link");
	link.href = e[0];
	link.onload = () => {

		if(e[1]) e[1]();

		loadStyle0(linkList.pop());
	};
	link.rel = "stylesheet";
	link.type = "text/css";

	document.head.appendChild(link);
}

loadStyle("/css/style.css");
loadStyle("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");
loadStyle("/css/header.css");
loadStyle("/css/content.css");
loadStyle("/css/footer.css");
loadStyle("/css/blog.css");

load("/js/cookies.js");
load("/js/main.js");
load("/js/jquery-3.5.1.min.js", () => insert("/js/template_loader.js", () => true));
load("https://kit.fontawesome.com/85ca5f4dd1.js");
load("/js/resizer.js");
load("/js/header_script.js");
load("/js/footer.js");

flush();
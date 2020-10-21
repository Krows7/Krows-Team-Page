function load(url, callback) {

	var script = document.createElement("script");
	script.onload = callback;
	script.src = url;

	document.head.appendChild(script);
}

function loadStyle(url, callback) {

	var link = document.createElement("link");
	link.onload = callback;
	link.href = url;
	link.rel = "stylesheet";
	link.type = "text/css";

	document.head.appendChild(link);
}

loadStyle("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");
loadStyle("/css/style.css");
loadStyle("/css/header.css");
loadStyle("/css/content.css");
loadStyle("/css/footer.css");

load("/js/jquery-3.5.1.min.js", () => load("/js/template_loader.js"));
load("https://kit.fontawesome.com/85ca5f4dd1.js");
load("/js/resizer.js");
load("/js/header_script.js");
load("/js/ul-animation.js");
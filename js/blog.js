window.addEventListener("data-load", e => {
	
	input = document.querySelector("textarea");
	input.addEventListener("input", el => addCookie("blog_text", el.target.value));
	input.value = getCookie("blog_text");
});
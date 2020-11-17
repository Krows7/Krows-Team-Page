$(function() {
	
	$("#header").load("/templates/header.html");
	$("#footer").load("/templates/footer.html");
	$("body").css("min-height", window.innerHeight);
}).ajaxComplete(() => flush());
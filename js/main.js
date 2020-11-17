var utils = {

	changeTheme: function(theme) {

		// jQuery.each($(".colorable"), (i, el) => {

		// 	e = $(el);

		// 	var attr = el.getAttribute(theme).split(" ");

		// 	e.css("background-color", attr[0]);

		// 	if(attr[1]) e.css("color", attr[1]);
		// });

		document.querySelectorAll(".colorable").forEach(e => {

			var attr = e.getAttribute(theme).split(" ");

			e.style.backgroundColor = attr[0];

			if(attr[1]) e.style.color = attr[1];
		});
		document.querySelector("#theme-toggle").checked = theme == "dark";
		document.body.dispatchEvent(new CustomEvent("theme-change", {

			detail: {

				theme: theme
			}
		}));
	},
	other: function(v, f, s) {

		return v == f ? s : f;
	}
};

window.addEventListener("data-load", e => {
	
	// document.body.classList.add("colorable");
	// document.body.setAttribute("light", "white black");
	// document.body.setAttribute("dark", "black white");

	var body = $("body");
	body.addClass("colorable");
	body.attr("light", "white black");
	body.attr("dark", "black white");
	body[0].addEventListener("theme-change", e => {

		addCookie("theme", e.detail.theme);
	});

	utils.changeTheme(getCookie("theme") || "light");
});

loadCookies();
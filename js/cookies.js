var cookieMap = new Map();

const CLEAR_COOKIE_SECRET = "expires=Thu, 01-Jan-1970 00:00:01 GMT";

function loadCookies() {

	if(document.cookie.length == 0) return;

	for(var entry of document.cookie.split(";")) {

		var e = entry.trim().split("=");
		cookieMap.set(e[0], e[1]);
	}
};

function flushCookies() {

	var r = "";

	for(var e of cookieMap.entries()) {

		r += e[0] + "=" + e[1] + "; ";
	}

	document.cookie = r;
}

function addCookie(name, value) {

	cookieMap.set(name, value);

	writeRawCookie(name, encodeURIComponent(value));
}

function writeRawCookie(name, raw) {

	document.cookie = name + "=" + raw;
}

function clearCookie(name) {

	writeRawCookie(name, "=;" + CLEAR_COOKIE_SECRET);
}

function clearCookies() {

	for(var e of cookieMap.entries()) clearCookie(e[0]);
}

function getCookie(name) {

	var value = cookieMap.get(name);

	return value ? decodeURIComponent(value) : "";
}
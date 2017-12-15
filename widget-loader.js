 (function main() {
	var head = document.querySelector("head");
	var link = document.createElement("link");
	link.rel = "import";
	link.href = "timer.html";

	var native_import_support = "import" in link;

	if (!native_import_support) {
		var script = document.createElement("script");
		script.src = "webcomponents-lite.min.js";
		head.appendChild(script);
	}

	head.appendChild(link);
 })();

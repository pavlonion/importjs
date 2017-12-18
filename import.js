(function main() {

	function url_arg(url, key) {
		var matches = url.match(new RegExp("[?&]" + key + "=([^&$]+)"));
		return matches && matches.length > 0 ? matches[1] : "";
	}

	var head = document.querySelector("head");
	var link = document.createElement("link");
	link.rel = "import";

	function startup(script_src) {
		link.href = url_arg(script_src, "href");
		link.async = true;
		head.appendChild(link);
	}

	var native_import_support = "import" in link;

	if (native_import_support) {
		startup(document.currentScript.src);

	} else if (typeof HTMLImports == "object") {
		startup(document._currentScript.src);

	} else {
		var script = document.createElement("script");
		script.src = "webcomponents-lite.min.js";
		script.async = true;
		script.addEventListener("load", function() { 
			startup(document._currentScript.src);			
		});
		head.appendChild(script);
	}
})();

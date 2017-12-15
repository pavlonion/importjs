(function main() {
	function url_args(url) {
		var a = document.createElement("a");
		a.href = url;
		var list = a.search.substr(1).split("&");
		var args = {};

		for (var i = 0, l = list.length; i < l; i++) {
			var pair = list[i].split("=");
			var key = pair[0];
			var value = decodeURI(pair[1] || "");
			var type = typeof args[key];

			if (type == "undefined") {
				args[key] = value;
			} else if (type == "string") {
				args[key] = [args[key]].concat(value);
			} else {
				args[key].push(value);
			}
		}

		return args;
	}

	var head = document.querySelector("head");
	var link = document.createElement("link");
	link.rel = "import";

	function startup(script_src) {
		var args = url_args(script_src);
		link.href = args.href;
		link.async = true;
		head.appendChild(link);
	}

	var native_import_support = "import" in link;

	if (!native_import_support) {
		var script = document.createElement("script");
		script.src = "webcomponents-lite.min.js";
		script.async = true;
		script.addEventListener("load", function() { 
			startup(document._currentScript.src);			
		});
		head.appendChild(script);

	} else {
		startup(document.currentScript.src);
	}
})();

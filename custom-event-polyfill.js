if (typeof window.CustomEvent != "function") {
	window.CustomEvent = function(type, params) {
		var default_params = { bubbles: false, cancelable: false, detail: undefined };

		for (var key in default_params) {
			if (typeof params[key] == "undefined") {
				params[key] = default_params[key];
			}
		}

		var event = document.createEvent("CustomEvent");
		event.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
		return event;
	}

	window.CustomEvent.prototype = Object.create(window.Event.prototype);
}

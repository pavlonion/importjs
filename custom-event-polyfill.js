if (typeof CustomEvent != "function") {
	CustomEvent = function(type, params) {
		var default_params = { bubbles: false, cancelable: false, detail: undefined };

		if (typeof params != "object") {
			params = default_params;

		} else {
			for (var key in default_params) {
				if (typeof params[key] == "undefined") {
					params[key] = default_params[key];
				}
			}
		}

		var event = document.createEvent("CustomEvent");
		event.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
		return event;
	}

	CustomEvent.prototype = Object.create(Event.prototype);
}

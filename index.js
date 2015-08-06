var worque = require('worque');

function create (options) {
	var client = new worque.Client(options);

	function subscribe (name, handler, options) {
		var concurrency = options && options.concurrency || 1;
		return client.subscribe(name, concurrency, handler);
	}

	function publish (name, message) {
		return client.publish(name, message);
	}

	return {
		subscribe: subscribe,
		publish: publish
	};
}

module.exports = create;

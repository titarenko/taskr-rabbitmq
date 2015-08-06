var medium = require('../');
var should = require('should');

describe('taskr-rabbitmq', function () {
	it('should allow receive published message', function (done) {
		var client = medium({ host: 'localhost' });
		client.subscribe('q1', function (p) {
			p.should.eql(1);
			done();
		});
		client.publish('q1', 1);
	});
});

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('Should exists', () => {
		expect(Timer).toExist();
	});

	it('should start timer on started status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer />);

		timer.handleStatusChange('started');
		expect(timer.state.count).toBe(0);

		setTimeout(() => {
			expect(timer.state.countTimer).toBe('started');
			expect(timer.state.count).toBe(1);

			done();
		}, 1001);
	});

	it('should pause timer on paused status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer />);
		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('paused');
		expect(timer.state.count).toBe(10);

		setTimeout(() => {
			expect(timer.state.countTimer).toBe('paused');
			expect(timer.state.count).toBe(10);

			done();
		}, 1001);
	});

	it('should stopped timer on stopped status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer />);
		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('stopped');
		expect(timer.state.count).toBe(0);

		setTimeout(() => {
			expect(timer.state.countTimer).toBe('stopped');
			expect(timer.state.count).toBe(0);

			done();
		}, 1001);
	});

});
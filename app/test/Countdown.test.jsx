const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {

	it('Should exist', () => {
		expect(Countdown).toExist();
	});
});

describe('handleSetCountdown', () => {

	it('Should set state to started and countdown', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(10);

		expect(countdown.state.count).toBe(10);
		expect(countdown.state.countdownStatus).toBe('started');

		setTimeout(() => {
			expect(countdown.state.count).toBe(9);
			done();
		}, 1001);
	});

	it('Should never set count less than zero', () => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(1);

		setTimeout(() => {
			expect(countdown.state.count).toBe(0);
		}, 3001);
	});

	it('Should paused countdown on paused status', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(3);
		countdown.handleStatusChange('paused');

		setTimeout(() => {
			expect(countdown.state.count).toBe(3);
			expect(countdown.state.countdownStatus).toBe('paused');
			done();
		});
	});

	it('Should stop countdown on stop status', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(0);
		countdown.handleStatusChange('stopped');

		setTimeout(() => {
			expect(countdown.state.count).toBe(0);
			expect(countdown.state.countdownStatus).toBe('stopped');
			done();
		});
	});
});




// describre('', ()=>{
// 	it('', () => {});
// });
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

	it('Should set state to started and countdown', () => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(10);

		expect(countdown.state.count).toBe(10);
		expect(countdown.state.countDownStatus).toBe('started');

		setTimeout(() => {
			expect(countdown.state.count).toBe(9);
		}, 1001);
	});

	it('Should never set count less than zero', () => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(1);

		setTimeout(() => {
			expect(countdown.state.count).toBe(0);
		}, 3001);
	});
});




// describre('', ()=>{
// 	it('', () => {});
// });
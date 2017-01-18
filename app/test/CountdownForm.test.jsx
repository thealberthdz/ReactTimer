const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {

	it('should exist', () => {
		expect(CountdownForm).toExist();
	});

	it('should call onSetCountDown if valid seconds entered', () => {
		var spy = expect.createSpy();
		var countForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countForm));

		countForm.refs.seconds.value = '109';
		TestUtils.Simulate.submit($el.find('form')[0]);
		
		expect(spy).toHaveBeenCalledWith(109);

	});

	it('should not call onSetCountdown if invalid seconds entered', () => {
		var spy = expect.createSpy();
		var countForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countForm));

		countForm.refs.seconds.value = 'aasd##';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});

});
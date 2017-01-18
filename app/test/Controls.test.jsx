const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {

	it('Should exist', () => {
		expect(Controls).toExist();
	});
});

describe('Render', () => {

	it('Should render paused when is starting', () => {
		var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
		var $el = $(ReactDOM.findDOMNode(controls));
		var $pauseButton = $el.find('button:contains(Pause)');

		expect($pauseButton.length).toBe(1);
	});

	it('Should render start when paused', () => {
		var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
		var $el = $(ReactDOM.findDOMNode(controls));
		var $startButton = $el.find('button:contains(Start)');

		expect($startButton.length).toBe(1);
	});
});



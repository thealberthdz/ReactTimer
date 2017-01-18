const React = require('react');
const Clock = require('Clock');

const Countdown = React.createClass({
	render: function(){
		return(
			<div>
				<h2>Countdown</h2>
				<Clock totalSeconds = {200} />
			</div>
		);
	}
});

module.exports = Countdown;
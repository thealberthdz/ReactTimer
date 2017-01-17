const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
	render: function(){
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Timer App</li>
						<li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
						<li><Link to="/Countdown" activeClassName="active-link">Countdown</Link></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text">Created by<a href="https://www.google.com" target="_blank"> Alberto</a></li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Nav;
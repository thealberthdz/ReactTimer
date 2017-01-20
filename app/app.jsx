//dependencias
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

//variables locales
const Timer = require('Timer');
const Countdown = require('Countdown');
// Load foundation

$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<IndexRoute component={Timer} />
    	<Route path="Countdown" component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

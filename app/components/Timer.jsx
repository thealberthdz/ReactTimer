const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({
	getInitialState:function () {
		return{
			count: 0,
			countTimer: 'stopped'
		} 	
	},
	handleStatusChange: function(newStatus){
		this.setState({countTimer: newStatus});
	},
	componentDidUpdate: function(prevProps, prevState){
		if(this.state.countTimer !== prevState.countTimer){
			switch(this.state.countTimer){
				case 'started':
					this.startTimer();
				break;
				case 'stopped':
					this.setState({count:0});
					clearInterval(this.timer);
					this.timer = undefined;
				break;
				case'paused':
					clearInterval(this.timer)
	          		this.timer = undefined;
				break;
			}
		}
	},
	componentWillUnmount: function() {
		clearInterval(this.timer);
		this.timer = undefined;
	},
	startTimer: function(){
		this.timer = setInterval(()=>{
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount >=0 ? newCount : 0
			});
		}, 1000);
	},
	render:function(){
		var {count, countTimer} = this.state;
		return(
			<div>
				<h2 className="page-title">Timer component</h2>
				<Clock totalSeconds = {count} />
				<Controls countdownStatus={countTimer} onStatusChange={this.handleStatusChange}/>
			</div>
		);
	}
});

module.exports = Timer;
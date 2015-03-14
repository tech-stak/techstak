var React = require('react');
var Home = require('./Home');
var Router = require('react-router');
///DON'T QUITE UNDERSTAND WHY I'M PUTTING ROUTEHANDLER IN THE HTML??
var RouterHandler = Router.RouterHandler;
var SearchAngelList = require('./SearchAngelList');

var Main = React.createClass({
	render: function(){
		return (
			<div className="main-container">
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
						<SearchAngelList/>
					</div>
				</nav>
				<div className="container">
					<RouterHandler/>
				</div>
			</div>
		)
	}
});
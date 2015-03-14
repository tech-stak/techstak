var React = require('react');
//DO WHAT ARE THE GITHUBACTIONS AND SEARCHANGELLIST FOR??
var githubActions = require('../actions/githubActions');
var SearchAngelList = require('./SearchAngelList');

var Home = React.createClass({
	render: function(){
		return (
			<h2 className="text-center">
				Search by Technology Above
			</h2> 
		)
	}
});

module.exports = Home;

var React = require('react');
var Router = require('react-router');
var favoritesStore = require('../stores/FavoritesStore');
var Left = require('./Github/Left');
var Middle = require('./Github/Middle');
var Favorites = require('./Favorites/Favorites');

var Profile = React.createClass({
	mixins: [ Router.State ],
	render: function(){
    var username = 'alexhawkins';
		return (
			<div className="row">
				<div className="col-md-4">
					<Left username={username}/>
				</div>
				// <div classname="col-md-4">
				// 	<Middle username={username}/>
				// </div>
				<div classname ="col-md-4">
					<Favorites username={username}/>
				</div>
			</div>
		)
	}
});

module.exports = Profile;
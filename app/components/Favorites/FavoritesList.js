var React = require('react');

var FavoritesList = React.createClass({
	render: function(){
		var favorites = this.props.favorites.map(function(favorite, index){
			return <li className="list-group-item" key={index}>{favorite}</li>
		});
		return (
			<ul className="list-group">
				{favorites}
			</ul>
		)
	}
});

module.exports = FavoritesList;
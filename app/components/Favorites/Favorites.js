var React = require('react');
var favoritesStore = require('../../stores/FavoritesStore');
var AddFavorite = require('./AddFavorite');
var FavoritesList = require('./FavoritesList');
var favoritesActions = require('../../actions/FavoritesActions');

var Favorites = React.createClass({
	getInitialState: function(){
		return {
			favorites: favoritesStore.getState().favorites
		};
	},
	componentWillReceiveProps: function(obj){
		favoritesActions.changeUser(obj.username);
	},
	componentDidMount: function(){
		favoritesActions.changeUser(this.props.username);
		favoritesStore.addChangeListener(this._onChange);	
	},
	componentWillUnmount: function(){
		favoritesStore.removeChangeListener(this._onChange);
	},
	render: function(){
		return (
			<div>
				<h3> Favorites for {this.props.username} </h3>
				<AddFavorite username={this.props.username} />
				<FavoritesList favorites={this.state.favorites} />
			</div>
		);
	},
	_onChange: function(){
		this.setState({
			favorites: favoritesStore.getState().favorites
		})
	}
});

module.exports = Favorites;
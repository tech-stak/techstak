var React = require('react');
var favoritesActions = require();
var favoritesStore = require();

var AddFavorite = React.createClass({
	handleSubmit: function(){
		////////FINISH	
	},
	render: function(){
		return (
			<div className="input-group cushion">
				<input type="text" ref="note" className="form-control" placeholder="Add to Favorites" />
				<span className="input-group-btn">
					<button type="btn btn-default" type="button" onClick={this.handleSubmit}>Add</button>
				</span>
			</div> 
		)
	}
});

module.exports = AddFavorite;

////WHATS A GENERAL RULE FOR DECIDING WHAT SHOULD BE CAPITALIZED??
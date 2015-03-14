var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants');
var firebaseUtils = require('../utils/firebaseUtils');

var favoritesActions = {
	addFavorite: function(favObj){
		AppDispatcher.handleAction({
			actionType: appConstants.ADD_FAVORITE,
			data: favObj.favorite
		});
		firebaseUtils.addFavorite(favObj);
	},
	deleteFavorite: function(favObj){
		AppDispatcher.handleAction({
			actionType: appConstants.DELETE_FAVORITE,
			data: favObj.favorite
		});
		firebaseUtils.deleteFavorite(favObj);
	},
	changeUser: function(username){
		firebaseUtils.homeInstance().child(username).on('value', function(snapshot){
			AppDispatcher.handleAction({
				actionType: appConstants.CHANGE_USER,
				data: {
					user: username,
					favorites: firebaseUtils.toArray(snapshot.val())
				}
			});
		});
	}
};

module.exports = favoritesActions;
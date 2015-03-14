var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants');
var firebaseUtils = require('../utils/firebaseUtils');

var favoritesActions = {
	addFavorite: function(favObj){
		AppDispatcher.handleAction({
			actionType: appConstants.ADD_FAVORITE,
			//////might not be favObj.favorite //////
			//////change to write to Firebase ///////
			data: favObj.favorite
		});
	},
	//////change to write to Firebase ///////
	deleteFavorite: function(favObj){
		AppDispatcher.handleAction({
			actionType: appConstants.DELETE_FAVORITE,
			data: favObj.XXXX
		});
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
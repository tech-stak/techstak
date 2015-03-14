var Firebase = require('firebase');
var appConstants = require('../constants/appConstants');

var firebaseUtils = {
	homeInstance: function(){
		return new Firebase(appConstants.FIREBASE_HOST);
	},
	addFavorite: function(favObj){
		this.homeInstance().child(favObj.user).push(favObj.favorite);
	},
	deleteFavorite: function(favObj){
		this.homeInstance().child(favObj.user).child('favorites').child(favObj.favorite).remove();
	},
	toArray: function(obj){
		var array = [];
		for(var key in obj){
			array.push(obj[key]);
		}
		return array;
	}
};

module.exports = firebaseUtils;
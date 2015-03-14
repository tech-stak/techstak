var Firebase = require('firebase');
var appConstants = require('../constants/appConstants');

//What will firebase look like after adding one favorite?
//What will firebase look like after adding one favorites?
//How do I delete from Firebase
var firebaseUtils = {
	homeInstance: function(){
		return new Firebase(appConstants.FIREBASE_HOST);
	},
	addFavorite: function(favObj){
		this.homeInstance().child(favObj.user).push(favObj);
	},
	///////////FINISH////////
	deleteFavorite: function(favObj){
		this.homeInstance().child(favObj.user).child('favorites').child(favObj.favToDelete).remove();
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
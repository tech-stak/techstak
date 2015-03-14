var Firebase = require('firebase');
var appConstants = require('../constants/appConstants');

var firebaseUtils = {
	homeInstance: function(){
		return new Firebase(appConstants.FIREBASE_HOST);
	},
	addFavorite: function(favObj){
		this.homeInstance().child(favObj.user).push(favObj.note);
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
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _state = {
  favorites: [],
  user: ""
};

var addFavorite = function(favorite){
	_state.favorites.push(favorite);
};

var chageUser = function(newUserObj){
	_state = {
		favorites: newUserObj.favorites,
		user: newUserObj.user
	};
};

// var deleteFavorite = function(favoriteToDelete){
	//COMPLETE		
// };

var favoritesStore = objectAssign({}, EventEmitter.prototype, {

});

AppDispatcher.register(function(payload){
  
  var action = payload.action;
  
  switch(action.actionType){
  
    case appConstants.XXXXX :
      
      break;
  
    case appConstants.XXXXX :
      
      break;
  
    default:
      return true;
  }
});

module.exports = favoritesStore;

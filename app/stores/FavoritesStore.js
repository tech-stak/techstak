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
///////////FINISH ////////
var deleteFavorite = function(objToDelete){
	//COMPLETE		
};

var favoritesStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {
    	this.on(CHANGE_EVENT, cb);
  	},
  	removeChangeListener: function(cb) {
    	this.removeListener(CHANGE_EVENT, cb);
  	},
  	getState: function(){
  		return _state;
  	};
});

AppDispatcher.register(function(payload){
  
  var action = payload.action;
  
  switch(action.actionType){
  
    case appConstants.ADD_FAVORITE :
      addFavorite(action.data);
      favoritesStore.emit(CHANGE_EVENT);
      break;
  
    case appConstants.DELETE_FAVORITE :
      deleteFavorite(action.data);
      favoritesStore.emit(CHANGE_EVENT);
      break;

  	case appConstants.CHANGE_USER :
      chageUser(action.data);
      favoritesStore.emit(CHANGE_EVENT);
      break;
  
    default:
      return true;
  }
});

module.exports = favoritesStore;

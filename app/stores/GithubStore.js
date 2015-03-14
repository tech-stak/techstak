var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _state = {
  user: '',
  bio: {}
};

var newUser = function(username) {
  _state.user = username;
};

var setBio = function(data) {
  _state.bio = data;
};

var githubStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getUser: function() {
    return _state.user;
  },
  getBio: function() {
    return _state.bio;
  }
});

module.exports = githubStore;

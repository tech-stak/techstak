var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _state = {
  jobs: []
};

var setJobs = function(data) {
  _state.jobs = data.jobs; //returns an array of jobs
};

var searchStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getJobs: function() {
    return _state.jobs;
  },
});

AppDispatcher.register(function(payload) {

  var action = payload.action;

  switch (action.actionType) {

    case appConstants.ANGEL_GET_JOBS:
      setJobs(action.data);
      searchStore.emit(CHANGE_EVENT);
      break;

    case appConstants.ANGEL_CHANGE_SEARCH:
      setJobs(action.data);
      searchStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = searchStore;

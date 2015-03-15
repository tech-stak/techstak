var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/AppConstants');
var angelListUtils = require('../utils/AngelListUtils');

var callback = function(response) {
  console.log('RESPONSE', response);
  AppDispatcher.handleAction({
    actionType: appConstants.ANGEL_GET_JOBS,
    data: response
  });
};

var searchActions = {
  getJobs: function(skillTagName) {
    angelListUtils.getJobs(skillTagName, callback);
  },
  changeSearch: function(skillTagName) {
    AppDispatcher.handleAction({
      actionType: appConstants.ANGEL_CHANGE_SEARCH,
      data: skillTagName
    });
  }
};

module.exports = searchActions;

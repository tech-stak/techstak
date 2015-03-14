var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/AppConstants');
var angelListUtils = require('../utils/angelListUtils');

var searchActions = {
  getJobs: function(skillTagName) {
    angelListUtils.getJobs(skillTagName)
      .then(function(response) {
        AppDispatcher.handleAction({
          actionType: appConstants.ANGEL_GET_JOBS,
          data: response.data
        });
      });
  },

  changeSearch: function(skillTagName) {
    AppDispatcher.handleAction({
      actionType: appConstants.ANGEL_CHANGE_SEARCH,
      data: skillTagName
    });
  }
};

module.exports = githubActions;

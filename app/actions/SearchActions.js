var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants');
var angelListUtils = require('../utils/angelListUtils');

var searchActions = {
  getJobs: function(skillTagName){
    angelListUtils.getJobs(skillTagName)
      .then(function(response){
        AppDispatcher.handleAction({
          actionType: appConstants.ANGEL_GET_JOBS,
          data: response.data
        });
      });
  },
  changeUser: function(username){
    AppDispatcher.handleAction({
      actionType: appConstants.GITHUB_CHANGE_USER,
      data: username
    });
  }
};

module.exports = githubActions;

var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var appConstants = require('../constants/appConstants');
var githubUtils = require('../utils/githubUtils');

var githubActions = {
	getUserBio: function(username){
		githubUtils.getBio(username)
			.then(function(response){
				AppDispatcher.handleAction({
					actionType: appConstants.GITHUB_USER_BIO,
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

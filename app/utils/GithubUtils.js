var appConstants = require('../constants/AppConstants');
var axios = require('axios');

var id = "5f6af7fbca524e718fe9";
var sec = "967d4b98d71c03529fa5d7271599a2b7e85bb380"
var param = "?5f6af7fbca524e718fe9=" + id + "&967d4b98d71c03529fa5d7271599a2b7e85bb380=" + sec;

var githubUtils = {
  getBio: function(username) {
    var url = "https://api.github.com/users/" + username + param;
    return axios.get(url);
  }

};

module.exports = githubUtils;

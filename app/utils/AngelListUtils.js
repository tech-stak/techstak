var appConstants = require('../constants/AppConstants');
var axios = require('axios');
var skillTags = require('./data/skills')

var token = "1dabacb9f74d9460d7125f2078864e18c34406939dbf5c12";
var param = "jobs?access_token=" + token;

var angelListUtils = {
  getJobs: function(skillTagName) {
    var skillTagID = skillTags[skillTagName];
    var url = "https://api.angel.co/1/tags/" + skillTagID + param;
    return axios.get(url);
  }
};

modules.exports = githubUtils;

var appConstants = require('../constants/AppConstants');
//var axios = require('axios');
var $ = require('jquery');
var skillTags = require('../data/skills')

var token = "1dabacb9f74d9460d7125f2078864e18c34406939dbf5c12";
var param = "jobs?access_token=" + token;

var angelListUtils = {
  getJobs: function(skillTagName, callback) {
    var skillTagID = skillTags[skillTagName];
    var angelListURL = "https://api.angel.co/1/tags/" + skillTagID + '/' + param;
    // return axios.get(url);
    return $.ajax({
      url: angelListURL,
      dataType: 'JSONP',
      error: function(error) {
        console.log("Error: ", error);
      },
      success: function(data) {
        callback(data);
      }
    });
  }
};

module.exports = angelListUtils;

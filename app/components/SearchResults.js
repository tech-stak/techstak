var React = require('react');
var Router = require('react-router');
var SearchStore = require('../stores/SearchStore');
var Results = require('../components/Search/Results');

var SearchResults = React.createClass({
  mixins: [ Router.State ],
  render: function(){
    var skilltag = this.getParams().skilltag;
    return (
      <Results skilltag={skilltag}/>
    )
  }
});

module.exports = SearchResults;
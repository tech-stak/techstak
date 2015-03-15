var React = require('react');
var Router = require('react-router');
var SearchStore = require('../stores/SearchStore');
var Results = require('../components/Search/Results');

var SearchResults = React.createClass({
  mixins: [ Router.State ],
  render: function(){
    var skilltag = this.getParams().skilltag;
    return (
      <div className="row">
        <div className="col-md-12">
          <Results skilltag={skilltag}/>
        </div>
      </div>
    )
  }
});

module.exports = SearchResults;
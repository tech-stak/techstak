var React = require('react');
var searchActions = require('../../actions/SearchActions');
var searchStore = require('../../stores/SearchStore');

var Results = React.createClass({
  getInitialState: function(){
    return {
      jobs: searchStore.getJobs()
    }
  },
  componentWillReceiveProps: function(obj){
    searchActions.getJobs(obj.skilltag); //figure this out
  },
  componentDidMount: function(){
    searchActions.getJobs(this.props.skilltag);
    searchStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    searchStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      jobs: searchStore.getJobs()
    });
  },
  render: function(){
    var jobs = this.state.jobs.map(function(job, index){
      return (
        <li className="list-group-item" key={index}>
          {job.startup.logo_url && <img src={job.startup.logo_url} />}
          {job.title && <h4>{job.title}</h4>}
        </li>
      )
    });
    return (
      <div>
        <h3> Jobs </h3>
        <ul className="list-group">
          {jobs}
        </ul>
      </div>
    )
  }
});

module.exports = Results;
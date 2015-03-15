var React = require('react');
var searchActions = require('../../actions/SearchActions');
var searchStore = require('../../stores/SearchStore');
var helpers = require('../../helpers/Helpers');

var Results = React.createClass({
  getInitialState: function(){
    return {
      jobs: searchStore.getJobs(),
      total: searchStore.getTotal(),
      skill: this.props.skilltag
    }
  },
  componentWillReceiveProps: function(obj){
    searchActions.getJobs(obj.skilltag); 
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
      jobs: searchStore.getJobs(),
      total: searchStore.getTotal(),
      skill: this.props.skilltag
    });
  },
  render: function(){
    var total = this.state.total;
    var skill = this.state.skill;
    var jobs = this.state.jobs.map(function(job, index){

      var logo = job.startup.logo_url;
      var name = job.startup.name;
      var jobTitle = job.title;
      var location = job.location;
      var companyURL = job.startup.angellist_url;
      var jobURL = job.angellist_url;
      var productDes = job.startup.product_desc;
      var jobDescription = job.description;
      var salaryMin = helpers.abbrNum(job.salary_min, 0);
      var salaryMax = helpers.abbrNum(job.salary_max, 0);
      var equityMin = job.equity_min;
      var equityMax = job.equity_max;
      var skills = job.tags.map(function(tag, index){
        if(tag.tag_type === 'SkillTag')
          return tag.displayName;
      }).join(', ');
      return (
        <div className="item" key={index}>
          <div className="box-shadow well"> 
            <a href={jobURL && jobURL}>
              <img src={logo && logo} className="img-thumbnail company-logo" alt={name && name} />
            </a>
              <h2>{name && name}</h2>
              <h4>{jobTitle && jobTitle}</h4>
              <h5 className>COMPENSATION</h5>
              <p>${salaryMin} - ${salaryMax} Salary<br/>
                  {equityMin}% - {equityMax}% Equity
              </p>
              <h5 className>LOCATION</h5>
              <p>{location}</p>
          </div>
        </div>
      )
    });

    return (
      <div className="row">
        <h3> Companies hiring for #{skill}: {total}</h3>
          {jobs}
      </div>
    )
  }
});

module.exports = Results;
var React = require('react');
var Router = require('react-router');

var SearchAngelList = React.createClass({
  mixins: [Router.Navigation],
  handleSubmit: function(){
    var skilltag = this.refs.skilltag.getDOMNode().value;
    this.refs.username.getDOMNode().value = ''
    this.transitionTo('search', {skilltag: skilltag});
  },
  render: function(){
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="skilltag" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Technologies</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SearchAngelList;
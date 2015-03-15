var React = require('react');
var Router = require('react-router');

var SearchAngelList = React.createClass({
  mixins: [Router.Navigation],
  handleSubmit: function(){
    var skilltag = this.refs.skilltag.getDOMNode().value;
    this.refs.skilltag.getDOMNode().value = ''
    this.transitionTo('search', {skilltag: skilltag});
  },
  render: function(){
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" ref="skilltag"/>
              <span className="input-group-btn">
               <button type="submit" className="btn btn-default" type="button">Go!</button>
              </span>
          </div>
        </form>
    )
  }
});

module.exports = SearchAngelList;
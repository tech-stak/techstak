var React = require('react');
var githubActions = require('../../actions/githubActions');
var githubStore = require('../../stores/githubStore');

var Left = React.createClass({
	getInitialState: function(){
		return {
			user: githubStore.getUser(),
			bio: githubStore.getBio()
		};
	},
	componentWillReceiveProps: function(obj){
		githubActions.changeUser(obj.username);			
		githubActions.getUserBio(obj.username);
	},
	componentDidMount: function(){
		githubActions.changeUser(this.props.username);
		githubActions.getUserBio(this.props.username);
		githubStore.addChangeListener(this._onChange);

	},
	componentWillUnmount: function(){
		githubStore.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState({
			user: githubStore.getUser(),
			bio: githubStore.getBio()
		});
	}
	render: function(){
		return (
			<div>
				<h3>User Profile</h3>
				<ul className="list-group">
					{this.state.bio.avatar_url && <li className="list-group-item"><img src={this.state.bio.avatar_url} className="img-rounded img-responsive"/></li>}
					{this.state.bio.name && <li className="list-group-item">Name: {this.state.bio.name}</li>}
					{this.state.bio.login && <li className="list-group-item">Username: {this.state.bio.login} </li>}
					{this.state.bio.email && <li className="list-group-item">Email: {this.state.bio.email} </li>}
					{this.state.bio.location && <li className="list-group-item">Location: {this.state.bio.location} </li>}
					{this.state.bio.company && <li className="list-group-item">Company: {this.state.bio.company} </li>}
				</ul>
			</div>
		)
	}
});

modules.export = Left;
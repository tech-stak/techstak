var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var Main = require('../components/Main');
var Home = require('../components/Home');
var SearchResults = require('../components/SearchResults');
var Profile = require('../components/Profile');


var routes = (
	<Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={Home} />
    <Route name="search" path="search/:skilltag" handler={SearchResults} />
		<Route name="profile" path="profile/:username" handler={Profile} />
	</Route>
);

module.exports = routes;

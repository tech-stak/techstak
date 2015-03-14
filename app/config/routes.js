var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var SearchResults = require('../components/SearchResults');
var Profile = require('../components/Profile');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
//DO WE NEED TO REQUIRE ANYTHING ELSE HERE??

module.exports = (
	<Route name="app" path="/" handler={Main}>
    <Route name ="search" path="search/:skilltag" handler={SearchResults}>
		<Route name="profile" path="profile/:username" handler={Profile} />
		<DefaultRoute handler={Home} />
	</Route>
);

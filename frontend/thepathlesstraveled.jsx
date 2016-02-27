var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;
var Redirect = ReactRouter.Redirect;
var History = require('history');

var App = require('./components/app');
var Search = require('./components/search');
var LandingPage = require('./components/landing_page')

var routes = (
  <Router history={History.hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage} />
      <Route path='search' component={Search} />
    </Route>
  </Router>)

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(routes, document.getElementById('content'));
});

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;
var Redirect = ReactRouter.Redirect;
var History = require('history');
var Modal = require('react-modal');

var App = require('./components/app');
var Search = require('./components/search');
var LandingPage = require('./components/landing/landing_page');
var TrekDetail = require('./components/treks/trek_detail');
// var Map = require('./components/maps/map');

var routes = (
  <Router history={History.HashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage} />
      <Route path='map' component={Map} />
      <Route path='search' component={Search} />
      <Route path="treks/:trekId" component={TrekDetail} />
    </Route>
  </Router>
)
// <Route path='map' component={Map} />

document.addEventListener("DOMContentLoaded", function () {
  var appElement = document.getElementById('content');

  Modal.setAppElement(appElement);

  ReactDOM.render(routes, document.getElementById('content'));
});

var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var History = require('react-router').History;
var Link = require('react-router').Link;

var ApiActions = require('../actions/api_actions');
var TrekStore = require('../stores/trek_store');
// var SessionStore = require('./stores/sessionStore.js');

var Search = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {treks: [], searchValue: ''};
  },

  handleInput: function (event) {
    this.setState({ searchValue: event.currentTarget.value });
  },

  componentDidMount: function () {
    TrekStore.addListener(this.updateTreks);
    ApiActions.requestAllTreks();
  },

  matches: function () {
    var matches = [];
    if(this.state.searchValue.length === 0){
      return TrekStore.all();
    }

    TrekStore.all().forEach(function (trek) {
      var sub = trek.location.slice(0, this.state.searchValue.length);
      if(sub.toLowerCase() === this.state.searchValue.toLowerCase()){
        matches.push(trek);
      }
    }.bind(this));

    if (matches.length === 0) {
      matches.push("No matches");
    }

    return matches;
  },

  updateTreks: function () {
    this.setState({treks: TrekStore.all()});
  },

  parseTreks: function (jsonTreks) {
    var renderArray = [];
    jsonTreks.forEach(function(trek) {
      renderArray.push(
        <ul>
          <li>{trek.title}</li>
          <li>{trek.location}</li>
          <li>{trek.description}</li>
          <img src={trek.image_url}/>
        </ul>
      );
    });
    return renderArray;
  },

  render: function () {
    var results = this.matches().map(function (trek) {
      return (
        <div key={trek.id} className="search-images"/*onClick={this.showDetail}*/>
          <center><h4>{trek.title}</h4></center>
          <center>Location: {trek.location}</center>
          <center><img className="search-page-image" src={"/assets/" + trek.primary_picture[0].url}/></center>
          <center>Rating: {trek.average_rating}</center>
          <center><span className="stars">{trek.average_rating}</span></center>
        </div>
      );
    }.bind(this));

    return(
      <div>
        <div>
          <h4>Search by Location</h4>
          <input onChange={this.handleInput} value={this.state.searchValue} />
        </div>
        <div className="search-images-container">
          <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {results}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
});

module.exports = Search;

var React = require('react');
var Link = require('react-router').Link;
var TrekStore = require('../stores/trek_store');
var ApiActions = require('../actions/api_actions')
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Search = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {treks: [], searchValue: ''};
  },

  componentDidMount: function () {
    TrekStore.addListener(this.updateTreks);
  },

  updateTreks: function () {
    this.setState({treks: TrekStore.all()});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    ApiActions.fetchTreksByLocation(this.state.searchValue);
  },

  parseTreks: function (jsonTreks) {
    var renderArray = [];
    jsonTreks.forEach(function(trek) {
      renderArray.push(
        <ul>
          <li>{trek.title}</li>
          <li>{trek.location}</li>
          <li>{trek.description}</li>
        </ul>
      );
    });
    return renderArray;
  },

  render: function() {

    return (
      <div>
        Search
        <Link to='/'>Go back to home page</Link>
        <h1>Search Location</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" valueLink={this.linkState('searchValue')} />
          <input type="submit" value="Search"/>
        </form>
        {this.parseTreks(this.state.treks)}
      </div>
    );
  }
});

module.exports = Search;

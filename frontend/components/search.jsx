var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var History = require('react-router').History;
var Link = require('react-router').Link;

var ApiActions = require('../actions/api_actions');
var TrekStore = require('../stores/trek_store');
var TrekDetail = require('./treks/trek_detail');
var TrekIndexItem = require('./treks/trek_item');
var Map = require('./maps/map');
// var Tags = require('./tags');
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
      var city = trek.location.city.slice(0, this.state.searchValue.length);
      var country = trek.location.country.slice(0, this.state.searchValue.length);
      var title = trek.title.slice(0, this.state.searchValue.length);
      var state = trek.location.state.slice(0, this.state.searchValue.length);

      if(city.toLowerCase() === this.state.searchValue.toLowerCase()){
        matches.push(trek);
      } else if(country.toLowerCase() === this.state.searchValue.toLowerCase()){
        matches.push(trek);
      } else if(title.toLowerCase() === this.state.searchValue.toLowerCase()){
        matches.push(trek);
      } else if(state.toLowerCase() === this.state.searchValue.toLowerCase()){
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

  showDetail: function (id) {
    this.history.pushState(null, '/treks/' + id, {});
  },

  render: function () {
    document.body.style.backgroundImage = "";
    var selection = document.getElementById("nav");
    selection.style.backgroundColor = '#D3E3E8';
    selection.style.borderBottom = '1px solid black';
    var myMatches = this.matches();

    var results = myMatches.map(function (trek) {
      return (
        <div key={trek.id} className="col-xs-12 col-sm-6 row-space-5 text-center" onClick={this.showDetail.bind(null, trek.id)}>
          <div><h4>{trek.title}</h4></div>
          <div>City: {trek.location.city}</div>
          <div>State: {trek.location.state}</div>
          <div>Country: {trek.location.country}</div>
          <div><img className="img-responsive search-page-image" src={"/assets/" + trek.trek_pics[0].url}/></div>
          <div>Rating: {trek.average_rating}</div>
          <div><center><span className="stars">{trek.average_rating}</span></center></div>
        </div>
      );
    }.bind(this));

    // var myTagObjs = {};
    //
    // myMatches.forEach(function (trek) {
    //   trek.tags.forEach (function (tag) {
    //       myTagObjs[tag.id] = tag.tag_name;
    //   });
    // });
    //
    // var myTags = Object.keys(myTagObjs).map(function(key){
    //   return (
    //     <li className={key}> {myTagObjs[key]} </li>
    //   )
    // });

    return(
      <div id="sidx" className="search-container below-nav">
        <div className="col-xs-12 col-md-7 search-form">
          <div className="row search-form">
            <div className="search-filters">
              <div>
                <input placeholder="Search" onChange={this.handleInput} value={this.state.searchValue} />
              </div>

              <div className="container-fluid search-list-frame">
                <div className="row">
                  <div className="container-fluid search-list-listings">
                    <div className="row">
                      <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        {results}
                      </ReactCSSTransitionGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 search-map hidden-xs">
          <Map className='trek-map'/>
        </div>
      </div>
    );
  }
});

module.exports = Search;


// overflow auto
// add height param to container

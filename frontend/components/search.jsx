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
var Utilities = require('../util/util');
var TrekModal = require('./treks/trek_modal');
// var Tags = require('./tags');
// var SessionStore = require('./stores/sessionStore.js');

var Search = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {searchValue: ''};
  },

  handleInput: function (event) {
    this.setState({ searchValue: event.currentTarget.value });
  },

  componentDidMount: function () {
    TrekStore.addListener(this.updateTreks);
    ApiActions.requestAllTreks();
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

  handleButton: function(id) {
    if (document.getElementById("button" + id).className === "btn btn-sm btn-default") {
      document.getElementById("button" + id).className = "btn btn-sm btn-primary";
    } else {
      document.getElementById("button" + id).className = "btn btn-sm btn-default";
    }
    ApiActions.receiveTagChange(id);
  },

  render: function () {
    Utilities.changeBackground();
    var myMatches = TrekStore.filterStore(this.state.searchValue);

    var carouselIndicators = [];

    var carouselInner = [];
    var results = myMatches.map(function (trek) {
      carouselIndicators = [];
      carouselInner = [];
      if (trek.trek_pics !== undefined){
        carouselInner = trek.trek_pics.map (function (picture, idx){
            var pictureClass = "item";

            if (idx === 0){
              carouselIndicators.push (<li key={picture.id} data-target="#slider" data-slide-to="0" className="active"></li>);
              pictureClass = "item active";
            } else {
              carouselIndicators.push (<li key={picture.id} data-target="#slider" data-slide-to={idx}></li>);
            }

            return (
                <div key={trek.title + picture.id} className={pictureClass}>
                    <img src={"/assets/" + picture.url} />
                </div>
            )
        })
      };

      var makeCarousels = (
        <section id={trek.id} className="carousel slide search-page-image" data-interval="false">
          <div onClick={this.showDetail.bind(null, trek.id)} className="carousel-inner">
            {carouselInner}
          </div>

          <a className="left carousel-control" href={'#' + trek.id} role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a className="right carousel-control" href={'#' + trek.id} role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </section>
      );

      return (
        <div key={trek.id} className="col-xs-12 col-sm-6 row-space-5 text-center">
          {makeCarousels}
          <div onClick={this.showDetail.bind(null, trek.id)}><h4>{trek.title}</h4></div>
          <div onClick={this.showDetail.bind(null, trek.id)}>City: {trek.location.city}</div>
          <div onClick={this.showDetail.bind(null, trek.id)}>State: {trek.location.state}</div>
          <div onClick={this.showDetail.bind(null, trek.id)}>Country: {trek.location.country}</div>
          <div onClick={this.showDetail.bind(null, trek.id)}>Rating: {trek.average_rating}</div>
          <div onClick={this.showDetail.bind(null, trek.id)}><center><span className="stars">{trek.average_rating}</span></center></div>
        </div>
      );
    }.bind(this));

    var myTagObjs = {};

    myMatches.forEach(function (trek) {
      trek.tags.forEach (function (tag) {
          myTagObjs[tag.id] = tag.tag_name;
      });
    });

    var myTags = Object.keys(myTagObjs).map(function(key){
      return (
        <button type="button" key={key} id={"button" + key} className="btn btn-sm btn-default" onClick={this.handleButton.bind(null, key)}> {myTagObjs[key]} </button>
      )
    }.bind(this));

    return(
      <div id="sidx" className="search-container below-nav">
        <div className="search-filters">
          <div className = "col-xs-12 col-md-7">
            <input placeholder="Search" onChange={this.handleInput} value={this.state.searchValue} />
          </div>
          <div className = "col-xs-12 col-md-7 tag-container">
            {myTags}
          </div>
        </div>
        <div className="col-xs-12 col-md-7 search-form">
          <div className="row search-form">
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
        <Map className='trek-map' history={this.history} searchValue={this.state.searchValue}/>
      </div>
    );
  }
});

module.exports = Search;


// overflow auto
// add height param to container

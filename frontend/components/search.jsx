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
var Rating = require('./reviews/ratings');
// var Tags = require('./tags');
// var SessionStore = require('./stores/sessionStore.js');

var Search = React.createClass({
  mixins: [History, LinkedStateMixin],

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
    if (document.getElementById("button" + id).className === "btn btn-xs btn-default") {
      document.getElementById("button" + id).className = "btn btn-xs btn-primary";
    } else {
      document.getElementById("button" + id).className = "btn btn-xs btn-default";
    }
    ApiActions.receiveTagChange(id, this.state.searchValue);
  },

  render: function () {
    // Utilities.changeBackground();
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
                    <img src={"http://res.cloudinary.com/ssaekoo/image/upload/" + picture.url} />
                </div>
            )
        })
      };

      var makeCarousels = (
        <section id={trek.id} className="carousel slide search-page-image" data-interval="false">
          <div onClick={this.showDetail.bind(null, trek.id)} className="carousel-inner">
            {carouselInner}
          </div>

          <a id="carousel-controller" className="left carousel-control" href={'#' + trek.id} role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a id="carousel-controller" className="right carousel-control" href={'#' + trek.id} role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </section>
      );
      var stars = (Math.round(trek.average_rating * 2) / 2).toFixed(1);

      return (
        <div className="col-xs-12 col-sm-6 row-space-5">
          <div key={trek.id} id={"trek-" + trek.id} className="trek-box">
            <div className="text-center" onClick={this.showDetail.bind(null, trek.id)}><h4>{trek.title}</h4></div>
            {makeCarousels}
            <div className="text-center">
              <Rating stars={stars}/>
            </div>
            <div className="col-xs-12 col-sm-6 detail-container-right" onClick={this.showDetail.bind(null, trek.id)}>
              <div>City: </div>
              <div>State: </div>
              <div>Country: </div>
            </div>
            <div className="col-xs-12 col-sm-6 detail-container-left" onClick={this.showDetail.bind(null, trek.id)}>
              <div>{trek.location.city}</div>
              <div>{trek.location.state}</div>
              <div>{trek.location.country}</div>
            </div>

          </div>
        </div>
      );
    }.bind(this));

    var myTagObjs = {};

    myMatches.forEach(function (trek) {
      trek.tags.forEach (function (tag) {
          myTagObjs[tag.id] = tag.tag_name;
      });
    });

    var difficultyTags = [];
    var durationTags = [];
    var otherTags = [];

    // TODO redo, will need to change tag table to allow categorization and create a tag store
    for (var i = 1; i <= 12; i++) {
      if (myTagObjs[i] !== undefined) {
        switch (true) {
          case (i <= 4):
            difficultyTags.push(<button type="button" key={i} id={"button" + i} className="btn btn-xs btn-default" onClick={this.handleButton.bind(null, i)}> {myTagObjs[i]} </button>)
            break;
          case (i <= 6):
            durationTags.push(<button type="button" key={i} id={"button" + i} className="btn btn-xs btn-default" onClick={this.handleButton.bind(null, i)}> {myTagObjs[i]} </button>)
            break;
          case (i > 6):
            otherTags.push(<button type="button" key={i} id={"button" + i} className="btn btn-xs btn-default" onClick={this.handleButton.bind(null, i)}> {myTagObjs[i]} </button>)
            break;
        }
      }
    }

    // var myTags = Object.keys(myTagObjs).map(function(key){
    //   return (
    //     <button type="button" key={key} id={"button" + key} className="btn btn-sm btn-default" onClick={this.handleButton.bind(null, key)}> {myTagObjs[key]} </button>
    //   )
    // }.bind(this));

    return(
      <div id="sidx" className="search-container below-nav">
        <div className="search-filters">
          <div className="col-xs-12 col-md-7">
            <input className="search-input" placeholder="Search by Trek Title, City, State, or Country" valueLink={this.linkState('searchValue')} />
          </div>
          <div className="col-xs-12 col-md-7 tag-container">
            <div className="difficulty-tags">
              <h5>Difficulty</h5>
              {difficultyTags}
            </div>
            <div className="duration-tags">
              <h5>Duration</h5>
              {durationTags}
            </div>
            <div className="other-tags">
              <h5>Other</h5>
              {otherTags}
            </div>
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

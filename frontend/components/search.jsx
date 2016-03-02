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

  // matches: function () {
  //   var matches = [];
  //   if(this.state.searchValue.length === 0){
  //     return TrekStore.all();
  //   }
  //
  //   TrekStore.all().forEach(function (trek) {
  //     var city = trek.location.city.slice(0, this.state.searchValue.length);
  //     var country = trek.location.country.slice(0, this.state.searchValue.length);
  //     var title = trek.title.slice(0, this.state.searchValue.length);
  //     var state = trek.location.state.slice(0, this.state.searchValue.length);
  //
  //     if(city.toLowerCase() === this.state.searchValue.toLowerCase()){
  //       matches.push(trek);
  //     } else if(country.toLowerCase() === this.state.searchValue.toLowerCase()){
  //       matches.push(trek);
  //     } else if(title.toLowerCase() === this.state.searchValue.toLowerCase()){
  //       matches.push(trek);
  //     } else if(state.toLowerCase() === this.state.searchValue.toLowerCase()){
  //       matches.push(trek);
  //     }
  //
  //   }.bind(this));
  //
  //   if (matches.length === 0) {
  //     matches.push("No matches");
  //   }
  //
  //   return matches;
  // },

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
    Utilities.changeBackground();
    var myMatches = TrekStore.filterStore(this.state.searchvalue);

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

          <a className="left carousel-control" href={trek.id} role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a className="right carousel-control" href={trek.id} role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
          </a>

          <ol className="carousel-indicators">
            {carouselIndicators}
          </ol>
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
        <div className="col-md-5 search-map">
          <Map className='trek-map'/>
        </div>
      </div>
    );
  }
});

module.exports = Search;


// overflow auto
// add height param to container

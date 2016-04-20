var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var Link = require('react-router').Link;
var ScrollToTop = require('react-scroll-up');

var ApiActions = require('../actions/api_actions');
var TrekStore = require('../stores/trek_store');
var TrekDetail = require('./treks/trek_detail');
var TrekIndexItem = require('./treks/trek_item');
var Map = require('./maps/map');
var Utilities = require('../util/util');
var TrekModal = require('./treks/trek_modal');
var Carousels = require('./carousel/carousels');
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
    this.listenerToken = TrekStore.addListener(this.updateTreks);
    ApiActions.requestAllTreks();
  },

  updateTreks: function () {
    this.setState({treks: TrekStore.all()});
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  parseTreks: function (jsonTreks) {
    var renderArray = [];
    jsonTreks.forEach(function(trek) {
      renderArray.push(
        <ul key={trek.id}>
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
    this.history.pushState(null, '/treks/' + id);
  },

  handleButton: function(id) {
    if (document.getElementById("button" + id).className === "btn btn-xs btn-default tags") {
      document.getElementById("button" + id).className = "btn btn-xs btn-primary tags";
    } else {
      document.getElementById("button" + id).className = "btn btn-xs btn-default tags";
    }
    ApiActions.receiveTagChange(id, this.state.searchValue);
  },

  render: function () {
    // Utilities.changeBackground();
    var myMatches = TrekStore.filterStore(this.state.searchValue);

    var carouselIndicators = [];

    var carouselInner = [];
    var carousels = <Carousels myMatches={myMatches}/>

    var myTagObjs = {};
    var allTags = {
      1: 'Beginner',
      2: 'Intermediate',
      3: 'Expert',
      4: 'Req equipment',
      5: 'Multi-day',
      6: 'Single-day',
      7: 'Famous',
      8: 'Populous',
      9: 'Deserted',
      10: 'Water crossing',
      11: 'Mountainous',
      12: 'Family oriented'
    };

    myMatches.forEach(function (trek) {
      trek.tags.forEach (function (tag) {
          myTagObjs[tag.id] = tag.tag_name;
      });
    });

    var difficultyTags = [];
    var durationTags = [];
    var otherTags = [];

    for (var i = 1; i <= 12; i++) {
      switch (true) {
        case (i <= 4):
          if (myTagObjs[i] !== undefined) {
            difficultyTags.push(<button type="button" key={i} id={"button" + i} className="btn btn-xs btn-default tags" onClick={this.handleButton.bind(null, i)}> {myTagObjs[i]} </button>)
          } else {
            difficultyTags.push(<button type="button" key={i} id={"button" + i} className="btn btn-xs btn-default btn-shaded tags" disabled> {allTags[i]} </button>)
          }
          break;
        case (i <= 6):
          if (myTagObjs[i] !== undefined) {
            durationTags.push(<button type="button" key={i} id={"button" + i} className="btn btn-xs btn-default tags" onClick={this.handleButton.bind(null, i)}> {myTagObjs[i]} </button>)
          } else {
            durationTags.push(<button type="button" key={i} id={"button" + i} className="btn btn-xs btn-default tags" disabled> {allTags[i]} </button>)
          }
          break;
        case (i > 6):
          if (myTagObjs[i] !== undefined) {
            otherTags.push(<button type="button" key={i} id={"button" + i} className="btn btn-xs btn-default tags" onClick={this.handleButton.bind(null, i)}> {myTagObjs[i]} </button>)
          } else {
            otherTags.push(<button type="button" key={i} id={"button" + i} className="btn btn-xs btn-default tags" disabled> {allTags[i]} </button>)
          }
          break;
      }
    }

    // var myTags = Object.keys(myTagObjs).map(function(key){
    //   return (
    //     <button type="button" key={key} id={"button" + key} className="btn btn-sm btn-default" onClick={this.handleButton.bind(null, key)}> {myTagObjs[key]} </button>
    //   )
    // }.bind(this));
    var scrollUpStyle = {
          position: 'fixed',
          bottom: 15,
          left: 5,
          cursor: 'pointer',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'linear',
          transitionDelay: '0s'
        };

    return(
      <div id="sidx" className="search-container below-nav">
        <div className="search-filters">
          <div className="col-xs-12 col-md-7">
            <input className="search-input" placeholder="Search by Title or Location" valueLink={this.linkState('searchValue')} />
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
                    {carousels}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Map className='trek-map' history={this.history} searchValue={this.state.searchValue}/>
        <ScrollToTop style={scrollUpStyle} showUnder={160}>
          <img className="up-arrow" src="http://res.cloudinary.com/stephensaekoo/image/upload/up_arrow.png"/>
        </ScrollToTop>
      </div>
    );
  }
});

module.exports = Search;


// overflow auto
// add height param to container

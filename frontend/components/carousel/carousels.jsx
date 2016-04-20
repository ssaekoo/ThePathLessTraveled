var React = require('react');
var PropTypes = React.PropTypes;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var History = require('react-router').History;
var MakeCarousel = require('./make_carousel');
var Rating = require('../reviews/ratings');

var Carousel = React.createClass({
  mixins: [History, LinkedStateMixin],
  showDetail: function (id) {
    this.history.pushState(null, '/treks/' + id);
  },

  render: function() {

    var that = this;
    results = this.props.myMatches.map(function (trek) {

        if (trek.trek_pics !== undefined){
          makeCarousels = <MakeCarousel trek={trek}/>
        };

        var stars = (Math.round(trek.average_rating * 2) / 2).toFixed(1);

        return (
          <div className="col-xs-12 col-sm-6 row-space-5">
            <div key={trek.id} id={"trek-" + trek.id} className="trek-box">
              <div className="text-center" onClick={that.showDetail.bind(null, trek.id)}><h4>{trek.title}</h4></div>
              {makeCarousels}
              <div className="text-center">
                <Rating stars={stars}/>
              </div>
              <div className="col-xs-12 col-sm-6 detail-container-right" onClick={that.showDetail.bind(null, trek.id)}>
                <div>City: </div>
                <div>State: </div>
                <div>Country: </div>
              </div>
              <div className="col-xs-12 col-sm-6 detail-container-left" onClick={that.showDetail.bind(null, trek.id)}>
                <div>{trek.location.city}</div>
                <div>{trek.location.state}</div>
                <div>{trek.location.country}</div>
              </div>
            </div>
          </div>
        );
      })
    return (
        <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {results}
        </ReactCSSTransitionGroup>
    )
  }

});

module.exports = Carousel;

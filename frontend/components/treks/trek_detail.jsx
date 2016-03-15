var React = require('react');
var TrekStore = require('../../stores/trek_store');
var ApiActions = require('../../actions/api_actions');
var Utilities = require('../../util/util');
var MapTrekDetail = require('../maps/map_trek_create');
var TrekReviews = require('../reviews/reviews');
var Rating = require('../reviews/ratings');

var TrekDetail = React.createClass({
  getInitialState: function () {
    return { trek: TrekStore.find(parseInt(this.props.params.trekId)) };
  },

  getStateFromStore: function() {
    return TrekStore.find(parseInt(this.props.params.trekId));
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.requestTreksById(parseInt(newProps.params.trekId));
  },

  componentDidMount: function() {
    this.listenerToken = TrekStore.addListener(this._onChange);
    ApiActions.requestTreksById(this.props.params.trekId);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _onChange: function () {
    this.setState({trek: this.getStateFromStore()});
  },

  render: function () {

    var trekTitle = this.state.trek.title;
    var carouselIndicators = [];
    var carouselInner = [];

    if (this.state.trek.trek_pics !== undefined){
      carouselInner = this.state.trek.trek_pics.map (function (picture, idx){
          var pictureClass = "item";

          if (idx === 0){
            pictureClass = "item active";
          }

          return (
              <div className={pictureClass}>
                  <img key={picture.url} src={"http://res.cloudinary.com/ssaekoo/image/upload/" + picture.url} />
              </div>
          )
      })
    };

    if(this.state.trek.length === undefined) { return <div></div>; }
    var myTags = this.state.trek.tags.map (function(tag){
      return (<button type="button" key={tag.id} id={"button" + tag.id} className="btn btn-xs btn-primary"> {tag.tag_name} </button>);
    })
    var stars = (Math.round(this.state.trek.average_rating * 2) / 2).toFixed(1);

    return(
      <div id="sidx" className="trek-detail below-nav">
        <div className="trek-detail-pane">
          <div className="trek-detail-carousel">
            <section id="slider" className="carousel slide" data-interval="false">
              <div className="carousel-inner">
                {carouselInner}
              </div>

              <a id="carousel-controller" className="left carousel-control" href="#slider" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
              </a>
              <a id="carousel-controller" className="right carousel-control" href="#slider" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
              </a>
            </section>
          </div>
          <div className="trek-detail-attributes">
            <h1 className="trek-detail-title">{this.state.trek.title} </h1>
            <div id="trek-star-average" className="trek-star-average">
              <Rating stars={stars}/>
            </div>
            ({this.state.trek.total_reviews})
            <div className="tag-container">
              {myTags}
            </div>
            <div className="trek-info">
              <h3>Trek Info</h3>
              <ul>
                <li>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="detail-value">{this.state.trek.location.country}</div>
                  <div className="detail-attribute">Country:</div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="detail-value">{this.state.trek.location.state}</div>
                  <div className="detail-attribute">State:</div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="detail-value">{this.state.trek.location.city}</div>
                  <div className="detail-attribute">City:</div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="detail-value">{this.state.trek.duration}</div>
                  <div className="detail-attribute">{this.state.trek.dur_measure.charAt(0).toUpperCase() + this.state.trek.dur_measure.slice(1)}:</div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="detail-value">{this.state.trek.start_elv} {this.state.trek.elv_measure}</div>
                  <div className="detail-attribute">Starting elevation:</div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="detail-value">{this.state.trek.peak_elv} {this.state.trek.elv_measure}</div>
                  <div className="detail-attribute">Highest elevation:</div>
                </li>
              </ul>
              <div className="description-container">
                <h3>Description</h3>
                <div className="detail-description trek-info">  {this.state.trek.description} </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <TrekReviews reviews={this.state.trek.reviews} trekId={this.state.trek.id}/>
        </div>
      </div>
    );
  }
});

module.exports = TrekDetail;

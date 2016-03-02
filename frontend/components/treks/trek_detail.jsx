var React = require('react');
var TrekStore = require('../../stores/trek_store');
var ApiActions = require('../../actions/api_actions');
var Utilities = require('../../util/util');
// var TrekUtils = require('../../util/trek_util');

var TrekDetail = React.createClass({
  getInitialState: function () {
    return { trek: TrekStore.find(parseInt(this.props.params.trekId)) };
  },

  _onChange: function () {
    this.setState({trek: this.getStateFromStore()});
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

  // createInnerCarousel: function() {
  //   return this.state.trek.pictures.map (function (picture){
  //       return (<div className="item active">
  //           <img src="img/" + {picture.url}>
  //       </div>)
  //     })
  // }

  render: function () {
    Utilities.changeBackground();

    var trekTitle = this.state.trek.title;
    // var camelizeTitle = Utilities.camelize(trekTitle);
    var carouselIndicators = [];

    var carouselInner = [];
    if (this.state.trek.trek_pics !== undefined){
      carouselInner = this.state.trek.trek_pics.map (function (picture, idx){
          if (idx === 0){
            carouselIndicators.push (<li data-target="#slider" data-slide-to="0" className="active"></li>);
          } else {
            carouselIndicators.push (<li data-target="#slider" data-slide-to={idx}></li>);
          }

          if (idx === 0) {
            <div className="item active">
                <img src={"/assets/" + picture.url} />
            </div>
          } else {
            <div className="item">
                <img src={"/assets/" + picture.url} />
            </div>
          }

          return (

          )
      })
    };

      if(this.state.trek.length === undefined) { return <div></div>; }
      var myTags = this.state.trek.tags.map (function(tag){
        return (<div>{tag.tag_name}</div>);
      })

      return(
        <div>
          <div className="trek-detail-pane">
            <div className="detail">
                // <img className="img-responsive search-page-image" src={"/assets/" + this.state.trek.trek_pics[0].url}/>
              <section id="slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  {carouselInner}
                </div>

                <a className="left carousel-control" href="#slider" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a className="right carousel-control" href="#slider" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>

                <ol className="carousel-indicators">
                  {carouselIndicators}
                </ol>
              </section>

              <div> Title: {this.state.trek.title} </div>
              <div> Rating: {this.state.trek.average_rating} </div>
              <div> Reviews: {this.state.trek.total_reviews} </div>
              <div> Description: {this.state.trek.description} </div>
              <div> {this.state.trek.dur_measure.charAt(0).toUpperCase() + this.state.trek.dur_measure.slice(1)}: {this.state.trek.duration} </div>
              <div> Starting elevation: {this.state.trek.start_elv} {this.state.trek.elv_measure} </div>
              <div> Highest elevation: {this.state.trek.peak_elv} {this.state.trek.elv_measure} </div>
              <div> Country: {this.state.trek.location.country} </div>

              <div> tags:
                {myTags}
              </div>
            </div>
          </div>

          {this.props.children}

        </div>
      );
    }
  });

module.exports = TrekDetail;

// <div> City: {this.state.trek.location.city} </div>
// <div> Latitude: {this.state.trek.location.latitude} </div>
// <div> Longitude: {this.state.trek.location.longitude} </div>

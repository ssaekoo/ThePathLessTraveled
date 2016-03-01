var React = require('react');
var TrekStore = require('../../stores/trek_store');
var ApiActions = require('../../actions/api_actions');

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

  render: function () {
      document.body.style.backgroundImage = "";
      var selection = document.getElementById("nav");
      selection.style.backgroundColor = '#D3E3E8';
      selection.style.borderBottom = '1px solid black';
      
      if(this.state.trek.length === undefined) { return <div></div>; }
      var myTags = this.state.trek.tags.map (function(tag){
        return (<div>{tag.tag_name}</div>);
      })

      return(
        <div>
          <div className="trek-detail-pane">
            <div className="detail">
              <div> <img className="img-responsive search-page-image" src={"/assets/" + this.state.trek.trek_pics[0].url}/></div>
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

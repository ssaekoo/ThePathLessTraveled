var React = require('react');
var ReactDOM = require('react-dom');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var CreateTrekMap = React.createClass({

  getInitialState: function() {
    return({
      trek: this.props.trek,
    });
  },

  componentWillReceiveProps: function(newProps){
    this.setState({lat: this.props.trek.location.latitude,
                  lng: this.props.trek.location.longitude})
  },

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.detailMap);
    var mapOptions = {
      center: this.centerTrekCoords(),
      zoom: 10
    };

    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    createMarkerFromProps();
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  centerTrekCoords: function () {
    return {lat: this.props.trek.location.latitude,
            lng: this.props.trek.location.longitude};
  },

  componentDidUpdate: function (oldstate) {
    this._onChange();
  },

  placeMarker: function(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: this.map
    });
  },

  _onChange: function(){
    var treks = this.state.treks;
    var toAdd = [], toRemove = this.markers.slice(0);
    toAdd.forEach(this.createMarkerFromProps);
    toRemove.forEach(this.removeMarker);
  },

  registerListeners: function(){
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds();
      var northEast = _getCoordsObj(bounds.getNorthEast());
      var southWest = _getCoordsObj(bounds.getSouthWest());
      var bounds = {
        northEast: northEast,
        southWest: southWest
      };
    });
  },

  createMarkerFromProps: function () {
    var pos = new google.maps.LatLng(this.state.trek.location.latitude, this.state.trek.location.longitude);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
    this.markers.push(marker);
  },

  removeMarker: function(marker){
    for(var i = 0; i < this.markers.length; i++){
      if (this.markers[i].trekId === marker.trekId){
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        break;
      }
    }
  },

  render: function(){
    return ( <div id="create-trek-map" className="google-map-canvas" ref="detailMap">Map</div> );
  }
});

module.exports = CreateTrekMap;

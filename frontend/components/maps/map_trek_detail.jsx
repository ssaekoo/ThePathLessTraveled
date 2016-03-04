var React = require('react');
var ReactDOM = require('react-dom');
var TrekStore = require('../../stores/trek_store');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var CENTER = {lat: this.props.trek.location.latitude, lng: this.props.trek.location.longitude};

var Map = React.createClass({

  getInitialState: function() {
    return({
      trek: this.props.trek
    });
  },

  updateTreks: function() {
    this.setState({trek: this.props.trek});
  },

  componentDidMount: function(){
    this.listenerToken = TrekStore.addListener(this.updateTreks);
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: this.centerTrekCoords(),
      zoom: 10
    };

    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    createMarkerFromTrek(this.props.trek);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  centerTrekCoords: function () {
    return CENTER;
  },

  componentDidUpdate: function (oldstate) {
    this._onChange();
  },

  _onChange: function(){
    var treks = this.state.treks;
    var toAdd = [], toRemove = this.markers.slice(0);
    treks.forEach(function(trek, idx){
      var idx = -1;
      for(var i = 0; i < toRemove.length; i++){
        if(toRemove[i].trekId == trek.id){
          idx = i;
          break;
        }
      }
      if(idx === -1){
        toAdd.push(trek);
      } else {
        toRemove.splice(idx, 1);
      }
    });
    toAdd.forEach(this.createMarkerFromTrek);
    toRemove.forEach(this.removeMarker);

    if (this.state.singletrek) {
      this.map.setOptions({draggable: false});
      this.map.setCenter(this.centerTrekCoords());
    }
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
    google.maps.event.addListener(this.map, 'click', function(event) {
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      that.state.onMapClick(coords);
    });
  },

  createMarkerFromTrek: function (trek) {
    var that = this;
    var pos = new google.maps.LatLng(trek.location.latitude, trek.location.longitude);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      trekId: trek.id
    });
    marker.addListener('click', function () {
      that.state.onMarkerClick(trek)
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
    return ( <div id="search-map-canvas" className="google-map-canvas" ref="map">Map</div> );
  }
});

module.exports = Map;

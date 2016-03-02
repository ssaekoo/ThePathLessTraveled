var React = require('react');
var ReactDOM = require('react-dom');
var Update = require('react-addons-update');
var TrekStore = require('../../stores/trek_store');

window.TrekStore = TrekStore;

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var CENTER = {lat: 37.7758, lng: -122.435};

var Map = React.createClass({

  getInitialState: function() {
    return({
      treks: TrekStore.all()
    });
  },

  updateTreks: function() {
    this.setState({treks: TrekStore.all()});
  },

  componentDidMount: function(){
    console.log('map mounted');
    this.listenerToken = TrekStore.addListener(this.updateTreks);

    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: this.centerTrekCoords(),
      zoom: 5
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    this.state.treks.forEach(this.createMarkerFromTrek);
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
  },

  placeMarker: function(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: this.map
    });
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
      that.placeMarker(event.latLng);
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

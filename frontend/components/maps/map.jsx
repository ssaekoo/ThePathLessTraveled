var React = require('react');
var ReactDOM = require('react-dom');
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

  // _updateMarkers: function() {
  //
  //   var markers = this.markers;
  //   var newTreks = TrekStore.all();
  //   var addIds = newTreks.filter(function(trek){
  //     return (
  //       for (var i = 0; i < this.markers.length; i++){
  //
  //       }
  //
  //     );
  //   });
  //   var removeRoomIds = Object.keys(this.markers).filter(function(roomId){
  //     return (typeof newRooms[roomId] === 'undefined');
  //   });
  //   this._removeMarkers(removeRoomIds);
  //   this._addMarkers(addRoomIds, newRooms);
  // },

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
    window.map = this.map = new google.maps.Map(map, mapOptions);
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
      setMap: this.map,
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

  // _addMarkers: function(addRoomIds, newRoomds) {
  //   var _markers = this.markers;
  //   var _map = this.map;
  //   // var image = "/assets/markers/pink.png";
  //   // var imageBlue = "/assets/markers/blue.png";
  //   // var img = this.sampleMarker;
  //   var room, pos, img;
  //   var markerBg = this.markerBg;
  //
  //   addRoomIds.forEach(function(roomId) {
  //     room = newRoomds[roomId];
  //     img = MarkerImg(room.price, markerBg);
  //     pos = new google.maps.LatLng(room.lat, room.lng);
  //     _markers[roomId] = new google.maps.Marker({
  //       position: pos,
  //       map: _map,
  //       icon: {
  //         url: img,
  //         // size: new google.maps.Size(60, 60),
  //         scaledSize: new google.maps.Size(55, 35)
  //       }
  //       // icon: img
  //     });
  //
  //     var toggleBounce = function(marker, status) {
  //       if (status) {
  //         marker.setAnimation(google.maps.Animation.BOUNCE);
  //       } else {
  //         marker.setAnimation(null);
  //       }
  //     };
  //     google.maps.event.addDomListener(document.getElementById('room-' + roomId),
  //                                     "mouseenter",
  //                                      function() {
  //       toggleBounce(_markers[roomId], true);
  //     });
  //     google.maps.event.addDomListener(document.getElementById('room-' + roomId),
  //                                     "mouseleave",
  //                                      function() {
  //       toggleBounce(_markers[roomId], false);
  //     });
  //   });
  // },

  render: function(){
    return ( <div id="search-map-canvas" className="google-map-canvas" ref="map">Map</div> );
  }
});

module.exports = Map;

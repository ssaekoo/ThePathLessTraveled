var React = require('react');
var ReactDOM = require('react-dom');
var TrekStore = require('../../stores/trek_store');
var TrekModal = require('../treks/trek_modal');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var CENTER = {lat: 37.7758, lng: -122.435};
var _markers = {};


var Map = React.createClass({

  getInitialState: function() {
    return({
      treks: TrekStore.filterStore(this.props.searchValue),
      showModalState: false,
      modalLng: 0.0,
      modalLat: 0.0
    });
  },

  updateTreks: function() {
    this.setState({treks: TrekStore.filterStore(this.props.searchValue)});
  },

  recenterMap: function(latLng) {
    this.map.setCenter(latLng);
    this.map.setZoom(5);
  },

  componentWillReceiveProps: function(newProps){
    this.setState({treks: TrekStore.filterStore(newProps.searchValue)});
  },

  componentDidMount: function(){
    this.listenerToken = TrekStore.addListener(this.updateTreks);

    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: this.centerTrekCoords(),
      zoom: 5
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    _markers = {};
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
    var that = this;

    var toggleBounce = function(marker, status) {
        if (status) {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        } else {
          marker.setAnimation(null);
        }
      };

    for (var key in _markers) {
      var trekDoc = document.getElementById('trek-' + key);
      if (trekDoc) {
        (function(k){
          google.maps.event.addDomListener(trekDoc,
            "mouseenter",
            function() {
              toggleBounce(_markers[k], true);
              var lat = _markers[k].position.lat();
              var lng = _markers[k].position.lng();
              that.recenterMap({lat, lng});
            });
            google.maps.event.addDomListener(trekDoc,
              "mouseleave",
              function() {
                toggleBounce(_markers[k], false);
              });
        })(key);
      }
    }
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

    var countries = {};
    var currentLargest = [0, ''];

    this.state.treks.forEach(function(trek) {
      if(countries[trek.location.country] !== undefined) {
        countries[trek.location.country].push(trek);
      } else {
        countries[trek.location.country] = [trek];
      }
    });

    for( var country in countries ) {
      if (countries[country].length > currentLargest[0]) {
        currentLargest = [countries[country].length, country];
      }
    }

    var lat = countries[currentLargest[1]][0].location.latitude;
    var lng = countries[currentLargest[1]][0].location.longitude;
    this.recenterMap({lat, lng});
  },

  // placeMarker: function(location) {
  //   var marker = new google.maps.Marker({
  //       position: location,
  //       map: this.map
  //   });
  // },

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
      that.setState({modalLat: event.latLng.lat(), modalLng: event.latLng.lng()});
      // that.placeMarker(event.latLng);
      that.showModal();
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
    _markers[trek.id] = marker;

    marker.addListener('click', function () {
      that.props.history.pushState(null, 'treks/' + this.trekId, {})
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

  showModal: function(){
    this.setState({showModalState: true});
  },

  render: function(){
    return (<div className="col-md-5 search-map">
              <TrekModal modalLng={this.state.modalLng} modalLat={this.state.modalLat} show={this.state.showModalState}/>
              <div id="search-map-canvas" className="google-map-canvas" ref="map">Map</div>
            </div>
    );
  }
});

module.exports = Map;

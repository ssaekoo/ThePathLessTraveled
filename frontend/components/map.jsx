var React = require('react');
var ReactDOM = require('react-dom');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var CENTER = {lat: 37.7758, lng: -122.435};

var Map = React.createClass({
  componentDidMount: function(){
    console.log('map mounted');
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: this.centerBenchCoords(),
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    this.props.benches.forEach(this.createMarkerFromBench);
  },
});

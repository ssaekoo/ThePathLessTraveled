var React = require('react');
var Search = require('./search');
var BackgroundStore = require('../stores/background_store');
// var NavBar = require('./nav_bar');

var App = React.createClass({
  render: function() {
    // var url = "west-coast-trail.jpg)";
    var url = BackgroundStore.returnBackground();
    document.body.style.backgroundImage = "url('../../assets/west-coast-trail.jpg')";

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;


//landing page link to search

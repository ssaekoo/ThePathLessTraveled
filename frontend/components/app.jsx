var React = require('react');
var Search = require('./search');
// var BackgroundStore = require('../stores/background_store');

var App = React.createClass({
  render: function() {
    document.body.style.backgroundImage = "url('../../assets/west-coast-trail.jpg')";

    return (
      <div id="treks">
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;


//landing page link to search

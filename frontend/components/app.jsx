var React = require('react');
var Search = require('./search');
// var NavBar = require('./nav_bar');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Search/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;

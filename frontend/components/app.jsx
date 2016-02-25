var React = require('react');
var Search = require('./search');


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

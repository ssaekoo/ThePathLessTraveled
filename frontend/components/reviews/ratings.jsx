var React = require('react');
var PropTypes = React.PropTypes;

var Rating = React.createClass({

  render: function() {
    // var stars = (Math.round(this.props.stars * 2) / 2).toFixed(1);
    // console.log(stars);
    // var result = [];
    //
    // for (var i = 1; i <= Math.round( stars * 10 ) / 10;; i++){
    //   result.push(<i className="star">★</i>)
    // }
    //
    //   return (
    //
    //   </div>)
    // }

    return (
        <div className="rating" data-review={this.props.stars}>
          <i className="star-1">★</i>
          <i className="star-2">★</i>
          <i className="star-3">★</i>
          <i className="star-4">★</i>
          <i className="star-5">★</i>
        </div>
    );
  }

});

module.exports = Rating;

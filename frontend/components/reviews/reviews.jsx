var React = require('react');


var ReviewDetail = React.createClass({
  getInitialState: function () {
    return ({ reviews: this.props.reviews });
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({reviews: newProps.reviews});
  },

  render: function () {
    var results = this.state.reviews.map(function(review){
      return(
        <ul key={review.id} className="review">
          <li className="review-title"> {review.title} </li>
          <li className="review-rating"> {review.rating} </li>
          <li className="review-body"> {review.body} </li>
        </ul>
      )
    });
    return(
      <div className="review-container">

        {results}
      </div>
    );
  }
});

module.exports = ReviewDetail;

// <div> City: {this.state.trek.location.city} </div>
// <div> Latitude: {this.state.trek.location.latitude} </div>
// <div> Longitude: {this.state.trek.location.longitude} </div>

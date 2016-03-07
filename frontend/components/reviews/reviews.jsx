var React = require('react');
var ReviewModal = require('./review_modal.jsx');
var Rating = require('./ratings');

var ReviewDetail = React.createClass({
  getInitialState: function () {
    return ({ reviews: this.props.reviews,
              trekId: this.props.trekId,
              showModalState: false});
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({reviews: newProps.reviews});
  },

  showModal: function(){
    this.setState({showModalState: true});
  },

  onStarClick: function(name, value) {
    this.setState({rating: value});
  },

  render: function () {
    var results = this.state.reviews.map(function(review){
      return(
        <ul key={review.id} className="review">
          <h4 className="review-title"> {review.title} </h4>
          <Rating stars={review.rating} />
          <li className="review-body"> {review.body} </li>
        </ul>
      )
    });

    var createReview = '';
    if (typeof CURRENT_USER_ID !== "undefined") {
      createReview = (<button type="button" className="btn btn-warning" onClick={this.showModal}>Write a Review</button>)
    } else {
      createReview = (<h4>You must be signed in to write a review</h4>);
    }


    return(
      <div className="col-xs-12 col-md-7 review-container">
        <div className='create-review-btn'>
          {createReview}
          <ReviewModal trekId={this.state.trekId} show={this.state.showModalState}/>
        </div>
        {results}
      </div>
    );
  }
});

module.exports = ReviewDetail;

var ApiUtil = require('../util/api_util');

var ReviewActions = {};

ReviewActions.requestAllReviews = function () {
  ApiUtil.receiveAllReviews(ReviewActions.receiveAllTreks);
},

ReviewActions.receiveAllReviews = function(reviews) {
  AppDispatcher.dispatch({
    actionType: "RECEIVED_ALL_TREKS",
    reviews: reviews
  });
};

ReviewActions.createReview = function (review) {
  ApiUtil.createSingleReview(review);
};

module.exports = ReviewActions;

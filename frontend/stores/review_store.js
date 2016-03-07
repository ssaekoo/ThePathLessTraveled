var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');

var _reviews = {};

var ReviewStore = new Store(AppDispatcher);

ReviewStore.all = function () {
  var reviews = Object.keys(_reviews).map( function(key) {
    return _reviews[key];
  });
  return reviews.reverse();
};

var resetReviews = function (reviews) {
  _reviews = {};
  reviews.forEach(function(review) {
    _reviews[review.id] = review;
  });
  ReviewStore.__emitChange();
};

ReviewStore.find = function (id) {
  return _reviews[id];
};

ReviewStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "ALL_REVIEWS":
      resetReviews(payload.reviews);
      break;
  }
};

module.exports = ReviewStore;

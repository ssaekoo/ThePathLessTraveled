var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BackgroundStore = new Store(AppDispatcher);

// var _backgrounds = {landing-page: "west-coast-trail.jpg", search-page: "blah.png"};

var _backgrounds = "west-coast-trail.jpg";

BackgroundStore.returnBackground = function() {
  return _backgrounds;
}

BackgroundStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVED_TREKS":
      resetTreks(payload.treks);
      break;
    case "RECEIVED_ALL_TREKS":
      resetTreks(payload.treks);
      break;
  }
};

module.exports = BackgroundStore;

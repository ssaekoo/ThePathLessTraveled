var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var TrekStore = new Store(AppDispatcher);

var _treks = [];

var resetTreks = function(treks){
  _treks = treks;
  TrekStore.__emitChange();
}

TrekStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVED_TREKS":
      resetTreks(payload.treks);
      break;
  }
};

TrekStore.all = function() {
  return _treks.slice(0);
}

TrekStore.find = function(id) {
  var myTrek = {};

  TrekStore.all().forEach(function (trek) {
    if (trek.id === id) {
      myTrek = trek;
    }
  });
  return myTrek;
}

module.exports = TrekStore;

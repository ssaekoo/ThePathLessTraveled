var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var TrekStore = new Store(AppDispatcher);

var _treks = [];

var _tags = {};

var resetTags = function() {
  for (var i = 1; i <= 12; i++){
    _tags[i] = false;
  };
};

var resetTreks = function(treks){
  _treks = treks;
  resetTags();
  TrekStore.__emitChange();
};

var changeTag = function(tag){
  _tags[tag.id] = !_tags[tag.id];
}

TrekStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVED_TREKS":
      resetTreks(payload.treks);
      break;
    case "RECEIVED_ALL_TREKS":
      resetTreks(payload.treks);
      break;
    case "RECEIVED_SINGLE_TREK":
      resetTreks([payload.treks]);
      break;
    case "CHANGE_TAG":
      changeTag(payload);
      break;
  }
};

TrekStore.all = function() {
  return _treks.slice(0);
}

TrekStore.tagsAll = function() {
  return _tags;
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

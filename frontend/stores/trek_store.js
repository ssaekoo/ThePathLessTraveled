var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var TrekStore = new Store(AppDispatcher);

var _treks = [];
var _filteredTreks = [];
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
    case "FILTER_STORE":
      filterStore(payload.searchString);
      break;
  }
};

TrekStore.filterStore = function(filterString) {
  _filteredTreks = [];
  if(filterString.length === 0){
    return TrekStore.all();
  }

  TrekStore.all().forEach(function (trek) {
    var city = trek.location.city;
    var country = trek.location.country;
    var title = trek.title;
    var state = trek.location.state;

    if(city.toLowerCase().indexOf(filterString.toLowerCase()) >= 0 && city){
      _filteredTreks.push(trek);
    } else if(country.toLowerCase().indexOf(filterString.toLowerCase()) >= 0 ){
      _filteredTreks.push(trek);
    } else if(title.toLowerCase().indexOf(filterString.toLowerCase()) >= 0 ){
      _filteredTreks.push(trek);
    } else if(state.toLowerCase().indexOf(filterString.toLowerCase()) >= 0 && state) {
      _filteredTreks.push(trek);
    }
    console.log(trek);
  }.bind(this));

  return _filteredTreks;
}

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

var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var TrekStore = new Store(AppDispatcher);

var _treks = [];
var _tags = {};
var _filteredTreks = [];

var resetTags = function() {
  _tags[1] = false;
  _tags[2] = false;
  _tags[3] = false;
  _tags[4] = false;
  _tags[5] = false;
  _tags[6] = false;
  _tags[7] = false;
  _tags[8] = false;
  _tags[9] = false;
  _tags[10] = false;
  _tags[11] = false;
  _tags[12] = false;
};

var resetTreks = function(treks){
  _treks = treks;
  resetTags();
  TrekStore.__emitChange();
};

var changeTag = function(id){
  _tags[id] = !_tags[id];
};

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
      changeTag(payload.tagId);
      this.filterStore(payload.searchString);
      TrekStore.__emitChange();
      break;
    case "FILTER_STORE":
      this.filterStore(payload.searchString);
      break;
  }
};

TrekStore.filterTags = function(treks) {
  var filteringTags = [];
  var tagFilteredTreks = [];

  for (var key in _tags){
    if (_tags[key]) { filteringTags.push(key) }
  };

  if (filteringTags.length === 0 ) { return treks};

  treks.forEach(function(trek){
    var keepTrek = true;

    filteringTags.forEach (function (tagId){
      var tagFound = false
      trek.tags.forEach (function (trekTag){
        if (parseInt(trekTag.id) === parseInt(tagId)){
          tagFound = true;
        }
      })
      if (tagFound === false) {
        keepTrek = false;
      }
    })
    if (keepTrek === true) { tagFilteredTreks.push(trek) };
    console.log(tagFilteredTreks);
  });

  return tagFilteredTreks;
}

TrekStore.filterStore = function(filterString) {
  _filteredTreks = [];
  if(filterString.length === 0){
    return this.filterTags(TrekStore.all());
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
  }.bind(this));

  return this.filterTags(_filteredTreks);;
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

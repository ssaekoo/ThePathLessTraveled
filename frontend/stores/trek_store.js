var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var TrekStore = new Store(AppDispatcher);

var _treks = [];
var _filteredTreks = [];
var _tags = {};

var resetTags = function() {
  _tags[1] = ["Beginner", false]
  _tags[2] = ["Intermediate", false]
  _tags[3] = ["Expert", false]
  _tags[4] = ["Req_equipment", false]
  _tags[5] = ["Multi_day", false]
  _tags[6] = ["Single_day", false]
  _tags[7] = ["Famous", false]
  _tags[8] = ["Populous", false]
  _tags[9] = ["Deserted", false]
  _tags[10] = ["Water_crossing", false]
  _tags[11] = ["Mountainous", false]
  _tags[12] = ["Family_oriented", false]
};

var resetTreks = function(treks){
  _treks = treks;
  resetTags();
  TrekStore.__emitChange();
};

var changeTag = function(id){
  // _tags[id][1] = !_tags[id][1];
  // var tag_name = _tags[id][0];
  // var myFilteredTreks = [];
  // debugger;
  // if
  //   myFilteredTreks = _filteredTreks.filter(function(trek){
  //     var tag_names = trek.tags.map (function(tag){
  //       return tag.tag_name;
  //     })
  //     tag_names.indexOf(tags[id][1])
  //   });
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

var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util')
var ApiActions = {};


ApiActions.receiveAllTreks = function(treks) {
  AppDispatcher.dispatch({
    actionType: "RECEIVED_ALL_TREKS",
    treks: treks
  });
};

ApiActions.requestAllTreks = function () {
  ApiUtil.fetchAllTreks(ApiActions.receiveAllTreks);
};


ApiActions.receiveTreks = function(treks) {
  AppDispatcher.dispatch({
    actionType: "RECEIVED_TREKS",
    treks: treks
  });
};

ApiActions.receiveSingleTrek = function(trek) {
  AppDispatcher.dispatch({
    actionType: "RECEIVED_SINGLE_TREK",
    treks: trek
  });
};

ApiActions.requestTreksById = function(id) {
  ApiUtil.requestTreksById(id, ApiActions.receiveSingleTrek);
};

ApiActions.requestTreksByLocation = function(location){
  ApiUtil.fetchTreksByLocation(location, ApiActions.receiveTreks);
};

ApiActions.receiveTagChange = function(id) {
  AppDispatcher.dispatch({
    actionType: "CHANGE_TAG",
    tagId: id
  });
};

ApiActions.filterStore = function(myString){
  AppDispatcher.dispath({
    actionType: "FILTER_STORE",
    searchString: myString
  });
};

module.exports = ApiActions;

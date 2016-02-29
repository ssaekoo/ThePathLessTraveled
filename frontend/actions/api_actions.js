var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util')
var ApiActions = {};

ApiActions.requestAllTreks = function () {
  ApiUtil.fetchAllTreks(this.recieveAllTreks);
};

ApiActions.requestTreksByLocation = function(location){
  ApiUtil.fetchTreksByLocation(location, this.receiveTreks);
};


ApiActions.requestTreksById = function(id) {
  ApiUtil.fetchSingleTrek(id, this.receiveSingleTrek);
}

ApiActions.recieveAllTreks = function(treks) {
  AppDispatcher.dispatch({
    actionType: "RECEIVED_ALL_TREKS",
    treks: treks
  });
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

module.exports = ApiActions;

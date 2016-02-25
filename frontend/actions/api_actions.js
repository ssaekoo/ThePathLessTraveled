var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util')
var ApiAction = {};

ApiAction.receiveTreks = function(treks) {
  AppDispatcher.dispatch({
    actionType: "RECEIVED_TREKS",
    treks: treks
  });
}

ApiAction.fetchTreksByLocation = function(){
  AppDispatcher.dispatch({
    actionType: "FETCH_TREKS",
    treks: ApiUtil.fetchTreks()
  });
}

module.exports = ApiAction;

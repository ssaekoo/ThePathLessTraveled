var AppDispatcher = require('../dispatcher/dispatcher');
var ApiActions = require('../actions/api_actions');
var ApiUtil = {};

ApiUtil.fetchTreks = function(location) {
  $.ajax({
    url: "api/treks",
    data: {treks: {location: location}},
    type: "GET",
    success: function(treks){
      AppDispatcher.dispatch({
        actionType: "RECEIVED_TREKS",
        treks: treks
      })
    }
  })
};

module.exports = ApiUtil;

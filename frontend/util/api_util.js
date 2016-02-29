var ApiUtil = {};

ApiUtil.fetchAllTreks = function (callback) {
  $.get('api/treks', {}, function(response){
    callback(response);
  });
};

ApiUtil.fetchTreksByLocation = function(location, callback) {
  $.ajax({
    url: "api/treks",
    data: {treks: {location: location}},
    type: "GET",
    success: function(treks){
      callback(treks);
    }
  })
};

ApiUtil.fetchTreksByLocation = function(location, callback) {
  $.ajax({
    url: "api/treks",
    data: {treks: {location: location}},
    type: "GET",
    success: function(treks){
      callback(treks);
    }
  })
};

ApiUtil.requestTreksById = function(id, callback) {
  $.ajax({
    url: "api/treks/" + id,
    type: "GET",
    success: function(treks){
      callback(treks);
    }
  })
};

module.exports = ApiUtil;

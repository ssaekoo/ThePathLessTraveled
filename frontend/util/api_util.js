var ApiUtil = {};

ApiUtil.fetchAllTreks = function (callback) {
  $.ajax({
    url: "api/treks",
    type: "GET",
    success: function(treks){
      callback(treks);
    }
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

ApiUtil.createReview = function(userAttributes, receiveNewUser, cleanError, showError) {
  $.ajax ({
    url: '/api/users',
    data: {user: userAttributes},
    type: 'POST',
    success: function(user) {
      cleanError();
      receiveNewUser(user);
    },
    error: function(error){
      showError(error.responseJSON.message);
    // do something with errors
    }
  })
};

ApiUtil.fetchCurrentUser = function(callback) {
  $.ajax({
    url: "/api/session",
    type: "GET",
    success: function(data) {
      callback(data);
    }
  });
};

module.exports = ApiUtil;

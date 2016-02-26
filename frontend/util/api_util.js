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

ApiUtil.createUserAccount = function(credentials, receiveNewUser) {
  $.ajax({
    url: 'api/users',
    method: "post",
    data: {user: credentials},
    success: function(user){
              receiveNewUser(user);
            },
    error: function(error, status){
              debugger;
            }
  });
},

module.exports = ApiUtil;

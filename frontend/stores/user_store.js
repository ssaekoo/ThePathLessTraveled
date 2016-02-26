var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

var UserStore = new Store(AppDispatcher);

var _currentUser = {};

var receiveUser = function(user) {
  _currentUser = user;
};

var removeUser = function() {
  _currentUser = {};
};


UserStore.all = function () {
  return _currentUser;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_NEW_USER":
      receiveUser(payload.user);
      UserStore.__emitChange();
      break;
    case "RECEIVE_USER":
      receiveUser(payload.user);
      UserStore.__emitChange();
      break;
    case "REMOVE_CURRENT_USER":
      removeUser();
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;

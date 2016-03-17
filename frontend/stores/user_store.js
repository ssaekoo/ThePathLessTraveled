var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _user = [];

var UserStore = new Store(AppDispatcher);

UserStore.resetUsers = function(newUser) {
  _user = [newUser];
  return _user;
};

UserStore.currentUser = function() {
  return _user[0];
};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "CURRENT_USER_RECIEVED":
      this.resetUsers(payload.user);
      this.__emitChange();
  }
};

module.exports = UserStore;

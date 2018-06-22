const Store = require('electron-store');
const store = new Store();

exports.listUsers = function() {
  if (!store.has('users')) {
    return [];
  }
  return store.get('users');
};

exports.addUser = function(u) {
  if (!store.has('users')){
    store.set('users', []);
  }

  var existingUsers = store.get('users');
  existingUsers.push(u);

  store.set('users', existingUsers);
};

const {ipcRenderer} = require('electron')

window.$ = require('./vendor/jquery.js');

function makeUserListPrefix() {
  return '<ul class="list-group"><li class="list-group-header"><input class="form-control" type="text" placeholder="Search for someone"></li>'
}

function makeUserItem(userObj){
  var html = ''
  html += '<li class="list-group-item">'
  html += '<img class="img-circle media-object pull-left" src="assets/img/avatar1.jpg" width="32" height="32">'
  html += '<div class="media-body">'
  html += '<strong>' + userObj.name + '</strong>'
  html += '<p>' + userObj.title + '</p>'
  html += '</div></li>'
  return html
}

function updateUsersList(users) {
  htmlBuilder = '';
  htmlBuilder += makeUserListPrefix();
  for(i = 0; i < users.length; i++){
    htmlBuilder += makeUserItem(users[i]);
  }
  htmlBuilder += '</ul>';

  $('#view-downloads').html(htmlBuilder);
}

ipcRenderer.on('init-users-reply', (event, arg) => {
  updateUsersList(arg);
});


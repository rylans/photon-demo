window.$ = require('./vendor/jquery.js');

function addUser() {
  var name = $('#add-user-name').val();
  var title = $('#add-user-title').val();

  ipcRenderer.send('add-user', {'name': name, 'title': title});

  $('#add-user-form').trigger('reset');
}

ipcRenderer.on('add-user-reply', (event, arg) => {
  // Check for errors
  // if no errors, then clear form
});

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('add-user-btn');
  btn.addEventListener('click', (e) => { 
    e.preventDefault();
    addUser();
  });
});


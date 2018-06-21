const {shell} = require('electron')
const os = require('os')
const {remote} = require('electron')
const {Menu, MenuItem} = remote

// Build our new menu
var menu = new Menu()
menu.append(new MenuItem({
  label: 'Delete',
  click: function() {
    // Trigger an alert when menu item is clicked
    alert('Deleted')
  }
}))
menu.append(new MenuItem({
  label: 'More Info...',
  click: function() {
    // Trigger an alert when menu item is clicked
    alert('Here is more information')
  }
}))

const notification = {
  title: 'Basic Notification',
  body: 'Short message part'
}

document.addEventListener('DOMContentLoaded', function () {
  var nodeList = document.querySelectorAll('.js-context-menu')

  Array.prototype.forEach.call(nodeList, function (item) {
    item.addEventListener('contextmenu', function (event) {
      console.log(event)
      menu.popup(remote.getCurrentWindow());
    })
  })

  const fileManagerBtn =document.getElementById('manage-files')
  fileManagerBtn.addEventListener('click', (event) => {
    shell.showItemInFolder(os.homedir())
  });

  const notificationButton = document.getElementById('notif');
  notificationButton.addEventListener('click', () => {
    const myNotification = new window.Notification(notification.title, notification)

    myNotification.onclick = () => {
      console.log('Notification clicked')
    }
  })


})


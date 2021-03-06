const {app, BrowserWindow, ipcMain} = require('electron')

const userprovider = require('./js/main/userprovider')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 400,
    'min-width': 500,
    'min-height': 200,
    'accept-first-mouse': true,
    titleBarStyle: 'hidden'
  });

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
   //mainWindow.webContents.openDevTools()


  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});


// IPC handlers
ipcMain.on('init-users', (event, arg) => {
  event.sender.send('init-users-reply', userprovider.listUsers());
});

ipcMain.on('add-user', (event, user) => {
  userprovider.addUser(user);
});

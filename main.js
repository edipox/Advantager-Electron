
const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

let quitApp = function(){ app.quit() }

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1024, height: 768, frame: false });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
});

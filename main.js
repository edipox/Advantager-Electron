
const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

let quitApp = function(){ app.quit() }

app.on('ready', function() {
  var size = { width: 1000, height: 792 };
  mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
    frame: false,
    minWidth: size.width-200,
    minHeight: size.height-200,
    radii: [5,5,5,5],
    maxWidth: size.width,
    // maxHeight: size.height,
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // mainWindow.openDevTools();
});

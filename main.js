const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: __dirname + '/preload.js',
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: true   // 👈 THIS enables webviews
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);
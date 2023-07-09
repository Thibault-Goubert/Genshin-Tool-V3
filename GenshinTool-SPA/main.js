const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require("electron-updater")

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1813,
    height: 1017,
    webPreferences: {
      nodeIntegration: true
    },
    icon: "GenshinTool-SPA/src/assets/icons/icon.ico"
  });

  win.loadURL(`file://${__dirname}/dist/genshin-tool/index.html`);

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on('ready', function()  {
  let result = autoUpdater.checkForUpdatesAndNotify();
  console.log("update result", result);
});

const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require('electron-updater')
const windowStateKeeper = require('electron-window-state');

let win = null;

function createWindow() {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1813,
    defaultHeight: 1017
  });

  win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: {
      nodeIntegration: true
    },
    icon: "GenshinTool-SPA/src/assets/icons/icon.ico",
  });

  console.log(mainWindowState.x, mainWindowState.y, mainWindowState.width, mainWindowState.height);

  mainWindowState.manage(win);

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
  setInterval(() => {
    autoUpdater.checkForUpdatesAndNotify()
  }, 10000)
});

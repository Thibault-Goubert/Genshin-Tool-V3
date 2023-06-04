import { app, BrowserWindow } from 'electron';
import { autoUpdater } from "electron-updater"

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }    
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
  autoUpdater.checkForUpdatesAndNotify();
});

import { app, BrowserWindow, screen } from 'electron';
import { autoUpdater } from "electron-updater"; 
import { windowPosition } from "config.json"

let win: BrowserWindow | any = null ;

function createWindow() {
  win = new BrowserWindow({
    width: 1813,
    height: 1017,
    webPreferences: {
      nodeIntegration: true
    },
    icon: "GenshinTool-SPA/src/assets/icons/icon.ico",
    x: windowPosition.x,
    y: windowPosition.y
  });

  win.loadURL(`file://${__dirname}/dist/genshin-tool/index.html`);

  win.on('close', () => {
    let values = (win as BrowserWindow).getPosition();
    windowPosition.x = values[0];
    windowPosition.y = values[1];
  });

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

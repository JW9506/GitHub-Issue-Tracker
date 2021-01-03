import { app, ipcMain, Menu, shell } from 'electron';
import AppWindow from './AppWindow';

app.allowRendererProcessReuse = false;

let mainWindow: AppWindow | null;

app.on('ready', () => {
  mainWindow = new AppWindow(
    {
      width: 1440,
      height: 768,
    },
    'main'
  );
  mainWindow.on('close', () => {
    mainWindow = null;
  });
});

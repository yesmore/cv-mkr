/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow, ipcMain, dialog } from 'electron';

const ROOT_PATH = path.join(app.getAppPath(), '../');

function isDev() {
  // 通过 webpack.DefinePlugin 定义的构建变量吗
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      webSecurity: false, // 允许加载静态资源
      // enableRemoteModule: true,
      // contextIsolation: false,
    },
  });

  // 创建应用设置窗口
  const settingWindow = new BrowserWindow({
    width: 720,
    height: 240,
    resizable: false, // 设置该窗口不可拉伸宽高
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });

  if (isDev()) {
    // ，在开发环境下，加载的是运行在 7001 端口的 React
    mainWindow.loadURL(`http://127.0.0.1:7001`);
    settingWindow.loadURL(`http://127.0.0.1:7001/setting.html`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 监听渲染进程发的消息并回复
ipcMain.on('get-root-path', (event, arg) => {
  event.reply('reply-root-path', ROOT_PATH);
});

// 应用设置，保存自定义存储路径
ipcMain.on('open-save-resume-path', (event, arg) => {
  dialog
    .showOpenDialog({
      properties: ['openDirectory'],
    })
    .then((result) => {
      event.reply('reply-save-resume-path', result.filePaths);
    })
    .catch((err) => {
      event.reply('reply-save-resume-path', err);
    });
});

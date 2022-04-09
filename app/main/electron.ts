/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow, ipcMain, dialog, Menu } from 'electron';
import customMenu from './customMenu';
import checkVersionUpdate from './updater';
import PKG from '../../package.json';
import './userData';
import './log';

const ROOT_PATH = path.join(app.getAppPath(), '../');

export interface MyBrowserWindow extends BrowserWindow {
  uid?: string;
}

export function isDev() {
  // 通过 webpack.DefinePlugin 定义的构建变量吗
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow: MyBrowserWindow = new BrowserWindow({
    width: 1120,
    height: 700,
    title: 'CV MKr v' + PKG.version,
    icon: '../../assets/icon.ico',
    resizable: isDev(),
    autoHideMenuBar: !isDev(),
    // frame: false,
    // useContentSize: true,
    // center: true, // 是否出现在屏幕居中的位置
    // backgroundColor: '#3f3c37', // 背景色，用于transparent和frameless窗口
    // titleBarStyle: 'hidden', // 标题栏的样式，有hidden、hiddenInset、customButtonsOnHover等
    // transparent: true, // 是否是透明窗口（仅macOS）
    webPreferences: {
      devTools: isDev(),
      nodeIntegration: true,
      webSecurity: false, // 允许加载静态资源
      backgroundThrottling: false, // 当页面被置于非激活窗口的时候是否停止动画和计时器
      // enableRemoteModule: true,
      contextIsolation: false, // 高版本
    },
  });
  mainWindow.uid = 'mainWindow';
  mainWindow.on('closed', () => {
    // mainWindow = null;
    app.quit();
  });

  // 去掉顶部菜单
  // mainWindow.setMenu(null);

  // 创建应用设置窗口
  const settingWindow: MyBrowserWindow = new BrowserWindow({
    width: 720,
    height: 240,
    show: false, // 初始化窗口时不显示
    frame: false,
    resizable: isDev(), // 设置该窗口不可拉伸宽高
    webPreferences: {
      devTools: isDev(),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  settingWindow.uid = 'settingWindow';

  if (isDev()) {
    // ，在开发环境下，加载的是运行在 7001 端口的 React
    mainWindow.loadURL(`http://127.0.0.1:7001`);
    settingWindow.loadURL(`http://127.0.0.1:7001/setting.html`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);
  }

  ipcMain.on('Electron:SettingWindow-hide-event', () => {
    if (settingWindow.isVisible()) {
      settingWindow.hide();
    }
  });
  ipcMain.on('Electron:SettingWindow-min-event', () => {
    if (settingWindow.isVisible()) {
      settingWindow.minimize();
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('ready', () => {
  checkVersionUpdate();
  const menu = Menu.buildFromTemplate(customMenu);
  Menu.setApplicationMenu(menu);
});

app.on('window-all-closed', () => {
  app.quit();
});

// 监听渲染进程发的消息并回复
ipcMain.on('get-root-path', (event, arg) => {
  // fix: 当使用 electron-builder 打包时，会出现路径错误 ROOT_PATH -> __dirname
  event.reply('reply-root-path', isDev() ? ROOT_PATH : __dirname);
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

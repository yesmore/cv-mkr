import { autoUpdater } from 'electron-updater';

function sendStatusToWindow(text) {
  mainWindow.webContents.send('message', text);
}

export default function checkVersionUpdate() {
  autoUpdater.autoDownload = false; // 将自动下载包设置为false

  //检测更新
  // autoUpdater.checkForUpdates();
  autoUpdater.checkForUpdatesAndNotify();

  //监听'error'事件
  autoUpdater.on('error', (err) => {
    sendStatusToWindow('Error in auto-updater. ' + err);
  });

  // 检查更新是否已开始时发出
  autoUpdater.on('checking-for-update', () => {
    sendStatusToWindow('Checking for update...');
  });

  // 检测有可更新的应用包
  autoUpdater.on('update-available', (info) => {
    sendStatusToWindow('Update available.');
  });

  // 检测没有可用更新时发出
  autoUpdater.on('update-not-available', (info) => {
    sendStatusToWindow('Update not available.');
  });

  // 下载可更新的安装包
  autoUpdater.on('update-downloaded', (info) => {
    sendStatusToWindow('Update downloaded');
  });

  // 监听下载进度
  autoUpdater.on('download-progress', (progressObj) => {
    let log_message = 'Download speed: ' + progressObj.bytesPerSecond;
    log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
    log_message = log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')';
    sendStatusToWindow(log_message);
  });
}

// 坑：node_module/electron-updater/out/AppUpdater.js中的require("fs/promises")改为require("fs").promises

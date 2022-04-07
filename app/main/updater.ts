import path from 'path';
import { dialog } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { isDev } from './electron';
import pkg from '../../package.json';

function sendStatusToWindow(text) {
  log.info(text);
  dialog.showMessageBox({
    title: text,
    message: text,
  });
}

export default function checkVersionUpdate() {
  autoUpdater.currentVersion = pkg.version;
  autoUpdater.logger = log;
  autoUpdater.logger.transports.file.level = 'info';
  // autoUpdater.autoDownload = false; // 将自动下载包设置为false

  if (isDev()) {
    autoUpdater.updateConfigPath = path.join(__dirname, '../dev-app-update.yml');
  }

  //检测更新
  autoUpdater.checkForUpdates();
  // autoUpdater.checkForUpdatesAndNotify();

  //监听'error'事件
  autoUpdater.on('error', (error) => {
    dialog.showErrorBox('Error', error == null ? 'unknown' : (error.stack || error).toString());
  });

  // 检查更新是否已开始时发出
  autoUpdater.on('checking-for-update', () => {
    // dialog.showMessageBox({
    //   title: '开始更新',
    //   message: 'Starting update check...',
    // });
  });

  // 检测有可更新的应用包
  autoUpdater.on('update-available', (info) => {
    dialog
      .showMessageBox({
        type: 'info',
        title: '检测到更新',
        message: '新版本已发布，是否现在更新?',
        buttons: ['立即更新', '取消'],
      })
      .then((buttonIndex) => {
        if (buttonIndex === 0) {
          autoUpdater.downloadUpdate();
        }
      });
  });

  // 检测没有可用更新时发出
  autoUpdater.on('update-not-available', (info) => {
    // dialog.showMessageBox({
    //   title: 'No Updates',
    //   message: 'Current version is up-to-date.',
    // });
  });

  // 下载可更新的安装包
  autoUpdater.on('update-downloaded', (info) => {
    dialog
      .showMessageBox({
        title: '安装更新包',
        message: '更新包安装完毕, 即将退出应用以更新',
      })
      .then(() => {
        setImmediate(() => autoUpdater.quitAndInstall());
      });
  });

  autoUpdater.on('download-progress', (progressObj) => {
    // let log_message = 'Download speed: ' + progressObj.bytesPerSecond;
    // log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
    // log_message = log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')';
    // sendStatusToWindow(log_message);
  });
}

// 坑：node_module/electron-updater/out/AppUpdater.js中的require("fs/promises")改为require("fs").promises

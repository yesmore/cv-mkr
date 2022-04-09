import path from 'path';
import { dialog } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { isDev } from './electron';
import PKG from '../../package.json';

function sendStatusToWindow(text) {
  log.info(text);
  dialog.showMessageBox({
    title: text,
    message: text,
  });
}

export default function checkVersionUpdate() {
  autoUpdater.currentVersion = PKG.version;
  autoUpdater.logger = log;
  autoUpdater.logger.transports.file.level = 'info';
  autoUpdater.autoDownload = false; // 将自动下载包设置为false
  // autoUpdater.autoInstallOnAppQuit = true;

  if (isDev()) {
    autoUpdater.updateConfigPath = path.join(__dirname, '../dev-app-update.yml');
  }

  //监听'error'事件
  autoUpdater.on('error', (error) => {
    log.info('检查更新出错');
    log.info(error);
    dialog.showErrorBox('Error', error == null ? 'unknown' : (error.stack || error).toString());
  });

  // 检查更新是否已开始时发出
  autoUpdater.on('checking-for-update', () => {
    // dialog.showMessageBox({
    //   title: '开始检查更新',
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
        detail: '新版本号: ' + info.version + ', 此操作会覆盖当前应用程序',
        buttons: ['立即更新', '取消'],
        defaultId: 0,
      })
      .then((res) => {
        autoUpdater.downloadUpdate();
        // if (res.response == 0) {
        // }
      });
    // autoUpdater.downloadUpdate();
  });

  // 检测没有可用更新时发出
  autoUpdater.on('update-not-available', (info) => {
    // log.info('当前为最新版本');
  });

  // autoUpdater.on('download-progress', (progressObj) => {
  //   let log_message = 'Download speed: ' + progressObj.bytesPerSecond;
  //   log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  //   log_message = log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')';
  //   sendStatusToWindow(log_message);
  // });

  // 下载可更新的安装包
  autoUpdater.on('update-downloaded', (info) => {
    dialog
      .showMessageBox({
        title: '安装更新包',
        message: '更新包安装完毕, 即将退出应用以更新',
      })
      .then(() => {
        autoUpdater.quitAndInstall();
      });
  });

  //检测更新
  autoUpdater.checkForUpdates();
  // autoUpdater.checkForUpdatesAndNotify();
}

// 坑：node_module/electron-updater/out/AppUpdater.js中的require("fs/promises")改为require("fs").promises

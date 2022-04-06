import { dialog } from 'electron';
import { autoUpdater } from 'electron-updater';

export default function checkVersionUpdate() {
  autoUpdater.autoDownload = false; // 将自动下载包设置为false

  //检测更新
  autoUpdater.checkForUpdates();
  // autoUpdater.checkForUpdatesAndNotify();

  //监听'error'事件
  autoUpdater.on('error', (err) => {
    dialog.showErrorBox('Error: ', error == null ? 'unknown' : (error.stack || error).toString());
  });

  // 检查更新是否已开始时发出
  autoUpdater.on('checking-for-update', () => {});

  // 检测有可更新的应用包
  autoUpdater.on('update-available', (info) => {
    dialog
      .showMessageBox({
        type: 'info',
        title: 'Found Updates',
        message: 'Found updates, do you want update now?',
        buttons: ['Sure', 'No'],
      })
      .then((buttonIndex) => {
        if (buttonIndex === 0) {
          autoUpdater.downloadUpdate();
        }
      });
  });

  // 检测没有可用更新时发出
  autoUpdater.on('update-not-available', (info) => {
    dialog.showMessageBox({
      title: 'No Updates',
      message: 'Current version is up-to-date.',
    });
  });

  // 下载可更新的安装包
  autoUpdater.on('update-downloaded', (info) => {
    dialog
      .showMessageBox({
        title: 'Install Updates',
        message: 'Updates downloaded, application will be quit for update...',
      })
      .then(() => {
        setImmediate(() => autoUpdater.quitAndInstall());
      });
  });
}

// 坑：node_module/electron-updater/out/AppUpdater.js中的require("fs/promises")改为require("fs").promises

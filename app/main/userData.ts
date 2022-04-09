/**
 * @desc 解决文件修改权限
 */
import { app, ipcMain } from 'electron';
import path from 'path';
import { fileAction } from '@common/utils';

const appConfigPath = path.resolve(app.getPath('userData'), 'config');

// config 文件夹是否可读
fileAction
  .canRead(appConfigPath)
  .then(() => {
    // config 可读情况下，判断是否存在 theme.config.json
    fileAction.hasFile(`${appConfigPath}/theme.config.json`).catch(() => {
      // 不存在则默认创建
      createThemeConfigJson();
    });
    // Config 可读情况下，判断是否存在 global.config.json
    fileAction.hasFile(`${appConfigPath}/global.config.json`).catch(() => {
      createGlobalConfigJson();
    });
  })
  .catch(() => {
    // Config 文件夹不可读，说明不存在此文件夹，则新增文件夹
    fileAction.mkdirDir(appConfigPath).then(() => {
      // 并默认创建文件
      createThemeConfigJson();
      createGlobalConfigJson();
    });
  });

// 创建默认 theme.config.json
const createThemeConfigJson = () => {
  const initData = {
    name: '主题配置表',
    currentTheme: { id: 'dark', fontColor: '#ffffff', backgroundColor: '#416f5b' },
    themeList: [
      { id: 'dark', fontColor: '#ffffff', backgroundColor: '#27292c' },
      { id: 'blue', fontColor: '#ffffff', backgroundColor: '#35495e' },
      { id: 'green', fontColor: '#ffffff', backgroundColor: '#416f5b' },
      { id: 'purple', fontColor: '#ffffff', backgroundColor: '#54546c' },
      { id: 'princess', fontColor: '#ffffff', backgroundColor: '#945454' },
    ],
  };

  fileAction?.write(`${appConfigPath}/theme.config.json`, JSON.stringify(initData), 'utf-8');
};

// 创建默认 global.config.json
const createGlobalConfigJson = () => {
  const initData = { name: '全局配置表', resumeSavePath: '', latestExportFileName: '' };
  fileAction?.write(`${appConfigPath}/global.config.json`, JSON.stringify(initData), 'utf8');
};

ipcMain.on('Electron:get-userData-path', (event, arg) => {
  event.reply('Electron:reply-userData-path', app.getPath('userData'));
});

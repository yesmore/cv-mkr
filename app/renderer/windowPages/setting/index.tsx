import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks';
import { getUserStoreDataPath } from '@common/utils';
import './index.less';

function Setting() {
  const [resumeSavePath, setResumeSavePath] = useState('');
  // 引入 Hooks，进行读取文件内容和更新内容
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();

  // 在 didMount 周期时，读取配置文件内容
  useEffect(() => {
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      // 如果存在默认路径，以此为主
      if (value?.resumeSavePath) {
        setResumeSavePath(value?.resumeSavePath);
      } else {
        // 否则获取 userData 路径，以 userData 路径为准
        // 更新 global.config.json 中的应用存储路径字段
        getUserStoreDataPath().then((appPath: string) => {
          setResumeSavePath(`${appPath}/cache`);
          updateGlobalConfigFile('resumeSavePath', `${appPath}/cache`);
        });
      }
    });
  }, []);

  // 更改存储路径，发起 IPC 通信
  const onChangePath = () => {
    // 1. 向主进程发送消息，因为 dialog 模块只能在主进程中调用
    ipcRenderer.send('open-save-resume-path', '');
    // 2. 监听从主进程发送回来的消息
    ipcRenderer.on('reply-save-resume-path', (event, arg: string[]) => {
      if (arg) {
        if (arg.length > 0) {
          setResumeSavePath(arg[0]);
          updateGlobalConfigFile('resumeSavePath', arg[0]);
        }
      } else {
        console.log('自定义存储路径失败');
      }
    });
  };

  // 监听 关闭/最小化窗口 事件
  const onHideWindow = () => {
    ipcRenderer.send('Electron:SettingWindow-hide-event');
  };
  const onMinWindow = () => {
    ipcRenderer.send('Electron:SettingWindow-min-event');
  };

  return (
    <div styleName="container">
      <div styleName="menu">
        <div styleName="hide" onClick={onHideWindow}>
          x
        </div>
        <div styleName="min" onClick={onMinWindow}>
          -
        </div>
      </div>
      <div styleName="content">
        <p styleName="label">应用缓存路径(不建议修改)</p>
        <div styleName="input">
          <div styleName="value">{resumeSavePath || '当前存储路径为：'}</div>
          <div styleName="update-btn" onClick={onChangePath}>
            更改路径
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;

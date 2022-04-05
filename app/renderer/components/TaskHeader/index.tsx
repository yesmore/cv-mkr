import React from 'react';
import { ipcRenderer } from 'electron';
import './index.less';

function TaskHeader() {
  const onHideWindow = () => {
    ipcRenderer.send('Electron:SettingWindow-hide-event');
  };
  const onMinWindow = () => {
    ipcRenderer.send('Electron:SettingWindow-min-event');
  };

  return (
    <div styleName="header">
      <div styleName="fake-title-bar">
        <span>CV MKr</span>
        <div styleName="handle-bar">
          <span styleName="icon" type="minus" onClick={onMinWindow} />
          <span styleName="icon" type="setting" />
          <span styleName="icon" type="close" onClick={onHideWindow} />
        </div>
      </div>
    </div>
  );
}

export default TaskHeader;

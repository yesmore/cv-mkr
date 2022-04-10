import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useReadGlobalConfigFile } from '@src/hooks';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';
import TaskButton from '@src/components/TaskButton';
import { fileAction } from '@common/utils';
import './index.less';

function ResumeSetting() {
  const [latestExportFileName, setLatestExportFileName] = useState('');
  const [resumeSavePath, setResumeSavePath] = useState('');
  const initState = useSelector((state: any) => state.resumeModel);
  const readAppConfigFile = useReadGlobalConfigFile();
  const updateResumeHook = useUpdateResumeHook();

  useEffect(() => {
    onGetLatestFileName();
  }, []);

  const onGetLatestFileName = () => {
    readAppConfigFile().then((value: { [key: string]: any }) => {
      if (value?.latestExportFileName) {
        setLatestExportFileName(value.latestExportFileName);
        setResumeSavePath(value.resumeSavePath);
      }
    });
  };

  const onUseLatestState = (task: string) => {
    if (latestExportFileName && fileAction?.canRead(resumeSavePath)) {
      fileAction?.read(`${resumeSavePath}/${latestExportFileName}`).then((latestState: string) => {
        // Object.assign(initState, JSON.parse(latestState));
        latestState = JSON.parse(latestState);
        updateResumeHook(task, latestState);
      });
    }
  };

  return (
    <div styleName="settings">
      <TaskButton styleName="settings-btn" size="small" onClick={() => onUseLatestState('*')}>
        上次导出: {latestExportFileName.slice(0, 10) || '暂无导出记录'}
        <span styleName="settings-pop-info">{latestExportFileName ? '🎨点击使用' : ''}</span>
      </TaskButton>
    </div>
  );
}

export default ResumeSetting;

import React from 'react';
import { useThemeActionHooks } from '@src/hooks';
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';
import TaskInput from '@src/components/TaskInput';
import TaskScrollBox from '@src/components/TaskScrollBox';
import './index.less';

function Resume() {
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();

  return (
    <div styleName="container" style={{ backgroundColor: currentTheme?.backgroundColor }}>
      <div styleName="content">
        <ResumeContent />
      </div>
      {/* <div styleName="header"></div> */}
      <div styleName="toolbar">
        <ResumeAction />
        <ResumeToolbar />
        {/* TODO */}
        {/* <div>
          <p>说明</p>
        </div> */}
      </div>
    </div>
  );
}
export default Resume;

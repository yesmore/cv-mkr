import React from 'react';
import './index.less';
import * as UseTemplateList from './UseTemplate';
import TaskScrollBox from '@src/components/TaskScrollBox';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  return (
    <TaskScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
    </TaskScrollBox>
  );
}
export default ResumeContent;

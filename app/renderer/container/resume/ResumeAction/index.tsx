/**
 * @description 制作简历-操作区
 */
import React from 'react';
import { useHistory } from 'react-router';
import { ROUTER } from '@common/constants';
import TaskButton from '@src/components/TaskButton';
import './index.less';

function ResumeAction() {
  const history = useHistory();
  // 返回首页
  const onBack = () => history.push(ROUTER.root);
  // 导出PDF
  const onExport = () => {};

  return (
    <div styleName="actions">
      <TaskButton size="middle" styleName="back" onClick={onBack}>
        返回
      </TaskButton>
      <TaskButton size="middle" className="export-btn" onClick={onExport}>
        导出PDF
      </TaskButton>
    </div>
  );
}

export default ResumeAction;

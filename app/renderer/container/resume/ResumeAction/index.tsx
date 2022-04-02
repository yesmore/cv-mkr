/**
 * @description 制作简历-操作区
 */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { ROUTER } from '@common/constants';
import TaskButton from '@src/components/TaskButton';
import { toPrintPdf } from '@common/utils';
import TaskModal from '@src/components/TaskModal';
import './index.less';

function ResumeAction() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);

  // 返回首页
  const onBack = () => history.push(ROUTER.root);

  return (
    <div styleName="actions">
      <TaskButton size="middle" styleName="back" onClick={onBack}>
        返回
      </TaskButton>
      <TaskButton size="middle" className="export-btn" onClick={() => setShowModal(true)}>
        导出PDF
      </TaskButton>

      {showModal && (
        <TaskModal.Confirm
          title="确定要打印简历吗？"
          description="请确保信息的正确，目前仅支持单页打印"
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => setShowModal(false),
            },
            submitBtn: {
              isShow: true,
              callback: () => {
                toPrintPdf(`${base?.username}-${contact?.phone}-${work?.job}`);
                setShowModal(false);
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default ResumeAction;

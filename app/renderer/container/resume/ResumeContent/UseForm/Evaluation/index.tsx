/**
 * @description 个人评价Form
 */
import React from 'react';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';
import TaskModal from '@src/components/TaskModal';
import TaskInput from '@src/components/TaskInput';
import './index.less';

interface IProps {
  onClose: () => void;
}

function Evaluation({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const evaluation: string = useSelector((state: any) => state.resumeModel.evaluation);

  return (
    <TaskModal.Dialog
      title="个人评价"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>评 价 ：
          </div>
          <div styleName="right">
            <TaskInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook<string>('evaluation', e.target.value);
              }}
              rows={5}
              value={evaluation || ''}
              placeholder="夸一夸自己有什么亮点"
              allowClear={true}
            />
            <div styleName="tips"> * 可通过 | 分割</div>
          </div>
        </div>
      </div>
    </TaskModal.Dialog>
  );
}

export default Evaluation;

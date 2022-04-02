/**
 * @description 荣誉证书Form
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

function Certificate({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const certificate: string = useSelector((state: any) => state.resumeModel.certificate);

  return (
    <TaskModal.Dialog
      title="荣誉证书"
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
            <span styleName="require">*</span>证 书 ：
          </div>
          <div styleName="right">
            <TaskInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook<string>('certificate', e.target.value);
              }}
              rows={5}
              value={certificate || ''}
              placeholder="互联网+大赛一等奖｜掘金大学骰王｜互联网喝酒大赛进步奖"
              allowClear={true}
            />
            <div styleName="tips"> * 多个证书以 | 分割</div>
          </div>
        </div>
      </div>
    </TaskModal.Dialog>
  );
}

export default Certificate;

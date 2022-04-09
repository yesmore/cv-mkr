/**
 * @description 个人信息Form
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

function Personal({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  // const hobby: string = useSelector((state: any) => state.resumeModel.hobby);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);

  return (
    <TaskModal.Dialog
      title="个人信息"
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
            <span styleName="require">*</span>姓 名 ：
          </div>
          <div styleName="right">
            <TaskInput
              onChange={(e) => {
                // 修改个人基本信息中的姓名字段数据
                updateResumeHook('base/username', e.target?.value || '');
              }}
              value={base?.username || ''}
              placeholder="请输入姓名"
              allowClear={true}
            />
          </div>
        </div>

        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>籍 贯 ：
          </div>
          <div styleName="right">
            <TaskInput
              onChange={(e) => {
                updateResumeHook('base/hometown', e.target?.value || '');
              }}
              value={base?.hometown || ''}
              placeholder="请输入籍贯"
              allowClear={true}
            />
          </div>
        </div>

        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            爱 好 ：
          </div>

          <div styleName="right">
            <TaskInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook('base/hobby', e.target?.value || '');
              }}
              rows={5}
              value={base?.hobby || ''}
              placeholder="特长爱好"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </TaskModal.Dialog>
  );
}

export default Personal;

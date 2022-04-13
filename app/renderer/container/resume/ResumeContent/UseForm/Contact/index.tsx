/**
 * @description 联系方式Form
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
function Contact({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);

  return (
    <TaskModal.Dialog
      title="联系方式"
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
            <span styleName="require">*</span>电 话 ：
          </div>
          <div styleName="right">
            <TaskInput
              onChange={(e) => {
                updateResumeHook<string>('contact/phone', e.target.value);
              }}
              value={contact?.phone || ''}
              placeholder="请输入电话号码"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>邮 箱 ：
          </div>
          <div styleName="right">
            <TaskInput
              onChange={(e) => {
                updateResumeHook<string>('contact/email', e.target.value);
              }}
              value={contact?.email || ''}
              placeholder="请输入邮箱"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            Github ：
          </div>
          <div styleName="right">
            <TaskInput
              onChange={(e) => {
                updateResumeHook<string>('contact/github', e.target.value);
              }}
              value={contact?.github || ''}
              placeholder="Github 地址"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            Juejin ：
          </div>
          <div styleName="right">
            <TaskInput
              onChange={(e) => {
                updateResumeHook<string>('contact/juejin', e.target.value);
              }}
              value={contact?.juejin || ''}
              placeholder="掘金地址"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            博客 ：
          </div>
          <div styleName="right">
            <TaskInput
              onChange={(e) => {
                updateResumeHook<string>('contact/blog', e.target.value);
              }}
              value={contact?.blog || ''}
              placeholder="技术博客"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </TaskModal.Dialog>
  );
}

export default Contact;

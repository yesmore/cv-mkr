/**
 * @description 弹窗组件
 */
import React from 'react';
import './index.less';
import TaskButton from '@src/components/TaskButton';
import { IConfirmModal } from '../types';

function TaskConfirm({
  title,
  width,
  className,
  description,
  renderFooter,
  config = {},
  eleRef,
}: IConfirmModal) {
  const {
    deleteBtn = { isShow: false },
    cancelBtn = { isShow: true },
    submitBtn = { isShow: true },
  } = config;

  return (
    <div styleName="vis-mask">
      <div styleName="center">
        <div
          styleName="vis-confirm-box"
          className={className}
          style={{ width: width || 440 }}
          ref={eleRef}
        >
          <div styleName="vis-confirm-content">
            <p styleName="vis-confirm-content-title">{title || '友情提示'}</p>
            {description && <p styleName="vis-confirm-content-desc">{description}</p>}
          </div>
          {renderFooter || (
            <div styleName="vis-confirm-footer">
              {cancelBtn?.isShow && (
                <TaskButton
                  size="middle"
                  className="vis-confirm-footer-btn vis-confirm-footer-cancel-btn"
                  onClick={() => {
                    cancelBtn?.callback && cancelBtn.callback();
                  }}
                >
                  {cancelBtn?.text || '取消'}
                </TaskButton>
              )}
              {submitBtn?.isShow && (
                <TaskButton
                  size="middle"
                  className="vis-confirm-footer-btn vis-confirm-footer-submit-btn"
                  onClick={() => {
                    submitBtn?.callback && submitBtn.callback();
                  }}
                >
                  {submitBtn?.text || '确定'}
                </TaskButton>
              )}
              {deleteBtn?.isShow && (
                <TaskButton
                  size="middle"
                  className="vis-confirm-footer-btn vis-confirm-footer-delete-btn"
                  onClick={() => {
                    deleteBtn?.callback && deleteBtn.callback();
                  }}
                >
                  {deleteBtn?.text || '退出'}
                </TaskButton>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskConfirm;

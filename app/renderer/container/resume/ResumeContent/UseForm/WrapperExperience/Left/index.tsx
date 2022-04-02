/**
 * @description 专门服务于经验弹窗左侧
 */
import React from 'react';
import TaskButton from '@src/components/TaskButton';
import TaskScrollBox from '@src/components/TaskScrollBox';
import List, { IListProps } from './List';
import './index.less';

interface IProps extends IListProps {
  onAdd: () => void;
}

function Left({ index, experienceList = [], onDelete, onAdd, onChange }: IProps) {
  return (
    <div styleName="layout-left">
      {experienceList.length > 0 && (
        <>
          <TaskScrollBox maxHeight={420}>
            <List
              index={index}
              experienceList={experienceList}
              onChange={onChange}
              onDelete={onDelete}
            />
          </TaskScrollBox>
          <div styleName="action">
            <TaskButton width={112} size="middle" onClick={onAdd}>
              添加条目
            </TaskButton>
          </div>
        </>
      )}
      {experienceList.length === 0 && (
        <div styleName="empty">
          <div styleName="empty-tips">还没有内容，快添加一下吧～</div>
          <div styleName="empty-action">
            <TaskButton width={112} size="middle" onClick={onAdd}>
              添加条目
            </TaskButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Left;

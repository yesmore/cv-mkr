import React, { useEffect, useState, useMemo, useCallback } from 'react';
import TaskModal from '@src/components/TaskModal';
import Left from './Left';
import Right from './Right';
import Menu from './Right/Menu';
import { onAddExperience, onDeleteExperience } from './utils';
import { AdapterExperienceType } from './adapter';
import './index.less';

interface IProps {
  dataList: any[];
  updateDataList: (newDataList: any[]) => void;
  children: React.ReactNode;
}

function WrapperExperience({ children, dataList, updateDataList }: IProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentItem, setCurrentItem] = useState<AdapterExperienceType>({});
  const [experienceList, setExperienceList] = useState<AdapterExperienceType[]>([]);

  // 删除状态
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    deleteIndex: -1,
  });
  // 编辑状态
  const [editModal, setEditModal] = useState({
    showByCancel: false, // 编辑下的取消弹窗
    showBySave: false, // 编辑下的保存弹窗
    status: false, // 编辑的状态
    tempSaveItem: {}, // 暂时保存的数据
    onAfterFn: () => {}, // 操作之后的执行方法
  });

  // 1. 初次当条目列表不为空，默认选中第一条
  useEffect(() => {
    if (dataList && dataList?.length > 0) {
      setCurrentIndex(0);
    }
  }, []);

  // 2. 当条目数据列表修改更新，则更新数据
  useEffect(() => {
    if (dataList && dataList?.length > 0) {
      setExperienceList(dataList || []);
    } else {
      setExperienceList([]);
    }
  }, [dataList]);

  // 3. 当条目索引发生改变，更新当前选中的条目数据
  useEffect(() => {
    if (currentIndex >= 0) {
      setCurrentItem(experienceList[currentIndex]);
    }
  }, [currentIndex, experienceList]);

  // 4. 删除条目
  const onDeleteItem = (index: number) => {
    setDeleteModal({
      show: true,
      deleteIndex: index,
    });
  };
  // 4.1 删除弹窗的取消按钮回调
  const onDeleteCancel = useCallback(() => {
    setDeleteModal({
      show: false,
      deleteIndex: -1,
    });
  }, [currentIndex, deleteModal]);
  // 4.2 删除弹窗的确定按钮回调
  const onDeleteOk = useCallback(() => {
    const newList = onDeleteExperience(deleteModal.deleteIndex, experienceList);
    if (newList.length > 0) setCurrentIndex(0);
    else setCurrentIndex(-1);
    setDeleteModal({
      show: false,
      deleteIndex: -1,
    });
    setExperienceList(newList);
    updateDataList && updateDataList(newList);
  }, [currentIndex, deleteModal]);

  // 5. 修改选中的条目
  const onChangeItem = useCallback(
    (index: number) => {
      // 5.1 当前正在编辑状态
      if (editModal.status) {
        onToggleEditModal({
          showByCancel: true, // 当取消编辑内容，弹窗显示
          onAfterFn: () => {
            // 确定取消，则新增条目
            setCurrentIndex(index);
          },
        });
      } else {
        setCurrentIndex(index);
      }
    },
    [editModal]
  );

  // 6. 添加条目
  const onAddItem = () => {
    // 1. 如果当前属于编辑态
    if (editModal.status) {
      onToggleEditModal({
        showByCancel: true, // 当取消编辑内容，弹窗显示
        onAfterFn: () => {
          // 确定取消，则新增条目
          const newList = onAddExperience(experienceList);
          if (newList.length > 0) {
            // 定位激活刚添加的这条数据
            setCurrentIndex(0);
            setExperienceList(newList);
            updateDataList && updateDataList(newList);
          }
        },
      });
    } else {
      // 2. 不属于编辑态
      const newList = onAddExperience(experienceList);
      if (newList.length > 0) {
        // 定位激活刚添加的这条数据
        setCurrentIndex(0);
        setExperienceList(newList);
        updateDataList && updateDataList(newList);
      }
    }
  };

  // 修改编辑状态
  const onToggleEditModal = useCallback(
    (config) => {
      setEditModal((prev) => {
        return {
          ...prev,
          ...config,
        };
      });
    },
    [editModal]
  );

  // 当点击“保存”按钮时触发
  const onSaveEditValue = useCallback(() => {
    let newList = [...experienceList];
    let item = editModal?.tempSaveItem ? { ...editModal?.tempSaveItem } : { ...currentItem };
    newList[currentIndex] = item;
    setExperienceList(newList);
    updateDataList && updateDataList(newList);
    onToggleEditModal({
      status: false,
    });
  }, [editModal?.tempSaveItem, currentIndex, onToggleEditModal]);

  // 定义 Form 组件中 修改当前条目数据源的方法
  const onChangeCurrentItem = useCallback(
    (newItem: AdapterExperienceType) => {
      onToggleEditModal({
        tempSaveItem: { ...newItem },
      });
      // 是为了保证Form表单显示的数据实时性和一致性
      setCurrentItem(newItem);
    },
    [children, onToggleEditModal]
  );

  const newForm = useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // 给子组件注入两个属性：当前条目与修改当前条目的方法
        return React.cloneElement(child, {
          isDisable: !editModal?.status,
          currentItem,
          onChangeCurrentItem,
        });
      }
      return child;
    });
  }, [children, currentItem, editModal?.status, onChangeCurrentItem]);

  return (
    <div styleName="form">
      <div styleName="left-box">
        <Left
          index={currentIndex}
          experienceList={experienceList}
          onAdd={onAddItem}
          onChange={onChangeItem}
          onDelete={onDeleteItem}
        />
      </div>

      <div styleName="right-box">
        {experienceList.length > 0 && (
          <Right>
            <Menu
              isEdit={editModal?.status}
              currentItem={currentItem}
              onChangeEditStatus={() =>
                onToggleEditModal({ status: true, tempSaveItem: { ...currentItem } })
              }
              onCancelEditValue={() => onToggleEditModal({ showByCancel: true })}
              onSaveEditValue={onSaveEditValue}
            />
            {newForm}
          </Right>
        )}
      </div>

      {deleteModal.show && (
        <TaskModal.Confirm
          title="确定删除条目吗？"
          description="删除后将无法恢复哦～"
          config={{
            cancelBtn: {
              isShow: true,
              callback: onDeleteCancel,
            },
            submitBtn: {
              isShow: true,
              callback: onDeleteOk,
            },
          }}
        />
      )}

      {editModal.showByCancel && (
        <TaskModal.Confirm
          title="你确定放弃编辑的笔记内容？"
          description="放弃后将无法恢复哦～"
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => {
                onToggleEditModal({
                  showByCancel: false,
                });
              },
            },
            submitBtn: {
              isShow: true,
              callback: () => {
                onToggleEditModal({
                  status: false,
                  showByCancel: false,
                  tempSaveItem: {},
                });
                editModal?.onAfterFn && editModal?.onAfterFn();
                setCurrentItem(experienceList[currentIndex]);
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default WrapperExperience;

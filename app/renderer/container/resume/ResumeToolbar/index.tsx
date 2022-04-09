/**
 * @description 编辑简历-工具条模块
 */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TaskScrollBox from '@src/components/TaskScrollBox';
import { RESUME_TOOLBAR_LIST } from '@common/constants';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import { onAddToolbar, onDeleteToolbar } from './utils';
import './index.less';

function ResumeToolbar() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);

  // 初始化工具条列表（require: true/false）
  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      let _addToolbarList: TSResume.SliderItem[] = []; // 已添加
      let _unAddToolbarList: TSResume.SliderItem[] = []; // 未添加
      RESUME_TOOLBAR_LIST.forEach((s: TSResume.SliderItem) => {
        if (s.require) _addToolbarList.push(s); // 必填
        if (!s.require) _unAddToolbarList.push(s); // 非必填
      });
      // 设置
      setAddToolbarList(_addToolbarList);
      setUnAddToolbarList(_unAddToolbarList);
      changeResumeToolbarKeys(_addToolbarList.map((s) => s.key));
    }
  }, []);

  useEffect(() => {
    if (document.body && document.body.clientWidth > 0) {
      setWidth(document.body.clientWidth);
    }
    if (document.body && document.body.clientHeight > 0) {
      setHeight(document.body.clientHeight);
    }
  }, [document.body]);

  // 工具条改变: 触发action更新state
  const changeResumeToolbarKeys = (moduleKeys: string[]) => {
    if (moduleKeys.length > 0) {
      dispatch({
        type: 'templateModel/setStore',
        payload: {
          key: 'resumeToolbarKeys',
          values: moduleKeys,
        },
      });
    }
  };

  // 添加模块
  const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    const nextAddSliderList = onAddToolbar(addToolbarList, moduleToolbar);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onDeleteToolbar(unAddToolbarList, moduleToolbar);
    setUnAddToolbarList(nextUnAddSliderList);
    changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
  };

  // 删除模块
  const onDeleteSliderAction = (moduleSlider: TSResume.SliderItem) => {
    const nextAddSliderList = onDeleteToolbar(addToolbarList, moduleSlider);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onAddToolbar(unAddToolbarList, moduleSlider);
    setUnAddToolbarList(nextUnAddSliderList);
    changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
  };

  return (
    <div styleName="slider" style={{ width: width - 820 > 0 ? width - 820 : 286 }}>
      <TaskScrollBox maxHeight={height - 180}>
        {/* 已填写 */}
        {!!addToolbarList.length && (
          <div styleName="module">
            <div styleName="title">
              <span styleName="line" />
              已添加
            </div>
            <div styleName="content">
              {addToolbarList.map((addSlider: TSResume.SliderItem) => {
                return (
                  <div
                    styleName="box"
                    key={addSlider.key}
                    onClick={() => {
                      Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                        form_name: addSlider.key,
                      });
                    }}
                  >
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{addSlider.name}</div>
                        <div styleName="summary">{addSlider.summary}</div>
                      </div>
                      {addSlider.require && <div styleName="tips">必填</div>}
                      {!addSlider.require && (
                        <div styleName="action">
                          <i styleName="edit" onClick={(e: React.MouseEvent) => {}} />
                          <i
                            styleName="delete"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation && e.stopPropagation();
                              onDeleteSliderAction(addSlider);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* 未填写 */}
        {!!unAddToolbarList.length && (
          <div styleName="module">
            <div styleName="title un-first">
              <span styleName="line" />
              未添加
            </div>
            <div styleName="content">
              {unAddToolbarList.map((unAddSlider: TSResume.SliderItem) => {
                return (
                  <div
                    styleName="box"
                    key={unAddSlider.key}
                    onClick={() => onAddSliderAction(unAddSlider)}
                  >
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{unAddSlider.name}</div>
                        <div styleName="summary">{unAddSlider.summary}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </TaskScrollBox>
    </div>
  );
}

export default ResumeToolbar;

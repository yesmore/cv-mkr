import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskScrollBox from '@src/components/TaskScrollBox';
import TaskButton from '@src/components/TaskButton';
import UseIcon from '@assets/icon/use.png';
import './index.less';

function Navigation() {
  const dispatch = useDispatch();
  const HEADER_HEIGHT = 92;
  const height = document.body.clientHeight;

  const templateList: TSTemplate.Item[] = useSelector(
    (state: any) => state.templateModel.templateList
  );
  const selectTemplate: TSTemplate.Item = useSelector(
    (state: any) => state.templateModel.selectTemplate
  );

  const onSelect = (template: TSTemplate.Item) => {
    dispatch({
      type: 'templateModel/setStore',
      payload: {
        key: 'selectTemplate',
        values: template,
      },
    });
  };

  return (
    <div styleName="navigation">
      <TaskScrollBox maxHeight={height - HEADER_HEIGHT}>
        {templateList &&
          templateList.length > 0 &&
          templateList.map((template: TSTemplate.Item) => {
            return (
              <div styleName="template" key={template?.templateId}>
                <img styleName="cover" src={template?.templatePath} />
                <div styleName="mask">
                  {selectTemplate?.templateId === template?.templateId && (
                    <img styleName="use" src={UseIcon} />
                  )}
                  {selectTemplate?.templateId !== template?.templateId && (
                    <TaskButton
                      size="middle"
                      className="view-btn"
                      onClick={() => onSelect(template)}
                    >
                      预览
                    </TaskButton>
                  )}
                </div>
              </div>
            );
          })}
      </TaskScrollBox>
    </div>
  );
}

export default Navigation;

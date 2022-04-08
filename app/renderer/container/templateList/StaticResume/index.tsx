import { shell } from 'electron';
import React from 'react';
import { useSelector } from 'react-redux';
import * as TemplateList from '@src/container/templates';
import TaskScrollBox from '@src/components/TaskScrollBox';
import TaskEmpty from '@src/components/TaskEmpty';
import TaskButton from '@src/components/TaskButton';
import EmptyPng from '@assets/icon/empty.png';
import Footer from '../Footer';
import './index.less';

// 1. 合法且存在的简历模版，因为我们存在两个模版封面，但只有一个模版组件
const VALID_TEMPLATE = [0];

function StaticResume() {
  const HEADER_HEIGHT = 0; // 距离头部距离
  const height = document.body.clientHeight;
  const selectTemplate: TSTemplate.Item = useSelector(
    (state: any) => state.templateModel.selectTemplate
  );

  // 2. 下面判断该模版是否合法且存在组件模版
  const isIncludeTemplate = VALID_TEMPLATE.includes(selectTemplate.templateIndex);
  const isValidTemplate = selectTemplate.templateId && selectTemplate.templateIndex !== -1;

  return (
    <div styleName="container">
      <TaskScrollBox maxHeight={height - HEADER_HEIGHT}>
        {isValidTemplate && isIncludeTemplate && (
          <>
            {selectTemplate.templateIndex === 0 && <TemplateList.TemplateOne />}
            <Footer />
          </>
        )}
        {/* 3. 缺省页说明 */}
        {isValidTemplate && !isIncludeTemplate && (
          <LackDesc label="暂未开发此模版，欢迎点击下方按钮进行模版贡献" />
        )}
        {!isValidTemplate && <LackDesc label="暂无模版数据，欢迎点击下方按钮进行模版贡献" />}
      </TaskScrollBox>
    </div>
  );
}

export default StaticResume;

const LackDesc = React.memo(({ label }: { label: string }) => {
  return (
    <div styleName="empty">
      <TaskEmpty imgSrc={EmptyPng} label={label} />
      <div styleName="footer">
        <TaskButton
          size="middle"
          className="use-btn"
          onClick={() => {
            shell.openExternal('https://github.com/yesmore/cv-mkr/issues/6');
          }}
        >
          贡献模版
        </TaskButton>
      </div>
    </div>
  );
});

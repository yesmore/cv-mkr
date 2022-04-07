import React from 'react';
import { useThemeActionHooks } from '@src/hooks';
import Header from './Header';
import Navigation from './Navigation';
import StaticResume from './StaticResume';
import TaskRectSize from '@src/components/TaskRectSize';
import './index.less';

function TemplateList() {
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();

  return (
    <div styleName="container" style={{ backgroundColor: currentTheme?.backgroundColor }}>
      {/* <Header /> */}
      <div>
        <TaskRectSize>
          <TaskRectSize.Left>
            <Navigation />
          </TaskRectSize.Left>
          <TaskRectSize.Right>
            <StaticResume />
          </TaskRectSize.Right>
        </TaskRectSize>
      </div>
    </div>
  );
}
export default TemplateList;

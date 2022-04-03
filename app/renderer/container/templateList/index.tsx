/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-06-25 10:36:25
 */
import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import StaticResume from './StaticResume';
import TaskRectSize from '@src/components/TaskRectSize';
import './index.less';

function TemplateList() {
  return (
    <div styleName="container">
      <Header />
      <div styleName="content">
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

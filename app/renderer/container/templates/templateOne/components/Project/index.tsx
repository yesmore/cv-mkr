/**
 * @desc 项目经历
 * @author pengdaokuan
 * @createTime 2021-03-22
 * @lastModify 2021-03-22
 */
import React from 'react';
import './index.less';

function Project() {
  return (
    <div styleName="content">
      <p styleName="label">项目经历 Project</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>
              <span>2021.03 - 2021.05</span>
            </p>
          </div>
          <div styleName="right">
            <p>
              <span>Italk 社交App - 独立开发</span>
            </p>
          </div>
          <div styleName="text">
            <ul styleName="item-box">
              <li styleName="item-content">
                <span>Uni-app + Express 打造的社交聊天App</span>
              </li>
              <li styleName="item-content">
                <span>描述2</span>
              </li>
              <li styleName="item-content">
                <span>描述3</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Project;

/**
 * @desc 在校经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';

function Post() {
  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2019.09-2021.09</p>
            <p>资源部部长</p>
          </div>
          <div styleName="right">
            <p>青年志愿者协会</p>
            <p>计划、组织、协调各年级学生参加志愿活动｜校外社区志愿者活动｜校外社区志愿者活动</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;

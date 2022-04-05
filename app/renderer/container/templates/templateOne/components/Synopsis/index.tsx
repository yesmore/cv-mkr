/**
 * @desc 简单介绍
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';

function Synopsis() {
  return (
    <div styleName="content">
      <p styleName="name">xx熙</p>
      <p styleName="job">前端工程师</p>
      <p styleName="summary">
        {[
          '自学两年前端，从慢慢独自摸索到为他人答疑解惑，对前端技术不断深入和扩展学习，让我保持着对前端的热情',
          '平时喜欢逛 Github，用 hexo 搭建了自己的 博客；喜欢探索新技术，如用 Serverless 平台托管应用',
          '也有 Electron 开发桌面端应用、用 Nodejs 开发 脚手架 工具和开发 组件库 的经验',
          '除此之外也与志同道合的伙伴建立 开发团队，锻炼团队协作能力。',
        ].join('，')}
      </p>
    </div>
  );
}

export default Synopsis;

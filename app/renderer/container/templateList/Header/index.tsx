import React from 'react';
import { useHistory } from 'react-router';
import TaskButton from '@src/components/TaskButton';
import { compilePath } from '@common/utils';
import './index.less';

function Header() {
  const history = useHistory();
  const goBack = () => history.push(compilePath('/resume'));
  return (
    <div styleName="header">
      <TaskButton size="middle" styleName="back" onClick={goBack}>
        返回
      </TaskButton>
      <p styleName="title">简历模版仓库</p>
    </div>
  );
}
export default Header;

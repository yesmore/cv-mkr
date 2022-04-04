import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import TaskButton from '@src/components/TaskButton';
import { compilePath } from '@common/utils';
import { ROUTER, ROUTER_KEY } from '@common/constants';
import './index.less';

function Header() {
  const history = useHistory();
  const selectTemplate = useSelector((state: any) => state.templateModel.selectTemplate);

  const onMadeResume = () => {
    history.push(
      compilePath(ROUTER.resume, {
        fromPath: ROUTER_KEY.templateList,
        templateId: selectTemplate?.templateId,
        templateIndex: selectTemplate?.templateIndex,
      })
    );
  };

  return (
    <div styleName="header">
      <TaskButton size="middle" styleName="back" onClick={onMadeResume}>
        返回
      </TaskButton>
      <p styleName="title">简历模版仓库</p>
    </div>
  );
}
export default Header;

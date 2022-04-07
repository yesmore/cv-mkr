import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useThemeActionHooks } from '@src/hooks';
import TaskButton from '@src/components/TaskButton';
import { compilePath } from '@common/utils';
import { ROUTER, ROUTER_KEY } from '@common/constants';
import './index.less';

function Header() {
  const history = useHistory();
  const selectTemplate = useSelector((state: any) => state.templateModel.selectTemplate);
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();

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
    <div styleName="header" style={{ backgroundColor: currentTheme?.backgroundColor }}>
      <TaskButton size="middle" styleName="back" onClick={onMadeResume}>
        继续编辑
      </TaskButton>
      <p styleName="title">简历模版页</p>
    </div>
  );
}
export default Header;

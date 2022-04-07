import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useThemeActionHooks } from '@src/hooks';
import { ROUTER_KEY, ROUTER } from '@common/constants';
import { compilePath } from '@common/utils';
import TaskButton from '@src/components/TaskButton';
import './index.less';

function Footer() {
  const history = useHistory();
  const selectTemplate = useSelector((state: any) => state.templateModel.selectTemplate);
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();
  // console.log('selectTemplate', selectTemplate);

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
    <div styleName="footer">
      <TaskButton
        size="middle"
        className="use-btn"
        onClick={onMadeResume}
        style={{ backgroundColor: currentTheme?.backgroundColor }}
      >
        以此模版制作简历
      </TaskButton>
    </div>
  );
}

export default Footer;

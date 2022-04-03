import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { ROUTER_KEY, ROUTER } from '@common/constants';
import { compilePath } from '@common/utils';
import TaskButton from '@src/components/TaskButton';
import './index.less';

function Footer() {
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
    <div styleName="footer">
      <TaskButton size="middle" className="use-btn" onClick={onMadeResume}>
        以此模版前往制作简历
      </TaskButton>
    </div>
  );
}

export default Footer;
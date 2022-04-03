import { shell } from 'electron';
import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useThemeActionHooks } from '@src/hooks';
import TaskTheme from '@src/components/TaskTheme';
import Button from '@src/components/HomeButton';
import { ROUTER_ENTRY, ROUTER_KEY, REPO } from '@common/constants';
import { isHttpOrHttpsUrl, compilePath } from '@common/utils';
import './index.less';
import Logo from '@src/assets/logo.png';

function Root() {
  const history = useHistory();
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();
  const selectTemplate = useSelector((state: any) => state.templateModel.selectTemplate);

  const onRouterToLink = (router: TSRouter.Item) => {
    history.push(
      compilePath(ROUTER_KEY.resume, {
        fromPath: ROUTER_KEY.root,
        templateId: selectTemplate?.templateId,
        templateIndex: selectTemplate?.templateIndex,
      })
    );
  };

  const onOpenSRC = () => {
    if (isHttpOrHttpsUrl(REPO)) {
      shell.openExternal(REPO);
    }
  };

  return (
    <div styleName="root" style={{ backgroundColor: currentTheme?.backgroundColor }}>
      <div styleName="container">
        <img src={Logo} alt="logo" styleName="logo" />
        <div styleName="tips">简历定制 & 一键导出</div>
        <div styleName="theme">
          <TaskTheme />
        </div>
        <div styleName="action">
          <Button onClick={() => onRouterToLink()}>现在开始&nbsp;</Button>
        </div>

        {/* { footer } */}
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © {new Date().getFullYear()} |{' '}
              <span href={REPO} target="__blank" onClick={() => onOpenSRC()}>
                Yesmore
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;

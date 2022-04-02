import React from 'react';
import { useHistory } from 'react-router';
import { shell } from 'electron';

import Button from '@src/components/HomeButton';
import { ROUTER_ENTRY, ROUTER_KEY, REPO } from '@common/constants';
import { isHttpOrHttpsUrl } from '@common/utils';

import './index.less';
import Logo from '@src/assets/logo.png';

function Root() {
  const history = useHistory();

  const onRouterToLink = (router: TSRouter.Item) => {
    history.push('/resume');
  };
  const onOpenSRC = () => {
    if (isHttpOrHttpsUrl(REPO)) {
      shell.openExternal(REPO);
    }
  };

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="logo" styleName="logo" />
        <div styleName="tips">简历定制 & 一键导出</div>
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

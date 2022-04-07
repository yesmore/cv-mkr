import React, { useEffect } from 'react';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { HashRouter, Redirect } from 'react-router-dom';
import { useThemeActionHooks, useReadDirAssetsTemplateHooks } from '@src/hooks';
import Home from '@src/container/home';
import Resume from '@src/container/resume';
import TemplateList from '@src/container/templateList';
// import TaskHeader from '@src/components/TaskHeader';
import { ROUTER } from '@common/constants';

function Router() {
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
  const initThemeConfig = useThemeActionHooks.useInitThemeConfig();

  useEffect(() => {
    initThemeConfig();
    readDirAssetsTemplateHooks();
  }, []);

  return (
    <HashRouter>
      {/* <TaskHeader /> */}
      <CacheSwitch>
        <CacheRoute path={ROUTER.root} exact component={Home} />
        <CacheRoute path={ROUTER.resume} exact component={Resume} />
        <CacheRoute path={ROUTER.templateList} exact component={TemplateList} />
        <Redirect from={ROUTER.root} exact to={ROUTER.root} />
      </CacheSwitch>
    </HashRouter>
  );
}
export default Router;

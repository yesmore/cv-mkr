/*
 * @Description:主题组件
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { useThemeActionHooks } from '@src/hooks';
import './index.less';

function TaskTheme() {
  const themeList = useSelector((state: any) => state.themeModel.themeList);
  // 通过这个 Hooks 得到的是一对值：当前状态和一个更新它的函数
  const [currentTheme, setCurrentTheme] = useThemeActionHooks.useGetCurrentTheme();

  // console.log(currentTheme);
  return (
    <div styleName="box">
      {themeList &&
        themeList.length > 0 &&
        [...themeList].map((t: TSTheme.Item, index: number) => {
          return (
            <span
              key={index}
              style={{ backgroundColor: t.backgroundColor }}
              styleName={`${currentTheme?.id === t?.id ? 'active' : ''}`}
              onClick={() => {
                setCurrentTheme && setCurrentTheme(t, true);
              }}
            />
          );
        })}
    </div>
  );
}

export default TaskTheme;

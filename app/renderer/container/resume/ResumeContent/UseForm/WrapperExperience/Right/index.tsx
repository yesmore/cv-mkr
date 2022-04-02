import React from 'react';
import TaskScrollBox from '@src/components/TaskScrollBox';
import './index.less';

interface IProps {
  children: React.ReactNode;
}
function Right({ children }: IProps) {
  const getChild = () => {
    const menuElement = (children as any)[0];
    const formElement = (children as any)[1][0];

    return [
      React.cloneElement(menuElement, {
        ...(children as any)[0],
        key: 'menuElement',
      }),
      React.cloneElement(formElement, {
        ...(children as any)[0],
        key: 'formElement',
      }),
    ];
  };
  return (
    <>
      <div styleName="header">{getChild()[0]}</div>
      <div styleName="content">
        <TaskScrollBox maxHeight={360}>{getChild()[1]}</TaskScrollBox>
      </div>
    </>
  );
}

export default Right;

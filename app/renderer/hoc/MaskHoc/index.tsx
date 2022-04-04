/**
 * @description 为目标组件添加一层蒙层
 */
import React from 'react';
import classnames from 'classnames';
import './index.less';

export type Position = 'top' | 'bottom' | 'center';

const MaskHoc =
  (WrappedComponent: React.ComponentType) =>
  (hocProps: { position?: Position; backgroundColor?: string }) => {
    return class extends React.Component {
      getProps = () => ({
        ...this.props,
      });
      render() {
        const position = hocProps ? hocProps?.position : 'center';
        const backgroundColor = hocProps ? hocProps?.backgroundColor : 'rgba(0, 0, 0, 0.78)';

        return (
          <div styleName="vis-mask" style={{ backgroundColor: backgroundColor }}>
            <div
              styleName={classnames({
                top: position === 'top',
                center: position === 'center',
                bottom: position === 'bottom',
              })}
            >
              <WrappedComponent {...this.getProps()} />
            </div>
          </div>
        );
      }
    };
  };

export default MaskHoc;

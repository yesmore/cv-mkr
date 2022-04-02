import React from 'react';
import './index.less';

function Button(props) {
  return (
    <button onClick={() => props.onClick()} styleName="button">
      <span>{props.children ? props.children : '按钮'} </span>
    </button>
  );
}
export default Button;

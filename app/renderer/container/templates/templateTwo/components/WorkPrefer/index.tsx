/**
 * @desc 简单介绍
 * @author yesmore
 */
import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';

function WorkPrefer() {
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);

  return (
    <div>
      {work?.job && (
        <p styleName="job">
          求职意向: {work?.job}
          <span styleName="city"> {work?.city}</span>
        </p>
      )}
    </div>
  );
}

export default WorkPrefer;

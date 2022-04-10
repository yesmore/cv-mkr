/**
 * @desc 简单介绍
 * @author yesmore
 */
import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';

function Synopsis() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const evaluation: string = useSelector((state: any) => state.resumeModel.evaluation);
  const evaluationList: string[] = useSelector((state: any) => state.resumeModel.evaluationList);

  return (
    <div styleName="content">
      {base?.username && <p styleName="name">{base?.username} (未完善)</p>}
      {work?.job && <p styleName="job">求职意向: {work?.job}</p>}
      {/* {evaluation && <p styleName="summary">{evaluationList?.join('，')}</p>} */}
    </div>
  );
}

export default Synopsis;

/**
 * @desc 简单介绍
 * @author yesmore
 */
import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';

function Evaluation() {
  const evaluation: string = useSelector((state: any) => state.resumeModel.evaluation);
  const evaluationList: string[] = useSelector((state: any) => state.resumeModel.evaluationList);

  return <div>{evaluation && <p styleName="summary">{evaluationList?.join('，')}</p>}</div>;
}

export default Evaluation;

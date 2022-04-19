/**
 * @desc 模板1
 * @author yesmore
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { RESUME_TOOLBAR_MAPS } from '@common/constants';

import BaseInfo from './components/BaseInfo';
import Certificate from './components/Certificate';
import Synopsis from './components/Synopsis';
import Skill from './components/Skill';
import Post from './components/Post';
import Project from './components/Project';
import Work from './components/Work';
import WorkPrefer from './components/WorkPrefer';
import Evaluation from './components/Evaluation';
import './index.less';

function TemplateOne() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const resumeToolbarKeys: string[] = useSelector(
    (state: any) => state.templateModel.resumeToolbarKeys
  );

  // 必须带有id，以方便导出时获取DOM元素内容
  return (
    <div styleName="a4-box">
      <div styleName="flex container" id="visPdf">
        {/* 内容 */}
        <div styleName="center">
          <div styleName="listData">
            {(resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.personal) || base?.username) && (
              <Synopsis />
            )}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workPrefer) && <WorkPrefer />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.evaluation) && <Evaluation />}
            <BaseInfo />
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.certificate) && <Certificate />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <Post />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateOne;

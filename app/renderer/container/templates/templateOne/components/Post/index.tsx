/**
 * @desc 在校经历
 * @author yesmore
 */
import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';

function Post() {
  const schoolExperience: TSResume.SchoolExperience[] = useSelector(
    (state: any) => state.resumeModel.schoolExperience
  );

  return (
    <div styleName="content">
      <p styleName="label">在校经历</p>
      <ul styleName="list">
        {!!schoolExperience?.length &&
          schoolExperience?.map((experience: TSResume.SchoolExperience, index: number) => {
            return (
              <li styleName="flex" key={index}>
                <div styleName="left">
                  <p>
                    {experience?.beginTime}-{experience?.endTime}
                  </p>
                  <p>{experience?.post}</p>
                </div>
                <div styleName="right">
                  <p>{experience?.department}</p>
                  <p>{experience?.content}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Post;

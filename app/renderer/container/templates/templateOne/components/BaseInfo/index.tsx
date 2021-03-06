/**
 * @desc 基本信息
 * @author yesmore
 */
import React from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/template-one.less';

function BaseInfo() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);

  return (
    <div styleName="container">
      <p styleName="title">基本信息</p>
      <ul styleName="content">
        {base?.gender && <li>性别：{base?.gender}</li>}
        {base?.age && <li>年龄：{base?.age}</li>}
        {base?.school && <li>院校：{base?.school}</li>}
        {base?.major && <li>专业：{base?.major}</li>}
        {base?.degree && <li>学历：{base?.degree}</li>}
        {base?.onSchoolTime && base?.onSchoolTime?.beginTime && base?.onSchoolTime?.endTime && (
          <li>
            学年：{base?.onSchoolTime?.beginTime} - {base?.onSchoolTime?.endTime}
          </li>
        )}
        {base?.hometown && <li>籍贯：{base?.hometown}</li>}
        {base?.hobby && <li>爱好：{base?.hobby}</li>}
      </ul>
    </div>
  );
}

export default BaseInfo;

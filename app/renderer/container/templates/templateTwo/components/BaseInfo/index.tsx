/**
 * @desc 基本信息
 * @author yesmore
 */
import React from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/template-two.less';
import './index.less';

function BaseInfo() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);

  return (
    <div styleName="container">
      <p styleName="title">基本信息</p>
      <ul styleName="content baseInfoContent">
        {base?.school && <li>院校：{base?.school}</li>}
        {base?.major && <li>专业：{base?.major}</li>}
        {base?.degree && <li>学历：{base?.degree}</li>}
        {base?.onSchoolTime && base?.onSchoolTime?.beginTime && base?.onSchoolTime?.endTime && (
          <li>
            学年：{base?.onSchoolTime?.beginTime} - {base?.onSchoolTime?.endTime}
          </li>
        )}
        {base?.hometown && <li>籍贯：{base?.hometown}</li>}

        {contact?.phone && <li>电话：{contact?.phone}</li>}
        {contact?.email && <li>邮箱：{contact?.email}</li>}
        {contact?.github && (
          <li>
            Github:{' '}
            <a href={contact?.github}>{contact?.github.replace('https://github.com', 'github')}</a>
          </li>
        )}
        {/* {base?.hobby && <li>爱好：{base?.hobby}</li>} */}
      </ul>
    </div>
  );
}

export default BaseInfo;

/**
 * @desc 联系方式
 * @author pengdaokuan
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { textToHref } from '@common/utils';
import '../../../styles/template-one.less';

function Contact() {
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);

  return (
    <div styleName="container">
      <p styleName="title">联系方式 Contact</p>
      <ul styleName="content">
        {contact?.phone && <li>电话：{contact?.phone}</li>}
        {contact?.email && <li>邮箱：{contact?.email}</li>}
        {contact?.github && (
          <li>
            Github:{' '}
            {textToHref(contact?.github.replace('https://github.com/', ''), contact?.github)}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Contact;

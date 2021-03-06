/**
 * @desc 联系方式
 * @author yesmore
 */
import React from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/template-two.less';

function Contact() {
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);

  return (
    <div styleName="container">
      <p styleName="title">联系方式</p>
      <ul styleName="content">
        {contact?.phone && <li>电话：{contact?.phone}</li>}
        {contact?.email && <li>邮箱：{contact?.email}</li>}
        {contact?.juejin && <li>掘金: {contact?.juejin}</li>}
        {contact?.blog && (
          <li>
            个人博客: <a href={contact?.blog}>{contact?.blog}</a>
          </li>
        )}
        {contact?.github && (
          <li>
            Github:{' '}
            <a href={contact?.github}>{contact?.github.replace('https://github.com', 'github')}</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Contact;

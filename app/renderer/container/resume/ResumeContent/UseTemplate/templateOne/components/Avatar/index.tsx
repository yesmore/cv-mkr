/**
 * @desc 头像
 * @author pengdaokuan
 */
import React from 'react';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';
import uploadIcon from '@src/assets/icon/upload.png';
import TaskButton from '@src/components/TaskButton';
import ImageUpload from '@src/components/TaskUpload/ImageUpload';
import './index.less';

function Avatar() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const updateResumeHook = useUpdateResumeHook();

  // 更新用户的简历头像
  const onUpdateUserAvatar = (avatarUrl: string) => {
    updateResumeHook<string>('base/avatar', avatarUrl);
  };

  return (
    <div styleName="box">
      {!base?.avatar && (
        <ImageUpload
          icon={uploadIcon}
          accept="image/*"
          multiple={false}
          onAfterChange={(files: TSUpload.File[]) => {
            onUpdateUserAvatar(files[0]?.base64URL);
          }}
        />
      )}

      {/* 展示头像 */}
      {base?.avatar && (
        <div styleName="avatar">
          <img src={base?.avatar} />
          <div styleName="mask">
            <TaskButton size="small" className="btn-change" onClick={() => onUpdateUserAvatar('')}>
              更换
            </TaskButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;

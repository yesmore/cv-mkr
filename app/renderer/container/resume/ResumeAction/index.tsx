/**
 * @description 制作简历-操作区
 */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks';
import TaskButton from '@src/components/TaskButton';
import TaskModal from '@src/components/TaskModal';
import {
  compilePath,
  toPrintPdf,
  fileAction,
  createUID,
  intToDateString,
  getAppPath,
} from '@common/utils';
import { ROUTER } from '@common/constants';
import './index.less';

function ResumeAction() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);
  const resume = useSelector((state: any) => state.resumeModel);
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();

  // 返回首页
  const onBack = () => history.push(compilePath(ROUTER.root));

  const onChoseTpl = () => history.push(compilePath('/templateList'));

  // 导出PDF
  const exportPdf = () => {
    toPrintPdf(`${base?.username}-${contact?.phone}-${work?.job}`);
    setShowModal(false);
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      if (value?.resumeSavePath) {
        saveResumeJson(value?.resumeSavePath);
      } else {
        // 👇 2.2 不存在默认路径，则设置默认路径并更新文件内容
        getAppPath().then((appPath: string) => {
          updateGlobalConfigFile('resumeSavePath', `${appPath}cache`);
          saveResumeJson(`${appPath}cache`);
        });
      }
    });
  };

  // 存储数据json
  const saveResumeJson = (resumeSavePath: string) => {
    const date = intToDateString(new Date().valueOf(), '_');
    const prefix = `${date}_${base?.username}_${base?.school}_${work?.job}_${createUID()}.json`;
    // 如果路径中不存在 resumeCache 文件夹，则默认创建此文件夹
    if (resumeSavePath && resumeSavePath.search('cache') > -1) {
      fileAction?.write(`${resumeSavePath}/${prefix}`, JSON.stringify(resume), 'utf8');
    } else {
      fileAction
        ?.mkdirDir(`${resumeSavePath}/cache`)
        .then((path) => {
          if (path) {
            fileAction?.write(`${path}/${prefix}`, JSON.stringify(resume), 'utf8');
          }
        })
        .catch(() => {
          console.log('创建文件夹失败');
        });
    }
  };

  return (
    <div styleName="actions">
      <TaskButton size="middle" styleName="back" onClick={onBack}>
        主页
      </TaskButton>
      <TaskButton size="middle" styleName="back" onClick={onChoseTpl}>
        选择模板
      </TaskButton>
      <TaskButton size="middle" className="export-btn" onClick={() => setShowModal(true)}>
        导出PDF
      </TaskButton>

      {showModal && (
        <TaskModal.Confirm
          title="确定要打印简历吗？"
          description="请确保信息的正确，目前仅支持单页打印"
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => setShowModal(false),
            },
            submitBtn: {
              isShow: true,
              callback: exportPdf,
            },
          }}
        />
      )}
    </div>
  );
}

export default ResumeAction;

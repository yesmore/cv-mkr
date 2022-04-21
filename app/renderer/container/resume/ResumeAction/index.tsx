/**
 * @description 制作简历-操作区
 */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import {
  useReadGlobalConfigFile,
  useUpdateGlobalConfigFile,
  useClickAway,
  useThemeActionHooks,
} from '@src/hooks';
import TaskButton from '@src/components/TaskButton';
import TaskModal from '@src/components/TaskModal';
import TaskScrollBox from '@src/components/TaskScrollBox';
import {
  compilePath,
  toPrintPdf,
  fileAction,
  createUID,
  intToDateString,
  getUserStoreDataPath,
} from '@common/utils';
import { ROUTER, ROUTER_KEY } from '@common/constants';
import './index.less';
import { dialog } from 'electron';

function ResumeAction() {
  const history = useHistory();
  const routerParams = useParams<{ fromPath: string; templateId: string; templateIndex: string }>();
  const [height, setHeight] = useState(0);
  const [baseData, setbaseData] = useState('');
  const [PDFInstence, setPDFInstence] = useState();
  const [exportConfig, setExportConfig] = useState([
    { content: '导出PDF', checked: true },
    { content: '导出图片 (点击图片保存)', checked: false },
    { content: '在线链接 (开发中)', checked: false },
  ]);

  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);
  const resume = useSelector((state: any) => state.resumeModel);
  const fileName = `${base?.username}-${contact?.phone}-${work?.job}`;

  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();
  const { ref, componentVisible, setComponentVisible } = useClickAway(false);

  useEffect(() => {
    if (document.body && document.body.clientHeight > 0) setHeight(document.body.clientHeight);
  }, [document.body]);

  // 返回首页
  const onBack = () => {
    history.push(compilePath(ROUTER.root));
    // console.log(routerParams?.fromPath, ROUTER_KEY.root);
    // if (routerParams?.fromPath === ROUTER_KEY.root) {
    //   history.push(compilePath(ROUTER.root));
    // } else if (routerParams?.fromPath === ROUTER_KEY.templateList) {
    //   history.push(compilePath(ROUTER.templateList));
    // } else {
    //   console.log('here');
    // }
  };

  const onChoseTpl = () => history.push(compilePath('/templateList'));

  // 导出配置
  const onChangeConfig = (index: number) => {
    //复制原来的数组
    var items = [...exportConfig];
    //checked取反
    items[index].checked = !items[index].checked;
    setExportConfig(items);
  };

  // 预览图片
  const onPreview = () => {
    toPrintPdf(fileName).then((res:any) => {
      setbaseData(res.tmpData);
      setComponentVisible(true);
      setPDFInstence(res.PDF);
    });
  };

  // 导出PDF
  const exportPdf = () => {
    if (exportConfig[0].checked) {
      PDFInstence?.save(fileName + '.pdf');
    }
    // TODO
    if (exportConfig[1].checked) {
    }
    if (exportConfig[2].checked) {
    }

    setComponentVisible(false);
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      if (value?.resumeSavePath) {
        saveResumeJson(value?.resumeSavePath);
      } else {
        // 不存在默认路径，则设置默认路径并更新文件内容
        getUserStoreDataPath().then((appPath: string) => {
          updateGlobalConfigFile('resumeSavePath', `${appPath}/cache`);
          saveResumeJson(`${appPath}/cache`);
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
      fileAction
        ?.canRead(resumeSavePath)
        .then(() => {
          fileAction?.write(`${resumeSavePath}/${prefix}`, JSON.stringify(resume), 'utf8');
          updateGlobalConfigFile('latestExportFileName', prefix); // 保存最近导出的文件名
        })
        .catch(() => {
          fileAction
            .mkdirDir(resumeSavePath)
            .then(() => {
              fileAction?.write(`${resumeSavePath}/${prefix}`, JSON.stringify(resume), 'utf8');
            })
            .catch(() => {
              console.log('创建文件夹失败');
            });
        });
    } else {
      fileAction
        ?.mkdirDir(`${resumeSavePath}/cache`)
        .then(() => {
          fileAction?.write(`${resumeSavePath}/cache/${prefix}`, JSON.stringify(resume), 'utf8');
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
        模板
      </TaskButton>
      <TaskButton
        size="middle"
        className="export-btn"
        onClick={() => onPreview()}
        style={{ backgroundColor: currentTheme?.backgroundColor }}
      >
        导出
      </TaskButton>

      {componentVisible && (
        <TaskModal.Dialog
          title="打印简历"
          showFooter={true}
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => setComponentVisible(false),
            },
            submitBtn: {
              isShow: true,
              callback: exportPdf,
            },
          }}
        >
          <div styleName="actions-pre-export">
            <TaskScrollBox maxHeight={height / 1.4}>
              {baseData && exportConfig[1].checked ? (
                <a styleName="action-export-a" href={baseData} download={fileName}>
                  <img styleName="action-export-img" src={baseData} alt="PRE" />
                </a>
              ) : (
                <img styleName="action-export-img" src={baseData} alt="PRE" />
              )}
            </TaskScrollBox>

            <div styleName="actions-export-config">
              <h3>导出配置</h3>
              <div styleName="actions-export-config-list">
                {exportConfig.map((ele, index) => {
                  return (
                    <p key={index}>
                      <input
                        type="checkbox"
                        name=""
                        value={index}
                        checked={ele.checked}
                        onChange={() => onChangeConfig(index)}
                      />
                      <span>{ele.content}</span>
                    </p>
                  );
                })}

                <p>注: 导出说明</p>
              </div>
            </div>
          </div>
        </TaskModal.Dialog>
      )}
    </div>
  );
}

export default ResumeAction;

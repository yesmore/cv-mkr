/*
 * @Description:全局配置表
 */
import path from 'path';
import _ from 'lodash';
import { getUserStoreDataPath, fileAction } from '@common/utils';

/**
 * @description 读取全局配置文件的内容
 */
export function useReadGlobalConfigFile() {
  return () => {
    return new Promise(
      (resolve: (values: { [key: string]: any }) => void, reject: (value: Error) => void) => {
        getUserStoreDataPath().then((appPath: string) => {
          const jsonPath = path.join(appPath, 'config/global.config.json');
          fileAction
            .hasFile(jsonPath)
            .then(async () => {
              const themeConfigValues = await fileAction.read(jsonPath, 'utf-8');
              resolve(JSON.parse(themeConfigValues));
            })
            .catch(() => {
              reject(new Error('config does not exist !'));
            });
        });
      }
    );
  };
}

/**
 * @description 更新配置文件的内容
 * @param {string} updateKey 键
 * @param {any} updateValues 值
 * @param {function} callback 回调函数
 */
export function useUpdateGlobalConfigFile() {
  const readGlobalConfigFile = useReadGlobalConfigFile();
  return (updateKey: string, updateValues: any, callback?: () => void) => {
    getUserStoreDataPath().then((appPath: string) => {
      const jsonPath = path.join(appPath, 'config/global.config.json');

      readGlobalConfigFile().then((values: { [key: string]: any }) => {
        if (values && !!Object.keys(values).length) {
          const nextConfigContent = {
            ...values,
            [`${updateKey}`]: updateValues,
          };
          fileAction.canWrite(jsonPath).then(() => {
            fileAction.write(jsonPath, JSON.stringify(nextConfigContent), 'utf-8').then(() => {
              callback && callback();
            });
          });
        }
      });
    });
  };
}

import { isHttpOrHttpsUrl, compilePath } from './router';
import fileAction from './file';
import { getAppPath, getUserStoreDataPath } from './appPath';
import { createUID } from './createUID';
import { reducePX } from './reducePX';
import { transformStringToNumber } from './transStrToNum';
import { intToDateString, intToTimeString, formatToString } from './time';
import { toPrintPdf } from './htmlToPdf';
import { textToHref } from './textToHref';

export {
  isHttpOrHttpsUrl,
  compilePath,
  fileAction,
  getAppPath,
  getUserStoreDataPath,
  createUID,
  reducePX,
  transformStringToNumber,
  intToDateString,
  intToTimeString,
  formatToString,
  toPrintPdf,
  textToHref,
};

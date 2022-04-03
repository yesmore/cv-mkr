import logger from 'redux-logger';
import RcReduxModel from 'rc-redux-model';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import globalModel from './globalModel';
import resumeModel from './resumeModel';
import templateModel from './templateModel';
import themeModel from './themeModel';

// 调用 RcReduxModel 实例化一下得到最后的 reduxModel
const reduxModel = new RcReduxModel([globalModel, resumeModel, templateModel, themeModel]);

// 无侵入式的使用 Redux，即使你写最原始的 reducer 也照样支持
const reducerList = combineReducers(reduxModel.reducers);

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));

// 模块路径
const ROUTER = {
  root: '/',
  // 规则：/来源/模版ID/模版索引
  resume: '/resume/:fromPath/:templateId/:templateIndex',
  templateList: '/templateList', // 模板列表页
};
export default ROUTER;

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
  templateList: 'templateList',
};

export const REPO = 'https://github.com/yesmore/cv-mkr';

// 入口模块，TS 定义类型必须为 TSRouter.Item
export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历',
  },
  {
    url: REPO,
    key: 'code',
    text: '源码',
  },
  {
    url: ROUTER.templateList,
    key: ROUTER_KEY.templateList,
    text: '模版',
  },
];

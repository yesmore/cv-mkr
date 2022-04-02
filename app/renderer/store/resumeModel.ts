/**
  基本信息
  联系方式
  求职意向
  技能清单
  个人评价
  荣誉证书
  在校经验
  工作经验
  项目经验
 */
const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    base: {
      avatar: '',
      username: 'xx熙',
      area: '四川·成都',
      school: '成都信息工程大学',
      major: '通信工程',
      degree: '本科',
      hometown: '四川',
      hobby: 'coding、摄影、游戏',
      onSchoolTime: {
        beginTime: '2019.09',
        endTime: '2023.06',
      },
    },
    contact: {
      phone: '187****6079',
      email: '3224266014@qq.com',
      github: 'https://github.com/yesmore',
      juejin: '',
      blog: 'https://yesmore.cc',
    },
    work: {
      job: '前端工程师',
      city: '成都｜北京｜杭州',
      cityList: ['成都', '北京', '杭州'],
    },

    skill:
      '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码｜熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件｜阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库｜了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件｜了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件｜了解 Electron，了解 Node.js 以及 Git 团队协作开发工具｜了解设计模式，对于特定场景，能采用合适的设计模式进行解决｜了解 MYSQL，了解数据库优化常用方法｜了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
    skillList: [
      '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码',
      '熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件',
      '阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库',
      '了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件',
      '了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件',
      '了解 Electron，了解 Node.js 以及 Git 团队协作开发工具',
      '了解设计模式，对于特定场景，能采用合适的设计模式进行解决',
      '了解 MYSQL，了解数据库优化常用方法',
      '了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
    ],
    evaluation:
      '自学两年前端，从慢慢独自摸索到为他人答疑解惑，对前端技术不断深入和扩展学习，让我保持着对前端的热情｜平时喜欢逛 Github，用 hexo 搭建了自己的 博客；喜欢探索新技术，如用 Serverless 平台托管应用｜也有 Electron 开发桌面端应用、用 Nodejs 开发 脚手架 工具和开发 组件库 的经验｜除此之外也与志同道合的伙伴建立 开发团队，锻炼团队协作能力。',
    evaluationList: [
      '自学两年前端，从慢慢独自摸索到为他人答疑解惑，对前端技术不断深入和扩展学习，让我保持着对前端的热情',
      '平时喜欢逛 Github，用 hexo 搭建了自己的 博客；喜欢探索新技术，如用 Serverless 平台托管应用',
      '也有 Electron 开发桌面端应用、用 Nodejs 开发 脚手架 工具和开发 组件库 的经验',
      '除此之外也与志同道合的伙伴建立 开发团队，锻炼团队协作能力。',
    ],
    certificate: '全国第二届嵌入式大赛西部赛区三等奖',
    certificateList: ['全国第二届嵌入式大赛西部赛区三等奖'],
    schoolExperience: [
      {
        beginTime: '2019.09',
        endTime: '2021.09',
        post: '资源部部长',
        department: '青年志愿者协会',
        content: '计划、组织、协调各年级学生参加志愿活动｜校外社区志愿者活动｜校外社区志愿者活动',
        parseContent: ['计划、组织、协调各年级学生参加志愿活动', '校外社区志愿者活动'],
      },
    ],
    workExperience: [
      {
        beginTime: '2022.03',
        endTime: '2022.08',
        post: '前端工程师',
        department: 'xxx公司',
        content: '任务1｜任务2',
        parseContent: ['任务1', '任务2'],
      },
    ],
    projectExperience: [
      {
        beginTime: '2021.04',
        endTime: '2021.05',
        projectName: 'Italk 社交App',
        post: '独立开发',
        content: 'Uni-app + Express 打造的社交聊天App | 描述1 描述3',
        parseContent: ['Uni-app + Express 打造的社交聊天App', '描述2', '描述3'],
        date: 1621145137865,
      },
    ],
  },
};

export default resumeModel;

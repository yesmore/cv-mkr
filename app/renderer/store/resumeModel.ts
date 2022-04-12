let initState = {
  base: {
    avatar: '',
    username: 'xxx',
    area: '四川·成都',
    school: '成都信息工程大学',
    major: '通信工程',
    degree: '23届 本科',
    hometown: '四川',
    hobby: 'coding、摄影、游戏',
    onSchoolTime: {
      beginTime: '2019.09',
      endTime: '2023.06',
    },
  },
  contact: {
    phone: '12345678910',
    email: '3224266014@qq.com',
    github: 'https://github.com/yesmore',
    juejin: '',
    blog: 'https://yesmore.cc',
  },
  work: {
    job: '前端工程师',
    city: '成都',
    cityList: ['成都'],
  },

  skill:
    '熟悉 HTML5, CSS3，掌握 DivCss 布局，掌握 css 预处理器 Less、Sass; | 熟练使用ES6新特性和语法，掌握 Typescript 基本使用；| 熟悉 px、em、rem 特性及使用场景，以及通过媒体查询、Flex编写自适应网站；| 熟悉前端渐进式框架 Vue.js 全家桶，掌握小程序（微信原生、uni-app、Taro）开发；| 了解基本网络协议，熟悉 Axios、socket.io(websocket) | 熟悉 Nodejs 开发网站接口和客户端工具，如脚手架开发; | 掌握 Webpack、Vite 特性，了解 CommonJS/CMD/AMD/ES6 的区别；| 掌握代码托管工具 Git 管理项目，掌握包管理器 npm、yarn 使用。| 熟悉使用 Element UI、Vuetify、AntD 等流行 Ui 库开发网站;',
  skillList: [
    '熟悉 HTML5, CSS3，掌握 DivCss 布局，掌握 css 预处理器 Less、Sass; ',
    ' 熟练使用ES6新特性和语法，掌握 Typescript 基本使用；',
    ' 熟悉 px、em、rem 特性及使用场景，以及通过媒体查询、Flex编写自适应网站；',
    ' 熟悉前端渐进式框架 Vue.js 全家桶，掌握小程序（微信原生、uni-app、Taro）开发；',
    ' 了解基本网络协议，熟悉 Axios、socket.io(websocket) ',
    ' 熟悉 Nodejs 开发网站接口和客户端工具，如脚手架开发; ',
    ' 掌握 Webpack、Vite 特性，了解 CommonJS/CMD/AMD/ES6 的区别；',
    ' 掌握代码托管工具 Git 管理项目，掌握包管理器 npm、yarn 使用。',
    ' 熟悉使用 Element UI、Vuetify、AntD 等流行 Ui 库开发网站; ',
  ],
  evaluation: '欢迎加入前端交流群：982545311 | 对前端技术发展保持浓厚兴趣，喜欢探索前端工程化工具.',
  evaluationList: ['对前端技术发展保持浓厚兴趣，喜欢探索前端工程化工具.'],
  certificate: 'CET6证书：流畅阅读英文文档 | 志愿精神：两年社区志愿者经验',
  certificateList: ['CET6证书：流畅阅读英文文档', '志愿精神：两年社区志愿者经验'],
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
      projectName: 'Italk 社交App（移动端）',
      post: '独立开发',
      content:
        '项目概述：独立开发的实时聊天 WebApp | 技术栈：前端(uni-app)、后端(Express、MongoDB)、交互(Socket.IO、Ajax) | 完成模块：客户端界面编写；用户登录模块（JWT）、聊天模块（Socket.io）、添加好友模块、搜索用户模块；设计数据库用户模型，好友消息模型等，编写 Api 并制作文档 | 项目难点：首页排序算法，采用 Socket.IO + 冒泡排序 实现类似 QQ 首页最新消息实时刷新并排序功能；搜索框防抖：为了节约服务器性能，防止页面卡顿，使用防抖限制请求频率 | 项目成果：在 Github 开源并获得 star 50+；线上项目已注册用户超200人。 | 在线预览：http://italk.aoau.top (测试用户名: hr，密码: 123456)',
      parseContent: [
        '项目概述：独立开发的实时聊天 WebApp；',
        '技术栈：前端(uni-app)、后端(Express、MongoDB)、交互(Socket.IO、Ajax)',
        '完成模块：客户端界面编写；用户登录模块（JWT）、聊天模块（Socket.io）、添加好友模块、搜索用户模块；设计数据库用户模型，好友消息模型等，编写 Api 并制作文档；',
        '项目难点：首页排序算法，采用 Socket.IO + 冒泡排序 实现类似 QQ 首页最新消息实时刷新并排序功能；搜索框防抖：为了节约服务器性能，防止页面卡顿，使用防抖限制请求频率；',
        '项目成果：在 Github 开源并获得 star 50+；线上项目已注册用户超200人。',
        '在线预览：http://italk.aoau.top (测试用户名: hr，密码: 123456)',
      ],
      date: 1621145137865,
    },
    {
      beginTime: '2022.02',
      endTime: '2022.03',
      projectName: 'Der-Cli 脚手架工具（客户端）',
      post: '独立开发',
      content:
        '项目概述：一个客户端脚手架工具，解决从项目初始化到发布远程平台的闭环流程需求 | 技术栈：采用原生 Nodejs 编写、Lerna 工程管理工具开发的单仓库多包项目 | 完成模块：① 命令注册模块(通过多进程结合 Commander 开源库实现)；② 初始化项目模块(自动更新、拉取项目模板，生成本地缓存，通过 Package 开源库实现)；③GitFlow 模块(自动初始化本地/远程仓库、自动提交、拉取、合并冲突、生成分支、发布 Tag，通过 SimpleGit 开源库实现)；④ 后台模块（存储项目模板信息，通过 Eggjs 实现） | 项目难点：项目整体架构实现；Git Flow 流程架构设计 | 项目成果：在 Github 开源并获得 star 60+；下载量：1.4k+',
      parseContent: [
        '项目概述：一个客户端脚手架工具，解决从项目初始化到发布远程平台的闭环流程需求。',
        '技术栈：采用原生 Nodejs 编写、Lerna 工程管理工具开发的单仓库多包项目。',
        '完成模块：① 命令注册模块(通过多进程结合 Commander 开源库实现)；② 初始化项目模块(自动更新、拉取项目模板，生成本地缓存，通过 Package 开源库实现)；③GitFlow 模块(自动初始化本地/远程仓库、自动提交、拉取、合并冲突、生成分支、发布 Tag，通过 SimpleGit 开源库实现)；④ 后台模块（存储项目模板信息，通过 Eggjs 实现）；',
        '项目难点：项目整体架构实现；Git Flow 流程架构设计。',
        '项目成果：在 Github 开源并获得 star 60+；下载量：1.4k+。',
        '在线预览：https://der-cli.vercel.app',
      ],
      date: 1621145137865,
    },
    {
      beginTime: '2022.03',
      endTime: '2022.04',
      projectName: '可视化简历生成器（桌面端）',
      post: '独立开发',
      content:
        '项目概述：一个桌面简历生成器，一份数据可套用多种模板，一键导出PDF/图片、导入历史记录； | 技术栈：Electron、React Hooks | 完成模块：① 简历数据录入、暂存与永久存储 (Redux、fs)；② 主题换肤 (通过配置文件jsonfile实现)；③导出简历模块 (html2canvas、JsPdf) | 项目难点：实现简历数据适配多个模板，通过 Redux 实现数据共享 | 项目成果：在 Github 开源并获得 下载量：200+。',
      parseContent: [
        '项目概述：一个桌面简历生成器，一份数据可套用多种模板，一键导出PDF/图片、导入历史记录；',
        '技术栈：Electron、React Hooks',
        '完成模块：① 简历数据录入、暂存与永久存储 (Redux、fs)；② 主题换肤 (通过配置文件jsonfile实现)；③导出简历模块 (html2canvas、JsPdf)',
        '项目难点：实现简历数据适配多个模板，通过 Redux 实现数据共享',
        '项目成果：在 Github 开源并获得 下载量：200+。( 此简历即使用本项目生成 )',
        '在线预览：https://cv-mkr.vercel.app',
      ],
      date: 1621145137865,
    },
  ],
};

const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: initState,
};

export default resumeModel;

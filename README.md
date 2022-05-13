<p align="center">
	<img width='231px' src='https://cdn.jsdelivr.net/gh/yesmore/img/img/cv-logo.png' alt='CV MKr'/>
</p>
<p align="center">🎨简历定制 & 一键导出</p>
<div style='' align="center">
    <img src="https://img.shields.io/github/downloads/yesmore/cv-mkr/total.svg?style=flat-square">
    <img src="https://img.shields.io/github/stars/yesmore/cv-mkr.svg?logo=github&style=flat-square" alt="star"/>
	<img src="https://img.shields.io/github/license/yesmore/cv-mkr?style=flat-square" alt="GPL"/>
</div>

![Home](https://cdn.jsdelivr.net/gh/yesmore/img/cv-mkr/cv-mkr-h.png)

## 应用简介

`CV MKr` 是一款使用 Electron + React 开发的桌面应用软件，可以帮助您快速生成**简历**（适合技术人员的）。

## 功能特性

#### 特点：

- 多种简历模板选择
- 一键导出 PDF、图片、HTML
- 快速导入历史数据、主题更换、自动更新客户端
- **无印良品**！
- 数据仅存储本地, 尊重隐私

#### 未来计划

- 支持在线预览简历
- 跨平台（Mac、Linux）

## 下载软件

Windows 平台: [最新版](https://github.com/yesmore/cv-mkr/releases/latest).

- 点击最新版本下载其**安装包**（ `exe` 文件）手动安装即可，如 [CVMKr-Setup-0.x.x.exe]()；
- 或者点击 `msi` 下载软件包，如 [CVMKr-0.x.x.msi]().

Mac 平台: 敬请期待.

Linux 平台: 敬请期待.

## 使用方法

（1）安装完成后（无脑下一步即可），双击图标启动软件进入首页(略)；

（2）单击 “现在开始” 进入简历编辑页面：

> 简历编辑页

![resume](https://cdn.jsdelivr.net/gh/yesmore/img/cv-mkr/cv-mkr-resume1.png)

（3）点击左侧工具栏项进行信息填写：

> 编辑对话框

![](https://cdn.jsdelivr.net/gh/yesmore/img/cv-mkr/cv-mkr-edit1.png)

单击 “已添加” 工具栏项，会弹出对话框填写信息；

单击 “未添加” 工具栏项，会将该项加入 “已添加” 列表中，继续点击该项，即可弹出对话框填写信息。

（4）单击简历编辑页右上角 “模板” 按钮，进入模板列表页面：

> 模板列表页

![Tpl](https://cdn.jsdelivr.net/gh/yesmore/img/cv-mkr/cv-mkr-tpl1.png)

（5）单击简历编辑页右上角 “导出” 按钮，即可导出为 PDF / 图片 / HTML：

![PDF](https://cdn.jsdelivr.net/gh/yesmore/img/cv-mkr/cv-mkr-export1.png)

> 导出文件名默认为 “姓名-电话-岗位.pdf”

## 开发者须知

### 克隆

```shell
$ git clone git@github.com:yesmore/cv-mkr.git
# or http
$ git clone https://github.com/yesmore/cv-mkr
```

### 本地调试

```shell
# 安装依赖
$ yarn
# 启动渲染进程
$ yarn start:render
# 启动主进程
$ yarn start:main
```

## 参与贡献

本项目支持共建模板开发，完善此应用生态。关于如何参与模板开发，请参考 [#6 Participation and contribution](https://github.com/yesmore/cv-mkr/issues/6) .

## 开发文档

详情参考: [docs](website)

## Licence

CV MKr is open source software licensed as [GPL](LICENSE).

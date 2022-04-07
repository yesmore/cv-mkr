<p align="center">
	<img width='231px' src='https://cdn.jsdelivr.net/gh/yesmore/img/img/cv-mkr-logo2.png' alt='CV MKr'/>
</p>
<p align="center">
    <img src="https://img.shields.io/github/downloads/yesmore/cv-mkr/total.svg?style=flat-square">
    <img src="https://img.shields.io/github/stars/yesmore/cv-mkr.svg?logo=github&style=flat-square" alt="star"/>
	<img src="https://img.shields.io/github/license/yesmore/cv-mkr?style=flat-square" alt="GPL"/>
</p>
<p align="center">🎨简历定制 & 一键导出</p>

## 应用简介

`CV MKr` 是一款使用 Electron 开发的桌面应用软件，可以帮助您快速生成**简历**（内置模板）。

## 功能特性

- 多种简历模板选择（开发中...
- 一键导出PDF
- 快速导入简历数据
- 主题更换
- 支持 windows 10/11 
- ...

## 下载软件

点击这里[下载](https://github.com/yesmore/cv-mkr/releases)

- 点击最新版本下载其**安装包**（ `exe` 文件）即可，如 [CVMKr-Setup-0.2.6.exe](https://github.com/yesmore/cv-mkr/releases/download/v0.2.6/CVMKr-Setup-0.2.6.exe)
- 或者点击 `msi` 文件无需安装下载即用，如 [CVMKr-0.2.6.msi](https://github.com/yesmore/cv-mkr/releases/download/v0.2.6/CVMKr-0.2.6.msi)

## 使用方法

（1）安装完成后（无脑下一步即可），双击图标启动软件进入首页：

> 主页

![Home](https://cdn.jsdelivr.net/gh/yesmore/img/img/cv-mkr-home.png)

（2）单击 “现在开始” 进入简历编辑页面：

> 简历编辑页

![resume](https://cdn.jsdelivr.net/gh/yesmore/img/img/cv-mkr-resume.png)

（3）点击左侧工具栏项进行信息填写：

> 编辑对话框

![](https://cdn.jsdelivr.net/gh/yesmore/img/img/cv-mkr-edit.png)

单击 “已添加” 工具栏项，会弹出对话框填写信息；

单击 “未添加” 工具栏项，会将该项加入 “已添加” 列表中，继续点击该项，即可弹出对话框填写信息。 

（4）单击简历编辑页右上角 “模板” 按钮，进入模板列表页面：

> 模板列表页

![Tpl](https://cdn.jsdelivr.net/gh/yesmore/img/img/cv-mkr-tpl.png)

（5）单击简历编辑页右上角 “导出” 按钮，即可导出为PDF：

![PDF](https://cdn.jsdelivr.net/gh/yesmore/img/img/cv-mkr-export.png)

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

本项目支持共建模板开发，完善此应用生态。如何参与[模板开发]()？

## 开发文档

详情参考: [docs](website)

## Licence

CV MKr is open source software licensed as [GPL](LICENSE)

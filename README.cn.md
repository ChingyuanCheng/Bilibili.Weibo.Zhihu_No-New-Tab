# 哔哩哔哩/微博/知乎禁止新标签页打开链接
🎯 彻底禁止哔哩哔哩、微博和知乎所有新标签页打开行为！拒绝跳转，构建客户端般的浏览器上网环境！！

## 🚀 核心功能
- **强制当前标签页打开链接：** 所有哔哩哔哩/微博/知乎页面内的链接，原本默认会在新标签页中打开（target="_blank"）。此脚本将强制它们在当前标签页打开，避免页面跳转至新标签页。
- **赛事页面主站按钮修复：** 解决B站赛事页面中主站按钮在新标签页打开的问题，确保它总是直接在当前标签页跳转。
- **SPA路由优化：** 针对单页应用（SPA）进行了优化，使得在动态内容加载时仍能有效处理链接，避免失效。

## 📌 安装方法
1. 安装脚本管理器 🔧
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome/Edge/Safari推荐)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox推荐)

2. 一键安装脚本 📦  
   [![安装链接](https://img.shields.io/badge/安装脚本-GreasyFork-green.svg)](https://greasyfork.org/zh-CN/scripts/527007)

3. 访问任意B站、微博、知乎页面测试效果 ✅  
   例如：[B站主站](https://www.bilibili.com) | [B站直播](https://live.bilibili.com) | [知乎](https://www.zhihu.com)

## 📖 更新日志

### v4.0 (2025-02-16)
- 支持了知乎和微博网页版
- 修复部分页面失效

### v3.0 (2025-02-16)
- 完全重写事件拦截逻辑
- 修复赛事页面主站按钮新标签页问题
- 增强SPA路由识别白名单

### v2.0 (2025-02-16)
- 部分重写，优化部分页面无效
- 支持了非Safari浏览器

### v1.0.0 (2025-02-15)
- 初始发布：基础链接拦截功能，仅Safari支持

## 🤝 参与贡献
欢迎通过以下方式参与改进：
1. 提交BUG报告：[问题追踪](https://github.com/ChingyuanCheng/Bilibili.Weibo.Zhihu_No-New-Tab/issues)
2. 发起功能请求：[功能建议](https://github.com/ChingyuanCheng/Bilibili.Weibo.Zhihu_No-New-Tab/issues)
3. 直接贡献代码：🚀 [Fork仓库](https://github.com/ChingyuanCheng/Bilibili.Weibo.Zhihu_No-New-Tab/fork)

## 📜 许可证
MIT License © 2025 [ChingyuanCheng](https://github.com/ChingyuanCheng)

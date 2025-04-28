# No New Tab for Chinese Top Websites
# 哔哩哔哩/微博/知乎禁止新标签页打开链接
The README of this project has documentation in both English and Chinese.

中文说明可点击下方：
- [简体中文](README.cn.md)


# No New Tab for Chinese Top Websites
🎯 Completely disable all new tab opening behavior on Bilibili, Weibo, Zhihu and RedNote! Say no to redirects and enjoy a seamless browsing experience like a native app!

## 🚀 Core Features
- **Force links to open in the current tab:** All links on Bilibili, Weibo, and Zhihu that would normally open in a new tab (target="_blank") will now open in the current tab, preventing unnecessary new tabs.
- **Fix for Bilibili Match Page Home Button:** Ensures the home button on Bilibili's match pages always redirects in the current tab instead of opening a new one.
- **SPA Routing Optimization:** Optimized for Single Page Applications (SPA), ensuring dynamic content links are handled correctly without breaking functionality.

## 📌 Installation
1. Install a script manager 🔧
   - [Tampermonkey](https://www.tampermonkey.net/) (Recommended for Chrome/Edge/Safari)
   - [Greasemonkey](https://www.greasespot.net/) (Recommended for Firefox)

2. Install the script with one click 📦  
   [![Install Link](https://img.shields.io/badge/Install_Script-GreasyFork-green.svg)](https://greasyfork.org/zh-CN/scripts/527007)

3. Visit any Bilibili, Weibo, or Zhihu page to test the effect ✅  
   Examples: [Bilibili Main Site](https://www.bilibili.com) | [Bilibili Live](https://live.bilibili.com) | [Zhihu](https://www.zhihu.com)

# Existed Bug
- It doesn't work in comments area of Bilibili

# 📖 Changelog

### v.4.1 (2025-04-28)
- Added support for RedNote

### v4.0 (2025-02-16)
- Added support for Zhihu and Weibo web versions
- Fixed issues on certain pages

### v3.0 (2025-02-16)
- Completely rewrote the event interception logic
- Fixed the new tab issue with the home button on Bilibili's match pages
- Enhanced SPA routing whitelist

### v2.0 (2025-02-16)
- Partially rewritten to optimize behavior on certain pages
- Added support for non-Safari browsers

### v1.0.0 (2025-02-15)
- Initial release: Basic link interception, Safari-only support

## 🤝 Contributing
Welcome to contribute in the following ways:
1. Submit bug reports: [Issue Tracker](https://github.com/ChingyuanCheng/Bilibili.Weibo.Zhihu_No-New-Tab/issues)
2. Request new features: [Feature Suggestions](https://github.com/ChingyuanCheng/Bilibili.Weibo.Zhihu_No-New-Tab/issues)
3. Contribute code directly: 🚀 [Fork Repository](https://github.com/ChingyuanCheng/Bilibili.Weibo.Zhihu_No-New-Tab/fork)

## 📜 License
MIT License © 2025 [ChingyuanCheng](https://github.com/ChingyuanCheng)

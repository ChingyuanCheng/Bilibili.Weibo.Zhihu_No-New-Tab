# Bilibili No New Tab

This project has documentation in both English and Chinese.

- [English Version](README.md)
- [中文版本](README.cn.md)

# Bilibili No New Tab
🎯 Completely disable all new tab opening behavior on Bilibili! Covers all scenarios including main site, live streaming, match pages, game center, and more.

## 🚀 Core Features
- **Force Links to Open in the Current Tab:** All links within Bilibili pages, which would normally open in a new tab (target="_blank"), are forced to open in the current tab.
- **Fix for Main Site Button on Match Pages:** Resolves the issue where the main site button on match pages would open in a new tab, ensuring it always redirects in the current tab.
- **SPA Routing Optimization:** Optimizes the script for Bilibili’s single-page applications (SPA), ensuring it handles dynamic content loading and links correctly without failure.

## 📌 Installation
1. Install a script manager 🔧
   - [Tampermonkey](https://www.tampermonkey.net/) (Recommended for Chrome/Edge/Safari)
   - [Greasemonkey](https://www.greasespot.net/) (Recommended for Firefox)

2. Install the script with one click 📦  
   [![Install Link](https://img.shields.io/badge/Install_Script-GreasyFork-green.svg)](https://greasyfork.org/en/scripts/527007-bilibili-禁止新标签页打开链接?locale_override=1)

3. Visit any Bilibili page to test the effect ✅  
   Examples: [Main Site](https://www.bilibili.com) | [Live Streaming](https://live.bilibili.com) | [Match Page](https://www.bilibili.com/match)

## 📖 Changelog
### v3.0 (2025-02-16)
- Completely rewrote the event interception logic
- Fixed the new tab issue with the main site button on match pages
- Enhanced SPA routing whitelist

### v2.0 (2025-02-16)
- Partially rewritten to optimize ineffective behavior on certain pages
- Added support for non-Safari browsers

### v1.0.0 (2025-02-15)
- Initial release: Basic link interception, Safari-only support

## 🤝 Contributing
Welcome to contribute in the following ways:
1. Submit bug reports: [Issue Tracker](https://github.com/ChingyuanCheng/bilibili-no-new-tab/issues)
2. Request new features: [Feature Suggestions](https://github.com/ChingyuanCheng/bilibili-no-new-tab/issues)
3. Contribute code directly: 🚀 [Fork Repository](https://github.com/ChingyuanCheng/bilibili-no-new-tab/fork)

## 📜 License
MIT License © 2025 [ChingyuanCheng](https://github.com/ChingyuanCheng)

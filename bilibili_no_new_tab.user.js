// ==UserScript==
// @name         Bilibili 禁止新标签页打开链接
// @name:en      Bilibili No New Tab
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  让哔哩哔哩所有链接在当前标签页打开
// @description:en Force all Bilibili links to open in the current tab instead of a new tab
// @author       ChingyuanCheng
// @license      MIT
// @match        *://www.bilibili.com/*
// @match        *://t.bilibili.com/*
// @match        *://space.bilibili.com/*
// @grant        none
// @run-at       document-end
// @downloadURL https://update.greasyfork.org/scripts/527007/Bilibili%20%E7%A6%81%E6%AD%A2%E6%96%B0%E6%A0%87%E7%AD%BE%E9%A1%B5%E6%89%93%E5%BC%80%E9%93%BE%E6%8E%A5.user.js
// @updateURL https://update.greasyfork.org/scripts/527007/Bilibili%20%E7%A6%81%E6%AD%A2%E6%96%B0%E6%A0%87%E7%AD%BE%E9%A1%B5%E6%89%93%E5%BC%80%E9%93%BE%E6%8E%A5.meta.js
// ==/UserScript==

(function() {
    'use strict';

    /**
     * 移除所有 target="_blank" 以确保链接在当前标签页打开。
     * Remove all target="_blank" to ensure links open in the current tab.
     */
    function modifyLinks() {
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            link.removeAttribute('target');
            link.rel = "noopener noreferrer"; // 额外的安全性 / Extra security
        });
    }

    // 初始修改 / Initial modification
    modifyLinks();

    // 监听动态加载的内容（适用于 AJAX 加载的页面）
    // Observe dynamically loaded content (for AJAX-loaded pages)
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                modifyLinks();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();

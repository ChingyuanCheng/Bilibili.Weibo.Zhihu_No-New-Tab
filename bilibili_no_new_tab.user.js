// ==UserScript==
// @name         哔哩哔哩/微博/知乎禁止新标签页打开链接
// @name:en      Bilibili/Weibo/Zhihu No New Tab
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  让哔哩哔哩、微博、知乎所有链接在当前标签页打开
// @description:en Force all Bilibili, Weibo, and Zhihu links to open in the current tab instead of a new tab
// @author       ChingyuanCheng
// @license      MIT
// @match        *://*.bilibili.com/*
// @match        *://*.weibo.com/*
// @match        *://*.zhihu.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // 判断是否为支持的域名
    function isSupportedDomain(url) {
        try {
            const u = new URL(url, location.href);
            return (
                u.hostname.endsWith('.bilibili.com') ||
                u.hostname === 'bilibili.com' ||
                u.hostname.endsWith('.weibo.com') ||
                u.hostname === 'weibo.com' ||
                u.hostname.endsWith('.zhihu.com') ||
                u.hostname === 'zhihu.com'
            );
        } catch {
            return false;
        }
    }

    // 判断是否为赛事页面（仅B站）
    function isMatchPage() {
        return location.pathname.startsWith('/match/');
    }

    // 判断是否为知乎问题或搜索链接
    function isZhihuQuestionOrSearchLink(url) {
        try {
            const u = new URL(url, location.href);
            return (
                u.pathname.startsWith('/question/') || // 问题链接
                u.pathname.startsWith('/search') // 搜索链接
            );
        } catch {
            return false;
        }
    }

    /**
     * 核心拦截：处理所有可能的跳转方式
     */
    function interceptAllNavigations() {
        // 拦截 window.open
        const originalOpen = window.open;
        window.open = function (url, target, features) {
            if (typeof url === 'string' && isSupportedDomain(url)) {
                console.log(`[全局拦截] window.open: ${url}`);
                location.href = url;
                return null;
            }
            return originalOpen(...arguments);
        };

        // 拦截所有链接点击（包括动态生成和事件委托）
        document.addEventListener(
            'click',
            function (event) {
                let target = event.target;
                while (target && target.tagName !== 'A') {
                    target = target.parentElement;
                }

                if (target?.tagName === 'A') {
                    const href = target.getAttribute('href');
                    if (href && isSupportedDomain(href)) {
                        // 特殊处理B站赛事页面主站按钮
                        if (isMatchPage() && href === 'https://www.bilibili.com') {
                            console.log(`[赛事页面拦截] 主站跳转: ${href}`);
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            location.href = href;
                        }
                        // 特殊处理知乎问题和搜索链接
                        else if (
                            location.hostname.includes('zhihu.com') &&
                            isZhihuQuestionOrSearchLink(href)
                        ) {
                            console.log(`[知乎拦截] 问题/搜索链接: ${href}`);
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            location.href = href;
                        }
                        // 处理常规链接
                        else if (target.target === '_blank' || event.ctrlKey) {
                            console.log(`[全局拦截] <a> 跳转: ${href}`);
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            location.href = href;
                        }
                    }
                }
            },
            true // 捕获阶段处理
        );
    }

    /**
     * 动态链接处理
     */
    function handleDynamicLinks() {
        // 初始处理
        modifyLinks();

        // 观察动态内容
        new MutationObserver((mutations) => {
            mutations.forEach(() => modifyLinks());
        }).observe(document.body, {
            childList: true,
            subtree: true,
        });

        function modifyLinks() {
            document.querySelectorAll('a').forEach((a) => {
                if (isSupportedDomain(a.href)) {
                    // 移除所有新标签页属性
                    a.removeAttribute('target');
                    a.removeAttribute('data-target-new');

                    // 特殊处理B站赛事页面主站按钮
                    if (isMatchPage() && a.href === 'https://www.bilibili.com') {
                        a.href = a.href.replace(/(\?|&)spm_id_from=[^&]*/, '');
                    }
                }
            });
        }
    }

    // 初始化
    function init() {
        interceptAllNavigations();
        handleDynamicLinks();
    }

    // 启动
    init();
})();

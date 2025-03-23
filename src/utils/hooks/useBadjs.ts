// src/hooks/useBadjs.ts
import { useEffect } from 'react';
import BJ_REPORT from 'badjs-report';
// 定义 BadJS 初始化配置
const badjsConfig = {
  id: 1, // 替换为你的项目 ID
  url: '/feReportError', // 替换为你的上报地址
  delay: 1000, // 延迟上报时间
  ignore: [/Script error/i], // 忽略的错误类型
  random: 1, // 抽样上报的概率
  repeat: 5, // 重复上报次数限制
};
// 自定义 Hook, 用于初始化 BadJS
export const useBadjs = () => {
    useEffect(() => {
        // 检查是否已经初始化 BadJS
        if (!window.isAllReadyBadjs && BJ_REPORT) {
            BJ_REPORT.init(badjsConfig);
            window.isAllReadyBadjs = true;
        }
    }, []);
};
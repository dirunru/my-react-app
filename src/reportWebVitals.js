// 项目的性能分析
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // 最大内容渲染时间：指的是从用户请求网址到窗口中渲染最大可见内容所需要的时间
      getFID(onPerfEntry); // 首次输入延迟：指的是从用户首次与网页互动（点击链接、按钮等）到浏览器响应此次互动之间的时间。用于判断网页进入互动状态的时间
      getFCP(onPerfEntry); // 首次内容绘制，标记浏览器渲染来自 DOM 第一位内容的时间点，内容可能是文本、图像等元素。
      getLCP(onPerfEntry); // 用户请求网址到窗口中渲染最大可见内容所需要的时间（最大可见内容通常是图片或者视频，或者大块的文本）
      getTTFB(onPerfEntry); // 首字节到达的时间点
    });
  }
};

export default reportWebVitals;

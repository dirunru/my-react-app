import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode></React.StrictMode> :会导致useEffect内的参数执行两次之所以执行两次，是为了模拟立即卸载组件和重新挂载组件
  <HashRouter>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FA541C",
          borderRadius: 2,
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </HashRouter>
);

reportWebVitals();

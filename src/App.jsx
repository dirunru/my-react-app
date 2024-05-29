import React, { PureComponent } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./styles/app.module.css";
import About from "./pages/about";
import { ConfigProvider } from "antd";

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "red",
              borderRadius: 2,
              colorBgContainer: "#f6ffed",
            },
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ConfigProvider>
      </div>
    );
  }
}

export default App;

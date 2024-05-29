import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./styles/app.module.css";
import About from "./pages/about";
import { ConfigProvider } from "antd";

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#FA541C",
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

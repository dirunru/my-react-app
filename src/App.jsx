import React, { PureComponent } from "react";

import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

export class App extends PureComponent {
  render() {
    return (
      <div className=" app">
        <div className="header">
          {/* 设置组件跳转 */}
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/about">关于</NavLink>
        </div>
        <hr />
        <div className="content">
          {/* 映射关系 : path => Component */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;

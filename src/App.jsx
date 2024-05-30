import React, { Children, useState } from "react";
import { useNavigate, Routes, Route, useRoutes } from "react-router-dom";

import styles from "./styles/app.module.scss";
import { DownOutlined } from "@ant-design/icons";
import { Layout, Dropdown, Space, theme, Menu, message } from "antd";
//引入路由表
import { routes, RouterView } from "./router";

// 布局组件
const { Header, Content, Footer, Sider } = Layout;
// 处理路由
let items = [];
console.log("./router", routes, RouterView);
Object.values(routes).map((item, index) => {
  items.push({
    key: item.path,
    icon: item.icon ? React.createElement(item.icon) : "",
    label: item.title,
    path: item.path,
    children: item.children?.map((it) => {
      return {
        key: item.path + it?.path,
        label: it.title,
        icon: React.createElement(it.icon),
        path: item.path + "/" + it.path,
      };
    }),
  });
});
let menuArr = [
  {
    key: "1",
    label: "Item 1",
  },
];

const App = () => {
  // 主题
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [pathStatu, setPathStatu] = useState("/home");
  const [username, setUsername] = useState("游客");

  // 点击路由进行跳转
  const navigate = useNavigate();
  const onClick = (item) => {
    setPathStatu(item.key);
    navigate(item.key, { replace: true });
  };
  // 退出登录
  const logout = () => {
    message.success("退出成功，即将返回登录页");
    localStorage.clear(); // 清除localStorage中的数据
    setTimeout(() => navigate("/login"), 1500);
  };

  //生成路由规则
  return (
    <div className="app">
      <Layout hasSider>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathStatu]}
            items={items}
            onClick={(item) => onClick(item)}
          />
        </Sider>
        <Layout
          style={{
            marginLeft: 200,
          }}
        >
          <Header
            style={{
              height: "60px",
              background: colorBgContainer,
            }}
          >
            <Dropdown
              menu={{
                menuArr,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Click me
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
            }}
          >
            <div
              style={{
                padding: 24,
                textAlign: "center",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
              className={styles.content}
            >
              <div
                style={{
                  padding: 24,
                  minHeight: "75vh",
                  background: colorBgContainer,
                }}
              >
                <RouterView />
              </div>
            </div>
          </Content>
          <Footer className={styles.footer}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};
export default App;

import React, { Children, useState } from "react";
import { useNavigate, Routes, Route, Outlet } from "react-router-dom";

import styles from "./styles/app.module.scss";
import { Layout, Menu, theme, Breadcrumb } from "antd";
//引入路由表
import routes from "./router";
// 布局组件
const { Header, Content, Footer, Sider } = Layout;
// 处理路由
let items = [];
Object.values(routes).map((item, index) => {
  if (!item.isHide) {
    items.push({
      key: item.path,
      icon: React.createElement(item.icon),
      label: item.title,
      path: item.path,
      // children: [
      //   { key: "9", label: "Option 9" },
      //   { key: "10", label: "Option 10" },
      //   { key: "11", label: "Option 11" },
      //   { key: "12", label: "Option 12" },
      // ],
    });
  }
});
const App = () => {
  // 主题
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [pathStatu, setPathStatu] = useState("/home");
  // 点击路由进行跳转
  const navigate = useNavigate();
  const onClick = (item) => {
    setPathStatu(item.key);
    navigate(item.key, { replace: true });
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
          />
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
                <Routes>
                  {routes.map((item, index) => {
                    return (
                      <Route
                        exact
                        key={index}
                        path={item.path}
                        element={item.element}
                      />
                    );
                  })}
                </Routes>
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

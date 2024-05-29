import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import styles from "./styles/app.module.scss";
import { ConfigProvider, Layout, Menu, theme, Breadcrumb } from "antd";
//引入路由表
import routes from "./router";
// 布局组件
const { Header, Content, Footer, Sider } = Layout;
// 处理路由
let items = [];
Object.values(routes).map((item, index) => {
  if (!item.isHide) {
    items.push({
      key: String(index + 1),
      icon: React.createElement(item.icon),
      label: item.title,
      path: item.path,
    });
  }
});
const App = () => {
  // 主题
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // 点击路由进行跳转
  const navigate = useNavigate();
  const onClick = ({ item, key, keyPath, domEvent }) => {
    // console.log(item, key, keyPath, domEvent);
    navigate(item.props.path, { replace: true });
  };
  //生成路由规则
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
        <Layout hasSider>
          <Sider
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
              selectedKeys={["0"]}
              defaultSelectedKeys={["0"]}
              items={items}
              onClick={onClick}
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
      </ConfigProvider>
    </div>
  );
};
export default App;

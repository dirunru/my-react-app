import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles/app.module.scss";
import { DownOutlined } from "@ant-design/icons";
import {
  Layout,
  Breadcrumb,
  theme,
  Menu,
  message,
  Dropdown,
  Space,
} from "antd";
//引入路由表
import { routeMenus, RouterView } from "./router";

// 布局组件
const { Header, Content, Footer, Sider } = Layout;
// 处理路由
let items = [];
Object.values(routeMenus).map((item, index) => {
  if (!item.isHide) {
    items.push({
      key: item.key,
      icon: item.icon ? React.createElement(item.icon) : "",
      label: item.title,
      path: item.key,
      children: item.children?.map((it) => {
        return {
          key: item.key + it.key,
          label: it.title,
          icon: React.createElement(it.icon),
          path: item.key + it.key,
        };
      }),
    });
  }
});
const menus = [
  {
    label: "Clicking me will not close the menu.",
    key: "1",
  },
  {
    label: "Clicking me will not close the menu also.",
    key: "2",
  },
  {
    label: "Clicking me will close the menu.",
    key: "3",
  },
];
const breadcrumbItems = [
  {
    title: "Location",
  },

  {
    title: "Application Center",
  },
  {
    title: "Application List",
  },
  {
    title: "An Application",
  },
];
const App = () => {
  // 主题
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [pathStatu, setPathStatu] = useState("/home/list");
  const [openKeyMemnu, setOpenKeyMemnu] = useState("/home");
  const [username, setUsername] = useState("游客");
  // 点击路由进行跳转
  const navigate = useNavigate();
  const onClick = (item) => {
    setPathStatu(item.key);
    navigate(item.key, { replace: true });
  };
  useEffect(() => {
    navigate(pathStatu, { replace: true });
  }, []);
  // 退出登录
  const logout = () => {
    message.success("退出成功，即将返回登录页");
    localStorage.clear(); // 清除localStorage中的数据
    setTimeout(() => navigate("/login"), 1500);
  };
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };
  const handleOpenChange = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };
  //生成路由规则
  return (
    <div className="app">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          className={styles.sider}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            defaultOpenKeys={[openKeyMemnu]}
            theme="dark"
            mode="inline"
            selectedKeys={[pathStatu]}
            items={items}
            onClick={(item) => onClick(item)}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Dropdown
              menu={{
                items: menus,
                onClick: handleMenuClick,
              }}
              className={styles.dropdown}
              onOpenChange={handleOpenChange}
              open={open}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {username}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Header>
          <Content className={styles.content}>
            <Breadcrumb
              items={breadcrumbItems}
              style={{ height: "32px", lineHeight: "32px" }}
            />
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <RouterView />
            </div>
          </Content>
          <Footer className={styles.footer}>
            Ant Design ©{new Date().getFullYear()} Created by dirunru
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};
export default App;

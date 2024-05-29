import React, { Component } from 'react';
import styles from './home.module.scss'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const menus = {
  'UserOutlined': {
    title:'人员列表',
    component: UserOutlined,
  },
  'VideoCameraOutlined': {
    title:'视频列表',
    component: VideoCameraOutlined,
  },
  'UploadOutlined':{
    title:'上传',
    component: UploadOutlined,
  },
  'BarChartOutlined':{
    title:'Echarts',
    component: BarChartOutlined,
  },
  'CloudOutlined':{
    title:'云文件列表',
    component: CloudOutlined,
  },
  'AppstoreOutlined': {
    title:'应用',
    component: AppstoreOutlined,
  },
  'TeamOutlined': {
    title:'人员信息',
    component: TeamOutlined,
  },
  'ShopOutlined': {
    title:'商店',
    component: ShopOutlined,
  },
}
let items = []
Object.values(menus).map((item,index) => {
  console.log('item--------------', item)
  items.push({
    key: String(index + 1),
    icon: React.createElement(item.component),
    label: item.title,
  })
})
console.log('styles', JSON.stringify(styles))
const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>long content</p>
          </div>
        </Content>
        <Footer className={styles.footer}s>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;
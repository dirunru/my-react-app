// 路由表
// routes/index.js
import { Navigate, redirect, useRoutes } from "react-router-dom";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import About from "../pages/about";
import Home from "../pages/home";
import Detail from "../pages/home/detail";
import Page404 from "../pages/ErrorPage/404.jsx";
// 左侧 菜单展示
export const routeMenus = [
  {
    key: "/home",
    title: "首页",
    icon: UserOutlined,
    children: [
      {
        key: "/list",
        title: "人员列表",
        icon: UserOutlined,
      },
      {
        key: "/about",
        title: "关于",
        icon: UserOutlined,
      },
      {
        key: "/detail",
        title: "详情",
        icon: CloudOutlined,
      },
      {
        title: "按钮",
        key: "/buttons",
        icon: CloudOutlined,
      },
      {
        title: "弹框",
        key: "/modals",
        icon: CloudOutlined,
      },
      {
        title: "Loading",
        key: "/loadings",
        icon: CloudOutlined,
      },
      {
        title: "通知提醒",
        key: "/notification",
        icon: CloudOutlined,
      },
      {
        title: "全局Message",
        key: "/messages",
        icon: CloudOutlined,
      },
      {
        title: "Tab页签",
        key: "/tabs",
        icon: CloudOutlined,
      },
      {
        title: "图片画廊",
        key: "/gallery",
        icon: CloudOutlined,
      },
      {
        title: "轮播图",
        key: "/carousel",
        icon: CloudOutlined,
      },
    ],
  },
  {
    title: "表单",
    key: "/form",
    icon: CloudOutlined,
    children: [
      {
        title: "登录",
        key: "/login",
        icon: CloudOutlined,
      },
      {
        title: "注册",
        key: "/reg",
        icon: CloudOutlined,
      },
    ],
  },
  {
    title: "表格",
    key: "/table",
    icon: CloudOutlined,
    children: [
      {
        title: "基础表格",
        key: "/basic",
        icon: CloudOutlined,
      },
      {
        title: "高级表格",
        key: "/high",
        icon: CloudOutlined,
      },
    ],
  },
  {
    title: "富文本",
    key: "/rich",
    icon: CloudOutlined,
  },
  {
    title: "城市管理",
    key: "/city",
    icon: CloudOutlined,
  },
  {
    title: "订单管理",
    key: "/order",
    icon: CloudOutlined,
    children: [
      {
        title: "订单详情",
        key: "/detail",
        icon: CloudOutlined,
      },
      {
        title: "结束订单",
        key: "/finish",
        icon: CloudOutlined,
      },
    ],
  },
  {
    title: "员工管理",
    key: "/user",
    icon: CloudOutlined,
  },
  {
    title: "车辆地图",
    key: "/bikeMap",
    icon: CloudOutlined,
  },
  {
    title: "图标",
    key: "/charts",
    icon: CloudOutlined,
    children: [
      {
        title: "柱形图",
        key: "/bar",
        icon: CloudOutlined,
      },
      {
        title: "饼图",
        key: "/pie",
        icon: CloudOutlined,
      },
      {
        title: "折线图",
        key: "/line",
        icon: CloudOutlined,
      },
    ],
  },
  {
    title: "权限设置",
    key: "/permission",
    icon: CloudOutlined,
  },
];
const routes = [
  {
    path: "/home/list",
    element: <Home />,
  },
  {
    path: "/home/detail",
    element: <Detail />,
  },
  {
    path: "/home/about",
    element: <About />,
  },
  {
    path: "/",
    redirect: "/home/list",
    element: <Home />,
  },
];
// 使用useRoutes 创建
export const RouterView = () => {
  // 创建路由
  const elem = useRoutes(routes);
  // 返回接口
  return elem;
};

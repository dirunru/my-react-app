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

export const routes = [
  {
    path: "/home/",
    key: "/home",
    title: "首页",
    icon: UserOutlined,
    element: <Home />,
    children: [
      {
        path: "",
        title: "人员列表",
        icon: UserOutlined,
        element: <Navigate to="/home" />,
      },
      {
        path: "detail",
        element: <Detail />,
        title: "详情",
        icon: CloudOutlined,
      },
      {
        title: "按钮",
        key: "/ui/buttons",
        path: "ui/buttons",
        icon: CloudOutlined,
        element: <About />,
      },
      {
        title: "弹框",
        key: "/ui/modals",
        path: "ui/modals",
        icon: CloudOutlined,
      },
      {
        title: "Loading",
        key: "/ui/loadings",
        path: "ui/loadings",
        icon: CloudOutlined,
      },
      {
        title: "通知提醒",
        key: "/ui/notification",
        path: "ui/notification",
        icon: CloudOutlined,
      },
      {
        title: "全局Message",
        key: "/ui/messages",
        path: "ui/messages",
        icon: CloudOutlined,
      },
      {
        title: "Tab页签",
        key: "/ui/tabs",
        path: "ui/tabs",
        icon: CloudOutlined,
      },
      {
        title: "图片画廊",
        key: "/ui/gallery",
        path: "ui/gallery",
        icon: CloudOutlined,
      },
      {
        title: "轮播图",
        key: "/ui/carousel",
        path: "ui/carousel",
        icon: CloudOutlined,
      },
    ],
  },
  {
    title: "表单",
    key: "/form",
    path: "/form/",
    icon: CloudOutlined,
    children: [
      {
        title: "登录",
        key: "/login",
        path: "login",
        icon: CloudOutlined,
      },
      {
        title: "注册",
        key: "/reg",
        path: "reg",
        icon: CloudOutlined,
      },
    ],
  },
  {
    title: "表格",
    key: "/table",
    path: "/table/",
    icon: CloudOutlined,
    children: [
      {
        title: "基础表格",
        key: "/table/basic",
        path: "table/basic",
        icon: CloudOutlined,
      },
      {
        title: "高级表格",
        key: "/table/high",
        path: "table/high",
        icon: CloudOutlined,
      },
    ],
  },
  {
    title: "富文本",
    key: "/rich",
    path: "/rich/",
    icon: CloudOutlined,
  },
  {
    title: "城市管理",
    key: "/city",
    path: "city",
    icon: CloudOutlined,
  },
  {
    title: "订单管理",
    key: "/order",
    path: "order",
    icon: CloudOutlined,
    children: [
      {
        title: "订单详情",
        key: "detail",
        path: "detail",
        icon: CloudOutlined,
      },
      {
        title: "结束订单",
        key: "finish",
        path: "finish",
        icon: CloudOutlined,
      },
    ],
  },
  {
    title: "员工管理",
    key: "/user",
    path: "/user",
    icon: CloudOutlined,
  },
  {
    title: "车辆地图",
    key: "/bikeMap",
    path: "/bikeMap",
    icon: CloudOutlined,
  },
  {
    title: "图标",
    key: "/charts",
    path: "/charts/",
    icon: CloudOutlined,
    children: [
      {
        title: "柱形图",
        path: "charts/bar",
        key: "/charts/bar",
        icon: CloudOutlined,
      },
      {
        title: "饼图",
        path: "charts/pie",
        key: "/charts/pie",
        icon: CloudOutlined,
      },
      {
        title: "折线图",
        path: "charts/line",
        key: "/charts/line",
        icon: CloudOutlined,
      },
    ],
  },
  {
    title: "权限设置",
    key: "/permission",
    path: "/permission",
    icon: CloudOutlined,
  },
  {
    path: "/about",
    key: "/about",
    title: "人员列表",
    icon: UserOutlined,
    element: <About />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
// 使用useRoutes 创建
export const RouterView = () => {
  // 创建路由
  const elem = useRoutes(routes);
  // 返回接口
  return elem;
};

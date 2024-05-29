// 路由表
// routes/index.js
import { Navigate } from "react-router-dom";
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
// UploadOutlined: {
//   title: "上传",
//   icon: UploadOutlined,
//   path: "/Home",
// },
// BarChartOutlined: {
//   title: "Echarts",
//   icon: BarChartOutlined,
//   path: "/Home",
// },
// CloudOutlined: {
//   title: "云文件列表",
//   icon: CloudOutlined,
//   path: "/Home",
// },
// AppstoreOutlined: {
//   title: "应用",
//   icon: AppstoreOutlined,
//   path: "/Home",
// },
// TeamOutlined: {
//   title: "人员信息",
//   icon: TeamOutlined,
//   path: "/Home",
// },
// ShopOutlined: {
//   title: "商店",
//   icon: ShopOutlined,
//   path: "/Home",
// },
const routes = [
  //路由重定向
  {
    path: "/",
    element: <Navigate to="/home" />,
    title: "人员列表",
    icon: UserOutlined,
    isHide: true,
  },
  {
    path: "/home",
    element: <Home />,
    title: "人员列表",
    icon: UserOutlined,
    //创建子路由
    // children: [
    //   {
    //     path: "children",
    //     element: <Children />,
    //   },
    // ],
  },
  {
    path: "/about",
    element: <About />,
    title: "视频列表",
    icon: VideoCameraOutlined,
  },
];

export default routes;

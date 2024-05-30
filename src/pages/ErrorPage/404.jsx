import { Empty } from "antd";
export default function Page404() {
  return (
    <Empty
      imageStyle={{ marginTop: 300 }}
      description={<span>该页面不存在或无权限访问, 5秒后,返回上一个页面</span>}
    ></Empty>
  );
}

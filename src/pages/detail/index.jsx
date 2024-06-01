import { useState, useEffect } from "react";
import { reqGetBannerList } from "../../api";
export default function Detail() {
  const [tableList, setTableList] = useState([]);
  useEffect(() => {
    reqGetBannerList().then((res) => {
      console.log(res.list);
    });
  });
  return (
    <section>
      <h1>详情页面111</h1>
    </section>
  );
}

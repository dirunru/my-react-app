import { useState, useEffect } from "react";
import { reqGetBannerList } from "../../api";
import { Table } from "antd";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
  },
];

export default function Detail() {
  const [tableList, setTableList] = useState([]);

  useEffect(() => {
    reqGetBannerList().then((res) => {
      setTableList(res.list);
    });
  }, []);
  return (
    <section>
      <Table dataSource={tableList} columns={columns} />
    </section>
  );
}

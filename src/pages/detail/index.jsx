import { useState, useEffect } from "react";
import { reqGetBannerList } from "../../api";
import { Table, Button } from "antd";
import { getTableScroll } from "../../utils/autoFit";

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
    title: "性别",
    dataIndex: "gender",
    key: "gender",
    render: (_, { gender }) => {
      let color = gender ? "red" : "green";
      return <div style={{ color: color }}>{gender ? "女" : "男"}</div>;
    },
  },
  {
    title: "出生时间",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "邮箱",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "操作",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => {
      return (
        <Button size="small" onClick={() => handleEdit(record)}>
          编辑
        </Button>
      );
    },
  },
];
const handleEdit = (e, record) => {
  console.log(e, record, "record");
};
export default function Detail() {
  const [tableList, setTableList] = useState([]);
  const [tableHeight, setTableHeight] = useState("");
  useEffect(() => {
    reqGetBannerList().then((res) => {
      setTableList(res.list);
    });
    const tableHeight = getTableScroll({
      extraHeight: 120,
      id: "tableId",
    });
    setTableHeight(tableHeight);
  }, []);
  return (
    <div>
      <Table
        rowKey="id"
        id="tableId"
        dataSource={tableList}
        columns={columns}
        scroll={{
          y: tableHeight,
        }}
      />
    </div>
  );
}

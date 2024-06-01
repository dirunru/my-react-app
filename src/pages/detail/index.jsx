import { useState, useEffect } from "react";
import { reqGetBannerList } from "../../api";
import { Table } from "antd";
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
    title: "时间",
    dataIndex: "time",
    key: "time",
  },
];

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

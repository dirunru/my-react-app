/**
 * 获取第一个表格的可视化高度
 * @param {*} extraHeight 额外的高度(表格底部的内容高度 Number类型,默认为74)
 * @param {*} id 当前页面中有多个table时需要制定table的id
 */
export const getTableScroll = (params) => {
  let extraHeight = params?.extraHeight;
  if (typeof extraHeight == "undefined") {
    //  默认底部边距20
    extraHeight = 0;
  }
  let tHeader = null;
  if (params?.id) {
    const { id } = params;
    tHeader = document.getElementById(id)
      ? document.getElementById(id).getElementsByClassName("ant-table-thead")[0]
      : null;
  } else {
    tHeader = document.getElementsByClassName("ant-table-thead")[0];
  }
  //表格内容距离顶部的距离
  let tHeaderBottom = 0;
  if (tHeader) {
    tHeaderBottom = tHeader.getBoundingClientRect().bottom;
  }

  //窗体高度-表格内容顶部的高度-表格内容底部的高度
  let height = `calc(100vh - ${tHeaderBottom + extraHeight}px)`;
  return height;
};

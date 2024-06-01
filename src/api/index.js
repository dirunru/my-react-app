import requests from "../utils/mockRequests.js";
import "../mock/user";

export const reqGetBannerList = (data) => {
  // return requests({
  //   url: "/banner",
  //   method: "post",
  //   data,
  // });
  return new Promise((resolve, reject) => {
    requests({
      url: "/banner",
      method: "post",
      data,
    }).then((res) => {
      if (res.data.code === "200") {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    });
  });
};

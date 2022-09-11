import request from "axios";
class Api {
  static loadNotionContent = (pageId) => {
    const apiCompletionPromise = request({
      method: "GET",
      url: `https://notion-api.splitbee.io/v1/page/${pageId}`,
    });
    return apiCompletionPromise;
  };
}
export default Api;

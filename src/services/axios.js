import axios from "axios";
import { useSelector } from "react-redux";
const APIrequest = async ({ method, url, baseURL, queryParams, bodyData, }) => {
  try {
    console.log("3333");
    // const token = useSelector(state => state?.user?.userData?.token);
    const axiosConfig = {
      method: method || "GET",
      baseURL: "http://localhost:5050/api/",
      headers: {
        "Content-Type": "application/json",
        "X-Frame-Options": "sameorigin",
      },
    };
    if (baseURL) {
      axiosConfig.baseURL = baseURL;
    }
    if (url) {
      axiosConfig.url = url;
    }
    if (queryParams) {
      const queryParamsPayload = {};
      for (const key in queryParams) {
        if (Object.hasOwnProperty.call(queryParams, key)) {
          let element = queryParams[key];

          if (typeof element === "string") {
            element = element.trim();
          }

          if (!["", null, undefined, NaN].includes(element)) {
            queryParamsPayload[key] = element;
          }
        }
      }

      axiosConfig.params = queryParamsPayload;
    }
    // if (!token) {
    //   axiosConfig.headers = {
    //     ...axiosConfig.headers,
    //     authorization: `Foundation@dfsf@${token}`
    //   }
    // }

    if (bodyData) {
      const bodyPayload = {};
      for (const key in bodyData) {
        if (Object.hasOwnProperty.call(bodyData, key)) {
          let element = bodyData[key];

          if (typeof element === "string") {
            element = element.trim();
          }
          if (![null, undefined, NaN].includes(element)) {
            bodyPayload[key] = element;
          }
        }
      }
      axiosConfig.data = bodyPayload;
    }
    const res = await axios(axiosConfig);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export default APIrequest;

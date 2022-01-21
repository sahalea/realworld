import axios from "axios";

// The base api url
const apiUrl = "https://conduit.productionready.io/api";

/**
 * Common method to send the api requests.
 *
 * @param config AxiosRequestConfig object which is same as fetch parameters
 * @returns axios axios response data
 */
export function doRequest(config = {}) {
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  return axios
    .request(config)
    .then(response => {
      return response.data || {};
    })
    .catch(error => ({ error }));
}

/**
 * Send get request to the server
 *
 * @param {String} url - The request url
 * @param {Object} params - Any URL parameters to send along with request
 * @param {AxiosConfig} config - Additional axios config object
 */
export const get = (url, params, config) =>
  doRequest({ params, url: apiUrl + url, method: "GET", ...config });

/**
 * Send get request to the server
 *
 * @param {String} url - The request url
 * @param {Object} params - Any  body parameters to send along with request
 * @param {AxiosConfig} config - Additional axios config object
 */
export const post = (url, data, config?: any) =>
  doRequest({ data, url: apiUrl + url, method: "POST", ...config });

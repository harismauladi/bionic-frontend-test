import axios from "axios";

const api = ({ headers = {}, params = {} } = {}) => {
  const instance = axios.create({
    baseURL:
      "https://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth",
    headers: {
      ...headers,
    },
    params,
  });
  return instance;
};

const postData = async (data) => {
  return api().post("", data);
};

export { postData };

import axios from "axios";

const api = ({ headers = {}, params = {} } = {}) => {
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_DUMMY_API_URL}`,
    headers: {
      ...headers,
    },
    params,
  });
  return instance;
};

const getDataDummy = async () => {
  return api().get('/getData');
};

export { getDataDummy };

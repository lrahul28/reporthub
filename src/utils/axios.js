import axios from 'axios';
import Cookies from 'js-cookie';

const request = (method = 'get', url = '', payload = {}) => {
  const token = Cookies.get('accessToken');
  const options = {
    method,
    url,
    data: payload,
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    axios(options)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default request;

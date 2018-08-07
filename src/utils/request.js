import axios from 'axios';
import router from '../router';

export default async ({ url, ...others }) => {
  try {
    const response = await axios({
      url: `https://weixin.btevolution.com${url}`,
      headers: {
        token: localStorage.getItem('token')
      },
      ...others
    });
    const { data } = response;
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      router.push({ name: 'login' });
    }
    return Promise.reject(error);
  }
};

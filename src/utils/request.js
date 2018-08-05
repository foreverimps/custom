import axios from 'axios';

export default async ({ url, ...others }) => {
  const response = await axios({
    url: `https://weixin.btevolution.com${url}`,
    headers: {
      token: localStorage.getItem('token')
    },
    ...others
  });
  const { data } = response;
  return data;
};

import request from '../../utils/request';

export const setLogout = async () =>
  await request({
    url: `/api/common/loginOut`,
    method: 'post'
  });

import request from '../../utils/request';

export const getADs = async () =>
  await request({
    url: `/api/ad/get/PAY_SUCCESS`,
    method: 'get'
  });

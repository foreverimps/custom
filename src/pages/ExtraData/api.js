import request from '../../utils/request';

export const setPhone = async data =>
  await request({
    url: `/api/orderAddress/setContactPhone`,
    method: 'post',
    data
  });

export const setAddressTime = async data =>
  await request({
    url: `/api/orderAddress/setAddressAndReceiveTime`,
    method: 'post',
    data
  });

export const setRemark = async data =>
  await request({
    url: `/api/orderAddress/setRemark`,
    method: 'post',
    data
  });

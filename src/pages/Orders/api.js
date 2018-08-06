import request from '../../utils/request';

export const getCart = async () =>
  await request({
    url: `/api/shoppingCart/get`,
    method: 'post'
  });

export const editCart = async data =>
  await request({
    url: `/api/shoppingCart/update`,
    method: 'post',
    data
  });

export const createOrder = async data =>
  await request({
    url: `/api/order/submit`,
    method: 'post',
    data
  });

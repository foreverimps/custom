import request from '../../utils/request';

export const getProductDetail = async ({ productId }) =>
  await request({
    url: `/api/product/get/${productId}`,
    method: 'get'
  });

export const addCart = async data =>
  await request({
    url: `/api/shoppingCart/add`,
    method: 'post',
    data
  });

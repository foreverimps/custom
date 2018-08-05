import request from '../../utils/request';

export const getAreas = async () =>
  await request({
    url: `/api/materialsAttr/getAllFunctionalArea`,
    method: 'get'
  });

export const getCategorys = async () =>
  await request({
    url: `/api/materialsAttr/getAllItemCategory`,
    method: 'get'
  });

export const getProducts = async params =>
  await request({
    url: `/api/product/list`,
    method: 'get',
    params
  });

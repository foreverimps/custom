import request from '../../utils/request';

export const getAreas = async () =>
  await request({
    url: `/api/materialsAttr/getAllFunctionalArea`,
    method: 'get'
  });

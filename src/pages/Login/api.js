import request from '../../utils/request';

export const getSmsCode = async ({ phone, smsType }) =>
  await request({
    url: `/api/common/sendSms/${phone}/${smsType}`,
    method: 'post'
  });

export const loginByPhone = async ({ phone, smsCode }) =>
  await request({
    url: `/api/common/loginByPhone/${phone}/${smsCode}`,
    method: 'post'
  });

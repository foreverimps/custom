import request from '../../utils/request';

export async function getSmsCode({ phone, smsType }) {
  await request({
    url: `/api/common/sendSms/${phone}/${smsType}`,
    method: 'post'
  });
}

export async function loginByPhone({ phone, smsCode }) {
  await request({
    url: `/api/common/loginByPhone/${phone}/${smsCode}`,
    method: 'post'
  });
}

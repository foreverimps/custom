import axios from 'axios';

export default async ({ url, ...others }) => {
  await axios({
    url: `https://weixin.btevolution.com${url}`,
    headers: {
      token:
        'Qr3107/K+7MxmIIx4Qu+uROr26jwbviPRQj0IwKw+bwV+T71RCeeMGJHEuon4KBp6SHR00UCjOruMm5vepei4xeLv7FyZd+zc4YC80EZPSBFl4Ki1s0pg8uUr7O678h7SSAOIbw/35+UPqyV8TgIwu5X2lXhw0MomVwwT/y4Qhc='
    },
    ...others
  });
};
